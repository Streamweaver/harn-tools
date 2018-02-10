import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { PriceListing } from './price-listing.model';
import * as _ from 'lodash';

@Injectable()
export class PriceService {
  private fullPriceList: PriceListing[];
  private _priceSubject: Subject<PriceListing[]>;

  filters = {};

  constructor(private http: HttpClient) {
    this.http.get<PriceListing[]>('assets/data/combinedprices.data.json').subscribe(
      priceList => this.fullPriceList = priceList,
    );
  }

  getPriceList(): Observable<PriceListing[]> {
    return this._priceSubject.asObservable();
  }

  private applyFilters() {
    this._priceSubject.next(_.filter(this.fullPriceList, _.conforms(this.filters)));
  }

  // Much of this pulled from the very find AngularFirebase tutorial at
  // https://angularfirebase.com/lessons/multi-property-data-filtering-with-firebase-and-angular-4/
  /// filter property by equality to rule
  filterExact(property: string, rule: any) {
    if (this.filters[property] !== rule) {
      if (!rule) {
        this.removeFilter(property);
      } else {
        this.filters[property] = val => val === rule;
        this.applyFilters();
      }
    }
  }

  filterIncludes(property: string, rule: string) {
    if (this.filters[property] !== rule) {
      if (!rule) {
        this.removeFilter(property);
      } else {
        this.filters[property] = val => val.includes(rule.toLowerCase());
        this.applyFilters();
      }
    }
  }

  /// filter  numbers greater than rule
  filterLessThan(property: string, rule: number) {
    if (this.filters[property] !== rule) {
      if (!rule) {
        this.removeFilter(property);
      } else {
        this.filters[property] = val => val < rule;
        this.applyFilters();
      }
    }
  }

  /// filter properties that resolve to true
  filterBoolean(property: string, rule: boolean) {
    if (this.filters[property] !== rule) {
      if (!rule) {
        this.removeFilter(property);
      } else {
        this.filters[property] = val => val;
        this.applyFilters();
      }
    }
  }

  /// removes filter
  removeFilter(property: string) {
    delete this.filters[property];
    this.applyFilters();
  }

}
