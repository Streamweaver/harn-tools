import { Injectable } from '@angular/core';
import { IManor, ManorFactory } from './models/imanor.model';

@Injectable()
export class ManorService {
  manor: IManor;

  constructor() {
    this.manor = ManorFactory.getManor();
  }

  resetManor() {
    const manor = ManorFactory.getManor();
    for (const key in manor) {
      this.manor[key] = manor[key];
    }
  }

  getManor(): IManor {
    return this.manor;
  }
}
