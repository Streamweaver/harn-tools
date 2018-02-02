import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DndModule} from 'ng2-dnd';
import { ArmorService } from './shared/armor.service';
import { ArmorListComponent } from './armor-list/armor-list.component';

@NgModule({
  imports: [
    CommonModule,
    DndModule.forRoot()
  ],
  declarations: [ArmorListComponent],
  providers: [ArmorService]
})
export class ArmorModule { }
