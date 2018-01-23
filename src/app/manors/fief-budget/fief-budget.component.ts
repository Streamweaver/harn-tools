import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CheckResult} from '../../shared/generators/number-generator';
import {Manor} from '../shared/models/manor.model';
import {SectionSummary} from '../shared/models/summaries.model';
import {SharedDataService} from '../shared/services/shared-data.service';
import {beadleResultIndex, checkResultIndex} from '../shared/utilities';

@Component({
  selector: 'app-fief-budget',
  templateUrl: './fief-budget.component.html',
  styleUrls: ['./fief-budget.component.scss']
})
export class FiefBudgetComponent implements OnInit {
  @Input('manor') manor: Manor;
  crops: SectionSummary;
  herds: SectionSummary;
  budgetForm: FormGroup;
  beadleIndex: any;
  warnLabor: boolean;

  constructor(private dataService: SharedDataService, private fb: FormBuilder) {
    this.beadleIndex = beadleResultIndex;
  }

  ngOnInit() {
    this.dataService.crops.subscribe(cropTotals => (this.crops = cropTotals));
    this.dataService.herds.subscribe(herdTotals => (this.herds = herdTotals));
    this.createForm();
    this.warnLabor = false;
  }

  createForm() {
    this.budgetForm = this.fb.group({
      woodsWorked: [0, Validators.required],
      waste: [0, Validators.required],
      cropSeed: [0, Validators.required],
      winterFeed: [0, Validators.required],
      fiefMaintenance: [0, Validators.required],
      assart: [0, Validators]
    });
  }

  checkResultIndex(cr: CheckResult): number {
    return checkResultIndex(cr);
  }

  woodsYield(): number {
    return Math.floor(
      this.manor.woods.basicYield *
      this.manor.fiefIndex *
      this.manor.landQuality *
      this.manor.weatherIndex
    );
  }

  woodsLabor(): number {
    return this.manor.woods.acresWorked * 3;
  }

  woodsKind(): number {
    return this.woodsYield() * this.manor.woods.acresWorked;
  }

  totalHarvestLabor(): number {
    return this.woodsLabor() + this.crops.labor + this.herds.labor;
  }

  totalHarvestKind(): number {
    return this.woodsKind() + this.herds.kind + this.crops.kind;
  }

  cropSeedKind(): number {
    return Math.floor(
      this.manor.cropSeed.acresPlanned *
      12 *
      beadleResultIndex(this.manor.cropSeed.checkResult)
    );
  }

  winterFeedKind(): number {
    return Math.floor(
      this.manor.winterFeed.acresPlanned *
      12 *
      beadleResultIndex(this.manor.winterFeed.checkResult)
    );
  }

  fiefMaintLabor(): number {
    return Math.floor(this.manor.fiefMaintenance * this.manor.fiefIndex * 3);
  }

  fiefMaintKind(): number {
    return this.manor.fiefMaintenance * this.manor.fiefIndex * 6;
  }

  assartLabor(): number {
    return this.manor.assart * 30;
  }

  assartKind(): number {
    return this.manor.assart * 120;
  }

  fiefIncomeLabor(): number {
    const labor =  this.totalHarvestLabor() + this.fiefMaintLabor();
    if (labor > this.manor.population.tenantLaborPool()) {
      this.warnLabor = true;
    } else {
      this.warnLabor = false;
    }
    return labor;
  }


  fiefIncomeKind(): number {
    let income =
      this.totalHarvestKind() -
      this.cropSeedKind() -
      this.winterFeedKind() -
      this.fiefMaintKind() -
      this.assartKind();
    income = Math.floor(income);
    this.dataService.setFiefIncome(income);
    return income;
  }
}
