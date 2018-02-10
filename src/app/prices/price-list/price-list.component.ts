import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';
import {PriceListing} from '../shared/price-listing.model';
import {PriceService} from '../shared/price.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {
  priceList: PriceListing[];
  filteredPrices: PriceListing[];
  pricesReady: boolean;
  vendors: string[];
  searchField: FormControl;

  // filter-able properties
  name: string;
  vendor: string;

  filters = {};

  constructor(
    private priceService: PriceService
  ) {
  }

  ngOnInit() {
    this.vendors = [];
    this.pricesReady = true;
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {
        this.onSearchPrices(term);
      });
    this.priceService.getPriceList().subscribe(
      priceList => this.filteredPrices = priceList,
      err => console.log(err),
      () => this.pricesReady = true
    );
  }

  localPrices(price: number): { coin: string, amount: number}[] {
    const priceLabel: { coin: string, amount: number}[] = [];
    if (price / 240 > 1) {
      priceLabel.push({coin: 'L', amount: Math.floor(price / 240)});
      price = price % 240;
    }
    if (price >= 1) {
      priceLabel.push({coin: 'd', amount: Math.floor(price)});
      price = price % 1;
    }
    if (price > 0) {
      priceLabel.push({coin: 'f', amount: price * 4});
    }
    return priceLabel;
  }

  onSearchPrices(term: string) {
    this.priceService.filterIncludes('name', term);
  }

  onVendorSelect(rule: string) {
    this.priceService.filterExact('vendor', rule);
  }

  private parseVendorList() {
    this.vendors = [];
    for (const item of this.priceList) {
      if (this.vendors.indexOf(item.vendor) < 0) {
        this.vendors.push(item.vendor);
      }
    this.vendors = this.vendors.sort();
  }
}}
