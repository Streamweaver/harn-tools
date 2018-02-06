import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from '../core/core.module';
import { PriceService } from './shared/price.service';
import { PriceListComponent } from './price-list/price-list.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PriceListComponent],
  providers: [PriceService]
})
export class PricesModule { }
