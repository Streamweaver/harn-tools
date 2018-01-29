import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DistanceComponent } from './distance/distance.component';
import { MovementComponent } from './movement/movement.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DistanceComponent, MovementComponent]
})
export class TravelModule { }
