import { Crop } from './../shared/models/crop.model';
import { Component, OnInit, Input } from '@angular/core';
import { Manor } from '../shared/models/manor.model';

@Component({
  selector: 'app-crop-list',
  templateUrl: './crop-list.component.html',
  styleUrls: ['./crop-list.component.scss']
})
export class CropListComponent implements OnInit {
  @Input('manor') manor: Manor;

  constructor() {}

  ngOnInit() {}

  cropKind(crop: Crop): number {
    return Math.floor(crop.acres * crop.baseYield);
  }

  onAddCropClick() {
    console.log('Implement me');
  }

  onDeleteCropClick(idx: number) {
    if (confirm('Implement me!!')) {
      console.log('implement me');
    }
  }
}
