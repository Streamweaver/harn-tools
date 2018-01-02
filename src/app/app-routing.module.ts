import { NgModule } from '@angular/core';
import { MainPageComponent} from './core/main-page/main-page.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import {DistanceComponent} from './travel/distance/distance.component';
import { ManorComponent} from './manors/manor/manor.component';
import { NameGeneratorComponent } from './names/name-generator/name-generator.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'manors', component: ManorComponent},
  {path: 'travel', component: DistanceComponent},
  {path: 'names', component: NameGeneratorComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
