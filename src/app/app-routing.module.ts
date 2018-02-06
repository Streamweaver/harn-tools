import { NgModule } from '@angular/core';
import { MainPageComponent } from './core/main-page/main-page.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import {PriceListComponent} from './prices/price-list/price-list.component';
import { DistanceComponent } from './travel/distance/distance.component';
import { NameGeneratorComponent } from './names/name-generator/name-generator.component';
import { Routes, RouterModule } from '@angular/router';
import { ManorComponent } from './manors/manor/manor.component';
import { ArmorListComponent} from './armor/armor-list/armor-list.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'manors', component: ManorComponent },
  { path: 'travel', component: DistanceComponent },
  { path: 'names', component: NameGeneratorComponent },
  { path: 'armor', component: ArmorListComponent },
  { path: 'prices', component: PriceListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
