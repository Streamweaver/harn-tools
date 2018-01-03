import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.scss']
})
export class DistanceComponent implements OnInit {

  leagues: number;  // 1 league = 2.5 miles, 4km
  hexes: number; // 1 hex = 5 leagues
  miles: number;
  km: number;

  constructor() { }

  ngOnInit() {
    this.leagues = 5;
    this.onLeagueChange();
  }

  onLeagueChange() {
    this.hexes = this._round(this.leagues / 5);
    this.miles = this._round(this.leagues * 2.5);
    this.km = this._round(this.leagues * 4);
  }

  onHexesChange() {
    this.leagues = this._round(this.hexes * 5);
    this.miles = this._round(this.hexes * 12.5);
    this.km = this._round(this.hexes * 20);
  }

  onMilesChange() {
    this.leagues = this._round(this.miles / 2.5);
    this.hexes = this._round(this.miles / 12.5);
    this.km = this._round(this.miles * 1.6);
  }

  onKilometersChange() {
    this.leagues = this._round(this.km / 4);
    this.hexes = this._round(this.km / 20);
    this.miles = this._round(this.km * 0.625);
  }

  private _round(n: number): number {
    return parseFloat(n.toFixed(2));
  }
}
