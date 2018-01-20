import { Component, OnInit, Input } from '@angular/core';
import {Herd} from '../shared/models/herd.model';
import {Manor} from '../shared/models/manor.model';
import {SectionSummary} from '../shared/models/summaries.model';
import {SharedDataService} from '../shared/services/shared-data.service';
import {checkResultIndex} from '../shared/utilities';

@Component({
  selector: 'app-herd-list',
  templateUrl: './herd-list.component.html',
  styleUrls: ['./herd-list.component.scss']
})
export class HerdListComponent implements OnInit {
  @Input('manor') manor: Manor;
  herdTotals: SectionSummary;

  constructor(private dataService: SharedDataService) { }

  ngOnInit() {
    this.dataService.herds.subscribe(ht => this.herdTotals = ht);
  }

  herderIndex(herd: Herd): number {
    return checkResultIndex(herd.checkResult);
  }

  herdYield(herd: Herd): number {
    const result = Math.floor(
      herd.baseYield *
      this.manor.landQuality *
      this.manor.fiefIndex *
      this.manor.weatherIndex *
      checkResultIndex(herd.checkResult)
    );
    return result;
  }

  herdHeadCount(herd: Herd): number {
    return Math.floor(herd.acres * herd.graze);
  }

  herdLabor(herd: Herd): number {
    return this.herdHeadCount(herd) * herd.baseLabor;
  }

  herdKind(herd: Herd): number {
    return this.herdHeadCount(herd) * this.herdYield(herd);
  }

  updateTotals() {
    const total: SectionSummary = {kind: 0, labor: 0, acres: 0};
    for (const herd of this.manor.livestock) {
      total.kind += this.herdKind(herd);
      total.labor += this.herdLabor(herd);
      total.acres += herd.acres;
    }
    this.dataService.setHerdTotals(total);
  }

}
