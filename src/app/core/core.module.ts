import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavComponent, MainPageComponent, LoadingSpinnerComponent],
  declarations: [NavComponent, MainPageComponent, PageNotFoundComponent, LoadingSpinnerComponent]
})
export class CoreModule { }
