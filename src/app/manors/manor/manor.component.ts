import {Component, OnInit, ViewChild } from '@angular/core';
import {CropListComponent} from '../crop-list/crop-list.component';
import {HerdListComponent} from '../herd-list/herd-list.component';
import {CraftsmanGenerator} from '../shared/generators/craftsman-generator';
import {HerdGenerator} from '../shared/generators/herd.generator';
import {HouseholdGenerator} from '../shared/generators/household.generator';
import {TenantGenerator} from '../shared/generators/tenant-generator';
import {TenantOfficerGenerator} from '../shared/generators/tenant-officer.generator';
import {YeomanGenerator} from '../shared/generators/yeoman-generator';
import { CropGenerator } from '../shared/generators/crop.generator';
import {
  Manor,
  ManorFactory
} from '../shared/models/manor.model';
import { NumberGenerator } from '../../shared/generators/number-generator';

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
  @ViewChild(CropListComponent) private cropListComponent: CropListComponent;
  @ViewChild(HerdListComponent) private herdListComponent: HerdListComponent;

  constructor() {}

  ngOnInit() {
    this.dice = new NumberGenerator();
    this.tenantGenerator = new TenantGenerator();
    this.craftsmanGenerator = new CraftsmanGenerator();
    this.yeomanGenerator = new YeomanGenerator();
    this.officerGenerator = new TenantOfficerGenerator();
    this.householdGenerator = new HouseholdGenerator();
    this.cropGenerator = new CropGenerator();
    this.herdGenerator = new HerdGenerator();
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
    this.cropListComponent.updateTotals();
    this.herdListComponent.updateTotals();
  }

}
