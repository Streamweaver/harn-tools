import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameGeneratorComponent } from './name-generator/name-generator.component';
import { NamesService } from './shared/names.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [NameGeneratorComponent],
  providers: [NamesService]
})
export class NamesModule { }
