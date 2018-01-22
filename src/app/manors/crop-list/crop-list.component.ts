import {Component, Input, OnInit} from '@angular/core';
import {Manor} from '../shared/models/manor.model';
import {SectionSummary} from '../shared/models/summaries.model';
import {SharedDataService} from '../shared/services/shared-data.service';
import {Crop} from './../shared/models/crop.model';
import {checkResultIndex} from './../shared/utilities';

@Component({
  selector: 'app-crop-list',
  templateUrl: './crop-list.component.html',
  styleUrls: ['./crop-list.component.scss']
})
export class CropListComponent implements OnInit {
  @Input('manor') manor: Manor;
  cropTotals: SectionSummary;

  constructor(private dataService: SharedDataService) {
  }

  ngOnInit() {
    this.dataService.crops.subscribe(ct => this.cropTotals = ct);
  }

  reeveIndex(crop: Crop): number {
    return checkResultIndex(crop.checkResult);
  }

  cropKind(crop: Crop): number {
    return Math.floor(crop.acres * this.cropYield(crop));
  }

  cropYield(crop: Crop): number {
    const result = Math.floor(
      crop.baseYield *
      this.manor.landQuality *
      this.manor.fiefIndex *
      this.manor.weatherIndex *
      checkResultIndex(crop.checkResult)
    );
    return result;
  }

  cropLabor(crop: Crop): number {
    return crop.baseLabor * crop.acres;
  }

  updateTotals() {
    const totals: SectionSummary = {
      kind: 0,
      labor: 0,
      acres: 0
    };
    for (const crop of this.manor.crops) {
      totals.kind += this.cropKind(crop);
      totals.labor += this.cropLabor(crop);
      totals.acres += crop.acres;
    }
    this.dataService.setCropTotals(totals);
  }
}
