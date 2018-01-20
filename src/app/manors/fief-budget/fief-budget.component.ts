import { Component, OnInit, Input } from '@angular/core';
import {CheckResult} from '../../shared/generators/number-generator';
import { Manor } from '../shared/models/manor.model';
import {SectionSummary, SharedDataService, Summaries} from '../shared/services/shared-data.service';
import { checkResultIndex } from '../shared/utilities';

@Component({
  selector: 'app-fief-budget',
  templateUrl: './fief-budget.component.html',
  styleUrls: ['./fief-budget.component.scss']
})
export class FiefBudgetComponent implements OnInit {
  @Input('manor') manor: Manor;
  crops: SectionSummary;
  herds: SectionSummary;

  constructor(private dataService: SharedDataService) { }

  ngOnInit() {
    this.dataService.crops.subscribe(cropTotals => this.crops = cropTotals);
    this.dataService.herds.subscribe(herdTotals => this.herds = herdTotals);
  }

  checkResultIndex(cr: CheckResult): number {
    return checkResultIndex(cr);
  }

  woodsYield(): number {
    return Math.floor(this.manor.woods.basicYield * this.manor.fiefIndex * this.manor.landQuality * this.manor.weatherIndex);
  }

  woodsLabor(): number {
    return this.manor.woods.acresWorked * 3;
  }

  woodsKind(): number {
    return this.woodsYield() * this.manor.woods.acresWorked;
  }
}
