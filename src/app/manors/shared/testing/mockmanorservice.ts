import {IManor, ManorFactory} from '../models/manor.model';

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
