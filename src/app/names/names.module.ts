import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreModule} from '../core/core.module';
import { NameGeneratorComponent } from './name-generator/name-generator.component';
import { NamesService } from './shared/names.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    HttpClientModule
  ],
  declarations: [NameGeneratorComponent],
  providers: [NamesService]
})
export class NamesModule { }
