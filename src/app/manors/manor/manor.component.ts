import {Component, OnInit, ViewChild} from '@angular/core';
import {NumberGenerator} from '../../shared/generators/number-generator';
import {CropListComponent} from '../crop-list/crop-list.component';
import {HerdListComponent} from '../herd-list/herd-list.component';
import {HouseholdListComponent} from '../household-list/household-list.component';
import {LordsBudgetComponent} from '../lords-budget/lords-budget.component';
import {CraftsmanGenerator} from '../shared/generators/craftsman-generator';
import {CropGenerator} from '../shared/generators/crop.generator';
import {FiefGenerator} from '../shared/generators/fief.generator';
import {HerdGenerator} from '../shared/generators/herd.generator';
import {HouseholdGenerator} from '../shared/generators/household.generator';
import {LordsExpenseGenerator} from '../shared/generators/lordsexpense.generator';
import {LordsIncomeGenerator} from '../shared/generators/lordsincome.generator';
import {TenantGenerator} from '../shared/generators/tenant-generator';
import {TenantOfficerGenerator} from '../shared/generators/tenant-officer.generator';
import {YeomanGenerator} from '../shared/generators/yeoman-generator';
import {Manor, ManorFactory} from '../shared/models/manor.model';
import {TenantListComponent} from '../tenant-list/tenant-list.component';

@Component({
  selector: 'app-manor',
  templateUrl: './manor.component.html',
  styleUrls: ['./manor.component.scss']
})
export class ManorComponent implements OnInit {
  manor: Manor;
  private dice: NumberGenerator;
  showGenerationInput: boolean;
  private tenantGenerator: TenantGenerator;
  private craftsmanGenerator: CraftsmanGenerator;
  private yeomanGenerator: YeomanGenerator;
  private officerGenerator: TenantOfficerGenerator;
  private householdGenerator: HouseholdGenerator;
  private cropGenerator: CropGenerator;
  private herdGenerator: HerdGenerator;
  private fiefGenerator: FiefGenerator;
  private lordsIncomeGenerator: LordsIncomeGenerator;
  private lordsExpenseGenerator: LordsExpenseGenerator;
  @ViewChild(CropListComponent) private cropListComponent: CropListComponent;
  @ViewChild(HerdListComponent) private herdListComponent: HerdListComponent;
  @ViewChild(TenantListComponent)
  private tenantListComponent: TenantListComponent;
  @ViewChild(HouseholdListComponent)
  private householdListComponent: HouseholdListComponent;
  @ViewChild(LordsBudgetComponent) private lordsBudgetComponent: LordsBudgetComponent;

  constructor() {
  }

  ngOnInit() {
    this.dice = new NumberGenerator();

    this.tenantGenerator = new TenantGenerator();
    this.craftsmanGenerator = new CraftsmanGenerator();
    this.yeomanGenerator = new YeomanGenerator();
    this.officerGenerator = new TenantOfficerGenerator();
    this.householdGenerator = new HouseholdGenerator();
    this.cropGenerator = new CropGenerator();
    this.herdGenerator = new HerdGenerator();
    this.fiefGenerator = new FiefGenerator();
    this.lordsIncomeGenerator = new LordsIncomeGenerator();
    this.lordsExpenseGenerator = new LordsExpenseGenerator();
    this._reset();
  }

  private _reset() {
    this.manor = ManorFactory.getManor();
    this.showGenerationInput = true;
  }

  onResetClick() {
    this._reset();
  }

  onGenerateClick() {
    this.showGenerationInput = false;
    this.tenantGenerator.generateTenants(this.manor);
    this.craftsmanGenerator.assignCraftsmen(this.manor);
    this.yeomanGenerator.recruitYeoman(this.manor);
    this.officerGenerator.electOfficers(this.manor);
    this.householdGenerator.generateHousehold(this.manor);
    this.cropGenerator.generateCrops(this.manor);
    this.herdGenerator.generateHerds(this.manor);
    this.fiefGenerator.generateFief(this.manor);
    this.tenantListComponent.updateTotals();
    this.householdListComponent.updateTotal();
    this.cropListComponent.updateTotals();
    this.herdListComponent.updateTotals();
    this.lordsIncomeGenerator.generateIncome(this.manor);
    this.lordsBudgetComponent.totalIncome(); // Allows totals to be calculated and continues below.
    this.lordsExpenseGenerator.generateExpenses(this.manor);
  }
}
