import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import * as _ from 'lodash';
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

  filters: {[key: string]: any};
  currentVendor: string;
  currentSearchTerm: string;

  constructor(private priceService: PriceService) {
  }

  ngOnInit() {
    this.clearFilters();
    this.vendors = [];
    this.pricesReady = false;
    this.searchField = new FormControl();
    this.filteredPrices = [];
    this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {
        this.onSearchPrices(term);
      });

    this.priceService.priceList.subscribe(
      priceList => this.priceList = priceList,
          err => console.log(err),
          () => {
            this.pricesReady = true;
            this.parseVendors();
          }
    );
    this.parseVendors();
  }

  localPrices(price: number): {coin: string, amount: number}[] {
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
    this.currentSearchTerm = term;
    this.filterIncludes('name', term);
  }

  onVendorSelect(rule: string) {
    this.currentVendor = rule;
    this.filterExact('vendor', rule);
  }

  private parseVendors() {
    for (const item of this.priceList) {
      if (this.vendors.indexOf(item.vendor) < 0) {
        this.vendors.push(item.vendor);
      }
      this.vendors = this.vendors.sort();
    }
  }

  // Filtering prices
  private applyFilters() {
    if (this.isFilterEmpty()) {
      this.filteredPrices = [];
    } else {
      this.filteredPrices = _.filter(this.priceList, _.conforms(this.filters));
    }
    }

  private filterExact(property: string, rule: string) {
      if (this.filters[property] !== rule) {
        if (!rule) {
          this.removeFilter(property);
        } else {
          this.filters[property] = val => val === rule;
        }
        this.applyFilters();
      }
    }

    filterIncludes(property: string, rule: string) {
      if (this.filters[property] !== rule) {
        if (!rule) {
          this.removeFilter(property);
        } else {
          this.filters[property] = val => val.includes(rule.toLowerCase());
        }
        this.applyFilters();
      }
    }

    removeFilter(property: string) {
      delete this.filters[property];
    }

    clearFilters() {
      this.filters = {};
    }

    isFilterEmpty() {
    return _.isEmpty(this.filters);
    }
}
