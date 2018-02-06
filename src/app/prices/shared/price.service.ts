import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {PriceListing} from './price-listing.model';

@Injectable()
export class PriceService {
  priceList: Observable<PriceListing[]>;

  constructor(private http: HttpClient) { }

  getPrices(): Observable<PriceListing[]> {
    if (!this.priceList) {
      this.priceList = this.http.get<PriceListing[]>('assets/data/price.data.json');
    }
    return this.priceList;
  }
}
