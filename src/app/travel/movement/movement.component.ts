import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {IMovementRate} from '../shared/movementrate.interface';
import { Units } from '../shared/units.enum';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.scss']
})
export class MovementComponent implements OnInit {
  movementRatesFlat: IMovementRate[];
  private movementRatesRough: IMovementRate[];
  private movementRatesMountain: IMovementRate[];
  selectedUnits: Units;
  unitChoices = [
    {
      id: Units.LEAGUES,
      value: 'Leagues'
    },
    {
      id: Units.HEXES,
      value: 'Hexes'
    },
    {
      id: Units.MILES,
      value: 'Miles'
    },
    {
      id: Units.KILOMETERS,
      value: 'KM'
    }
  ];

  constructor() {
  }

  ngOnInit() {
    this._loadMovementRates();
    this.selectedUnits = Units.KILOMETERS;
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
    return parseFloat(adjustedRate.toFixed(2));
  }

  onUnitSelect(u: number) {
    console.log(u);
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
