import {Component, OnInit, Input} from '@angular/core';
import {IMovementRate} from '../shared/movementrate.interface';
import { Units } from '../shared/units.enum';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.scss']
})
export class MovementComponent implements OnInit {
  @Input('distances') distances: FormGroup;
  movementRatesFlat: IMovementRate[];
  movementRatesRough: IMovementRate[];
  movementRatesMountain: IMovementRate[];
  leagues = Units.LEAGUES;
  hexes = Units.HEXES;
  miles = Units.MILES;
  km = Units.KILOMETERS;
  displayTravelTimes: boolean;
  selectedUnits: Units;
  unitChoices: {[id: number]: string} = {
    [Units.LEAGUES]: 'leagues',
    [Units.HEXES]: 'hexes',
    [Units.MILES]: 'miles',
    [Units.KILOMETERS]: 'km'
  };
  conditions = {
    weather: {
      rain: false,
      blizzard: false
    },
    ground: {
      mud: false,
      lightSnow: false,
      snow: false,
      deepSnow: false
    }
  };

  constructor() {
  }

  ngOnInit() {
    this._loadMovementRates();
    this.selectedUnits = Units.KILOMETERS;
    this.displayTravelTimes = true;
  }

  /**
   * Sets any snow condition not passed to function as false.
   * @param {string} c - condition name to keep true.
   */
  onSnowClick(c: string) {
    for (const condition of ['lightSnow', 'snow', 'deepSnow']) {
      if (condition !== c) {
        this.conditions.ground[condition] = false;
      }
    }
  }

  onRainClick() {
    this.conditions.weather.blizzard = false;
  }

  onBlizzardClick() {
    this.conditions.weather.rain = false;
  }

  /**
   * Toggles the display variable for Travel Times or Travel Rates.
   */
  onTravelTabsClick() {
    this.displayTravelTimes = !this.displayTravelTimes;
  }

  /**
   * Returns a display value for the travel time calculations.
   * @param {number} rate
   * @returns {string}
   */
  travelTimeDisplay(rate: number): string {
    const tt = this.calculateHours(rate);
    if (tt === Infinity) {
      return 'n/a';
    }
    return tt + ' hrs';
  }
  /**
   * Calculates the number if hours it would take to travel the current distances value.
   * @param {number} Base rate of travel for selected units per hour.
   * @returns {number}
   */
  calculateHours(rate: number): number {
    const adjustedRate = rate * 0.25 * this.conditionsAdjustment();
    // distance / adjustedRate = hours
    const travelHours = this.distances.controls['leagues'].value / adjustedRate;
    return parseFloat(travelHours.toFixed(1));
  }

  adjustedRate(rate: number): number {
    let adjustedRate = 0;
    switch (this.selectedUnits) {
      case Units.LEAGUES:
        adjustedRate = rate * 0.25;
        break;
      case Units.HEXES:
        adjustedRate = rate * 0.25 * 0.2;
        break;
      case Units.MILES:
        adjustedRate = rate * 0.25 * 2.5;
        break;
      case Units.KILOMETERS:
        adjustedRate = rate * 0.25 * 4;
        break;
      default:
        adjustedRate = rate;
        break;
    }
    adjustedRate = adjustedRate * this.conditionsAdjustment();
    return parseFloat(adjustedRate.toFixed(2));
  }

  conditionsAdjustment(): number {
    let condition = 1;
    condition = ((this.conditions.ground.mud) ? condition * .5 : condition);
    condition = ((this.conditions.weather.rain) ? condition * .9 : condition);
    condition = ((this.conditions.weather.blizzard) ? condition * .25 : condition);
    condition = ((this.conditions.ground.lightSnow) ? condition * .8 : condition);
    condition = ((this.conditions.ground.snow) ? condition * .7 : condition);
    condition = ((this.conditions.ground.deepSnow) ? condition * .25 : condition);
    return condition;
  }

  getUnitLabel(): string {
    return 'uknown';
  }

  onUnitSelectClick(u: Units) {
    this.selectedUnits = u;
  }

  private _loadMovementRates() {
    this.movementRatesFlat = [  // values are leagues / 4 hours
      {
        terrain: 'Flat',
        path: 'Paved Road',
        foot: 5,
        horse: 10,
        cart: 5,
        wagon: 5
      },
      {
        terrain: 'Flat',
        path: 'Unpaved Road',
        foot: 5,
        horse: 9,
        cart: 5,
        wagon: 4
      },
      {
        terrain: 'Flat',
        path: 'Trail',
        foot: 5,
        horse: 9,
        cart: 4,
        wagon: 3
      },
      {
        terrain: 'Flat',
        path: 'Cropland/Pasture',
        foot: 4,
        horse: 6,
        cart: 2,
        wagon: 1
      },
      {
        terrain: 'Flat',
        path: 'Mixed Woodland',
        foot: 5,
        horse: 6,
        cart: 2,
        wagon: 1
      },
      {
        terrain: 'Flat',
        path: 'Heathland',
        foot: 4,
        horse: 6,
        cart: 0.5,
        wagon: 0.5
      },
      {
        terrain: 'Flat',
        path: 'Mixed Forest',
        foot: 3,
        horse: 4,
        cart: 0.5,
        wagon: 0.5
      },
      {
        terrain: 'Flat',
        path: 'Needleleaf Forest',
        foot: 3,
        horse: 5,
        cart: 1,
        wagon: 0.5
      },
      {
        terrain: 'Flat',
        path: 'Swamp',
        foot: 1,
        horse: 1,
        cart: 0,
        wagon: 0
      },
    ];
    this.movementRatesRough = [{
      terrain: 'Rough',
      path: 'Paved Road',
      foot: 4,
      horse: 9,
      cart: 4,
      wagon: 4
    },
      {
        terrain: 'Rough',
        path: 'Unpaved Road',
        foot: 4,
        horse: 8,
        cart: 4,
        wagon: 3
      },
      {
        terrain: 'Rough',
        path: 'Trail',
        foot: 4,
        horse: 7,
        cart: 2,
        wagon: 1
      },
      {
        terrain: 'Rough',
        path: 'Cropland/Pasture',
        foot: 3,
        horse: 5,
        cart: 1,
        wagon: 0.5
      },
      {
        terrain: 'Rough',
        path: 'Mixed Woodland',
        foot: 3,
        horse: 5,
        cart: 1,
        wagon: 0.5
      },
      {
        terrain: 'Rough',
        path: 'Heathland',
        foot: 3,
        horse: 5,
        cart: 0.5,
        wagon: 0.5
      },
      {
        terrain: 'Rough',
        path: 'Mixed Forest',
        foot: 2,
        horse: 2,
        cart: 0.5,
        wagon: 0
      },
      {
        terrain: 'Rough',
        path: 'Needleleaf Forest',
        foot: 2,
        horse: 3,
        cart: 0.5,
        wagon: 0
      }];
    this.movementRatesMountain = [
      {
        terrain: 'Mountain',
        path: 'Paved Road',
        foot: 3,
        horse: 6,
        cart: 3,
        wagon: 2
      },
      {
        terrain: 'Mountain',
        path: 'Unpaved Road',
        foot: 3,
        horse: 6,
        cart: 2,
        wagon: 1
      },
      {
        terrain: 'Mountain',
        path: 'Trail',
        foot: 3,
        horse: 5,
        cart: 1,
        wagon: 0.5
      },
      {
        terrain: 'Mountain',
        path: 'Woodland',
        foot: 2,
        horse: 4,
        cart: 0,
        wagon: 0
      },
      {
        terrain: 'Mountain',
        path: 'Alpine Vegitation',
        foot: 2,
        horse: 4,
        cart: 0,
        wagon: 0
      },
      {
        terrain: 'Mountain',
        path: 'Mixed Forest',
        foot: 1,
        horse: 1,
        cart: 0,
        wagon: 0
      },
      {
        terrain: 'Mountain',
        path: 'Needleleaf Forest',
        foot: 1,
        horse: 2,
        cart: 0,
        wagon: 0
      },
      {
        terrain: 'Mountain',
        path: 'Ice/Snow/Rockfield',
        foot: 1,
        horse: 2,
        cart: 0,
        wagon: 0
      }];
  }
}
