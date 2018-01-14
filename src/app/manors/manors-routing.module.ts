import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManorComponent } from './manor/manor.component';

const routes: Routes = [{ path: 'manors', component: ManorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManorsRoutingModule {}
