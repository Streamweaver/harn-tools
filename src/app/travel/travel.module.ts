import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DistanceComponent } from './distance/distance.component';
import { MovementComponent } from './movement/movement.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DistanceComponent, MovementComponent]
})
export class TravelModule { }
