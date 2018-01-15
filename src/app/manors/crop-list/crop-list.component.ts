import { Component, OnInit, Input } from '@angular/core';
import { IManor } from '../shared/models/manor.model';
import { CropGeneratorService } from '../shared/services/crop-generator.service';

@Component({
  selector: 'app-crop-list',
  templateUrl: './crop-list.component.html',
  styleUrls: ['./crop-list.component.scss']
})
export class CropListComponent implements OnInit {
  @Input('manor') manor: IManor;

  constructor(private cropService: CropGeneratorService) { }

  ngOnInit() {
  }

  cropTotal(): number {
    let total = 0;
    for (const crop of this.manor.crops) {
      total += crop.acres * crop.kind;
    }
    return total;
  }

  onAddCropClick() {
    this.manor.crops.push(this.cropService.newCrop());
  }

  onDeleteCropClick(idx: number) {
    const crop = this.manor.crops[idx];
    if (confirm('Are you sure you want to DELETE ' + crop.name + '?')) {
      this.manor.crops.splice(idx, 1);
    }
  }
}
