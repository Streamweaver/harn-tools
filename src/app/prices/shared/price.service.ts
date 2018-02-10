import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import { PriceListing } from './price-listing.model';
import * as _ from 'lodash';

@Injectable()
export class PriceService {
  priceList: Observable<PriceListing[]>;

  constructor(private http: HttpClient) {
    this.loadPrices();
  }

  loadPrices() {
    this.priceList = this.http.get<PriceListing[]>('assets/data/expandedprice.data.json');
  }
}
