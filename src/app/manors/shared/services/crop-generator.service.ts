import { Injectable } from '@angular/core';
import { ICrop } from '../models/crop.model';

@Injectable()
export class CropGeneratorService {

  constructor() { }

  newCrop(): ICrop {
    return {
      name: 'New Crop',
      yield: 0,
      acres: 0,
      labor: 0,
      kind: 0
    };
  }

}
