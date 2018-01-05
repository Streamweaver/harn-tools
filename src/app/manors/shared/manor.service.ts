import { Injectable } from '@angular/core';
import { IManor, ManorFactory } from './models/imanor.model';
import { ITenant } from './models/itenant.model';


@Injectable()
export class ManorService {
  manor: IManor;

  constructor() {
    this.resetManor();
  }

  resetManor() {
    this.manor = ManorFactory.getManor();
  }

  resetTenants() {
    this.manor.tenants = [];
  }

  getManor(): IManor {
    return this.manor;
  }
}
