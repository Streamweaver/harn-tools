import {IManor, ManorFactory} from '../models/manor.model';
import {TenantArray} from '../models/tenant.model';

export class MockManorService {
  manor: IManor;

  constructor() {
    this.resetManor();
  }

  resetManor() {
    this.manor = ManorFactory.getManor();
  }

  getManor(): IManor {
    return this.manor;
  }
}
