import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveManorComponent } from './reactive-manor/reactive-manor.component';

const routes: Routes = [
  {path: 'manors', component: ReactiveManorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManorsRoutingModule { }
