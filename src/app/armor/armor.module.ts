import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DndModule} from 'ng2-dnd';
import { ArmorService } from './shared/armor.service';
import { ArmorListComponent } from './armor-list/armor-list.component';
import { ProtectionTableComponent } from './protection-table/protection-table.component';

@NgModule({
  imports: [
    CommonModule,
    DndModule.forRoot()
  ],
  declarations: [ArmorListComponent, ProtectionTableComponent],
  providers: [ArmorService]
})
export class ArmorModule { }
