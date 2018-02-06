import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {ArmorModule} from './armor/armor.module';
import { CoreModule } from './core/core.module';
import { ManorsModule } from './manors/manors.module';
import {PricesModule} from './prices/prices.module';
import { TravelModule } from './travel/travel.module';
import { NamesModule } from './names/names.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    ManorsModule,
    TravelModule,
    NamesModule,
    ArmorModule,
    PricesModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
