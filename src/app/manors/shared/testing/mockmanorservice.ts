import {Manor, ManorFactory} from '../models/manor.model';

export class MockManorService {
  manor: Manor;

  constructor() {
    this.resetManor();
  }

  resetManor() {
    this.manor = ManorFactory.getManor();
  }

  getManor(): Manor {
    return this.manor;
  }
}
