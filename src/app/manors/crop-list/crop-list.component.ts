import { Crop } from './../shared/models/crop.model';
import { Component, OnInit, Input } from '@angular/core';
import { Manor } from '../shared/models/manor.model';
import { checkResultIndex } from './../shared/utilities';

@Component({
  selector: 'app-crop-list',
  templateUrl: './crop-list.component.html',
  styleUrls: ['./crop-list.component.scss']
})
export class CropListComponent implements OnInit {
  @Input('manor') manor: Manor;

  constructor() {}

  ngOnInit() {}

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

  cropTotal(): {kind: number, labor: number, acres: number} {
    const total = {
      kind: 0,
      labor: 0,
      acres: 0
    };
    for (const crop of this.manor.crops) {
      total.kind += this.cropKind(crop);
      total.labor += this.cropLabor(crop);
      total.acres += crop.acres;
    }
    return total;
  }
}
