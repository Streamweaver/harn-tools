import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManorsRoutingModule } from './manors-routing.module';
import { ManorComponent } from './manor/manor.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantComponent } from './tenant/tenant.component';
import { HouseholdListComponent } from './household-list/household-list.component';
import { HouseholdMemberComponent } from './household-member/household-member.component';
import { CropListComponent } from './crop-list/crop-list.component';
import { CropGeneratorService } from './shared/services/crop-generator.service';
import { GeneralDataComponent } from './general-data/general-data.component';

@NgModule({
  imports: [
    CommonModule,
    ManorsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CropGeneratorService],
  declarations: [
    ManorComponent,
    TenantListComponent,
    TenantComponent,
    HouseholdListComponent,
    HouseholdMemberComponent,
    CropListComponent,
    GeneralDataComponent
  ]
})
export class ManorsModule {}
