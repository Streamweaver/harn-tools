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
import { GeneralDataComponent } from './general-data/general-data.component';
import { PoliciesComponent } from './policies/policies.component';
import { HerdListComponent } from './herd-list/herd-list.component';
import { FiefBudgetComponent } from './fief-budget/fief-budget.component';

@NgModule({
  imports: [
    CommonModule,
    ManorsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  declarations: [
    ManorComponent,
    TenantListComponent,
    TenantComponent,
    HouseholdListComponent,
    HouseholdMemberComponent,
    CropListComponent,
    GeneralDataComponent,
    PoliciesComponent,
    HerdListComponent,
    FiefBudgetComponent
    ]
})
export class ManorsModule {}
