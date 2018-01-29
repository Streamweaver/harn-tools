import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  distanceForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
    this.onLeagueChange();
  }

  createForm() {
    this.distanceForm = this.fb.group({
      leagues: [5, [Validators.required, Validators.min(0)]],
      hexes: [0, [Validators.required, Validators.min(0)]],
      miles: [0, [Validators.required, Validators.min(0)]],
      km: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onLeagueChange() {
    if (this.distanceForm.valid) {
      this.distanceForm.controls['hexes'].setValue(this._round(
        this.distanceForm.controls['leagues'].value * .2));
      this.distanceForm.controls['miles'].setValue(this._round(
        this.distanceForm.controls['leagues'].value * 2.5));
      this.distanceForm.controls['km'].setValue(this._round(
        this.distanceForm.controls['leagues'].value * 4));
    }
  }

  onHexesChange() {
    if (this.distanceForm.valid) {
      this.distanceForm.controls['leagues'].setValue(this._round(
        this.distanceForm.controls['hexes'].value * 5));
      this.distanceForm.controls['miles'].setValue(this._round(
        this.distanceForm.controls['hexes'].value * 12.5));
      this.distanceForm.controls['km'].setValue(this._round(
        this.distanceForm.controls['hexes'].value * 20));
    }
  }

  onMilesChange() {
    if (this.distanceForm.valid) {
      this.distanceForm.controls['leagues'].setValue(this._round(
        this.distanceForm.controls['miles'].value * 0.4));
      this.distanceForm.controls['hexes'].setValue(this._round(
        this.distanceForm.controls['miles'].value * 0.08));
      this.distanceForm.controls['km'].setValue(this._round(
        this.distanceForm.controls['miles'].value * 1.6));
    }
  }

  onKilometersChange() {
    if (this.distanceForm.valid) {
      this.distanceForm.controls['leagues'].setValue(this._round(
        this.distanceForm.controls['km'].value * 0.25));
      this.distanceForm.controls['hexes'].setValue(this._round(
        this.distanceForm.controls['km'].value * 0.05));
      this.distanceForm.controls['miles'].setValue(this._round(
        this.distanceForm.controls['km'].value * 0.625));
    }
  }

  private _round(n: number): number {
    return parseFloat(n.toFixed(2));
  }
}
