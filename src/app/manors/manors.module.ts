import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManorsRoutingModule } from './manors-routing.module';
import { ManorComponent } from './manor/manor.component';
import { ManorService } from './shared/manor.service';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantComponent } from './tenant/tenant.component';
import { HouseholdListComponent } from './household-list/household-list.component';
import { HouseholdMemberComponent } from './household-member/household-member.component';
import { ReactiveManorComponent } from './reactive-manor/reactive-manor.component';

@NgModule({
  imports: [CommonModule, ManorsRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ManorService],
  declarations: [
    ManorComponent,
    TenantListComponent,
    TenantComponent,
    HouseholdListComponent,
    HouseholdMemberComponent,
    ReactiveManorComponent
  ]
})
export class ManorsModule {}
