import { Component, OnInit } from '@angular/core';
import {CraftsmanGenerator} from '../shared/generators/craftsman-generator';
import {HouseholdGenerator} from '../shared/generators/household.generator';
import {TenantGenerator} from '../shared/generators/tenant-generator';
import {TenantOfficerGenerator} from '../shared/generators/tenant-officer.generator';
import {YeomanGenerator} from '../shared/generators/yeoman-generator';
import {
  Manor,
  ManorFactory
} from '../shared/models/manor.model';
import { NumberGenerator } from '../../shared/generators/number-generator';
import { CropGeneratorService } from '../shared/services/crop-generator.service';

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

  constructor(
    private cropService: CropGeneratorService
  ) {}

  ngOnInit() {
    this.dice = new NumberGenerator();
    this.tenantGenerator = new TenantGenerator();
    this.craftsmanGenerator = new CraftsmanGenerator();
    this.yeomanGenerator = new YeomanGenerator();
    this.officerGenerator = new TenantOfficerGenerator();
    this.householdGenerator = new HouseholdGenerator();
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

    this.cropService.generateCrops(this.manor);
  }

}
