import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArmorService } from './shared/armor.service';
import { ArmorListComponent } from './armor-list/armor-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArmorListComponent],
  providers: [ArmorService]
})
export class ArmorModule { }
