import { NgModule } from '@angular/core';
import { ManorComponent } from './manor/manor.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'manors', component: ManorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManorsRoutingModule { }
