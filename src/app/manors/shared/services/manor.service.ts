import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Policies, Manor, ManorFactory} from '../models/manor.model';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ManorService {
  private manor: Manor;

  constructor() { }

  getManor(): Observable<Manor> {
    if (!this.manor) {
      this.reset();
    }
    return of(this.manor);
  }

  updateManor(manor: Manor) {
    this.manor = manor;
  }

  updatePoliciesProperty(p: string, v: any) {
    if (this.manor.policies[p]) {
      this.manor.policies[p] = v;
    }
  }

  reset() {
    this.manor = ManorFactory.getManor();
  }
}
