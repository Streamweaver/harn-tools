import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ManorsRoutingModule } from './manors-routing.module';
import { ManorComponent } from './manor/manor.component';
import { TennantComponent } from './tennant/tennant.component';
import { TennantGeneratorComponent } from './tennant-generator/tennant-generator.component';
import { ManorService } from './shared/manors.service';

@NgModule({
  imports: [
    CommonModule,
    ManorsRoutingModule,
    FormsModule
  ],
  providers: [ManorService],
  declarations: [ManorComponent, TennantComponent, TennantGeneratorComponent]
})
export class ManorsModule { }
