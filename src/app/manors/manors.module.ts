import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManorsRoutingModule } from './manors-routing.module';
import { HouseholdComponent } from './household/household.component';
import { VillageComponent } from './village/village.component';
import { ManorComponent } from './manor/manor.component';

@NgModule({
  imports: [
    CommonModule,
    ManorsRoutingModule
  ],
  declarations: [HouseholdComponent, VillageComponent, ManorComponent]
})
export class ManorsModule { }
