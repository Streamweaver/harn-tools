import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManorsRoutingModule } from './manors-routing.module';
import { ManorComponent } from './manor/manor.component';
import { TennantComponent } from './tennant/tennant.component';
import { TennantGeneratorComponent } from './tennant-generator/tennant-generator.component';
import { ManorService } from './shared/manors.service';

@NgModule({
  imports: [
    CommonModule,
    ManorsRoutingModule
  ],
  providers: [ManorService],
  declarations: [ManorComponent, TennantComponent, TennantGeneratorComponent]
})
export class ManorsModule { }
