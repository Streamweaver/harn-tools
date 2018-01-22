import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CropListComponent} from './crop-list/crop-list.component';
import {FiefBudgetComponent} from './fief-budget/fief-budget.component';
import {GeneralDataComponent} from './general-data/general-data.component';
import {HerdListComponent} from './herd-list/herd-list.component';
import {HouseholdListComponent} from './household-list/household-list.component';
import {HouseholdMemberComponent} from './household-member/household-member.component';
import {LordsBudgetComponent} from './lords-budget/lords-budget.component';
import {ManorComponent} from './manor/manor.component';

import {ManorsRoutingModule} from './manors-routing.module';
import {PoliciesComponent} from './policies/policies.component';

import {SharedDataService} from './shared/services/shared-data.service';
import {TenantListComponent} from './tenant-list/tenant-list.component';
import {TenantComponent} from './tenant/tenant.component';

@NgModule({
  imports: [
    CommonModule,
    ManorsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedDataService],
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
    FiefBudgetComponent,
    LordsBudgetComponent
  ]
})
export class ManorsModule {
}
