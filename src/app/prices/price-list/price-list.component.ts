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
  displayList: boolean;
  vendors: string[];
  subcategories: { [key: string]: string[] };
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
    this.displayList = false;
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {
        this.filterIncludes('name', term);
      });
    this.vendors = [];
    this.priceService.getPrices().subscribe(
      prices => this.priceList = prices,
      (err) => console.log('Error Loading Price List: ' + err),
      () => {
        this.parseSelectOptions();
        this.applyFilters();
        this.displayList = true;
      }
    );
  }

  private applyFilters() {
    this.filteredPrices = _.filter(this.priceList, _.conforms(this.filters));
  }

  // Much of this pulled from the very find AngularFirebase tutorial at
  // https://angularfirebase.com/lessons/multi-property-data-filtering-with-firebase-and-angular-4/
  /// filter property by equality to rule
  filterExact(property: string, rule: any) {
    if (!rule) {
      this.removeFilter(property);
    } else {
      this.filters[property] = val => val === rule;
      this.applyFilters();
    }
  }

  filterIncludes(property: string, rule: string) {
    this.removeFilter(property);
    this.filters[property] = val => val.includes(rule.toLowerCase());
    this.applyFilters();
  }

  /// filter  numbers greater than rule
  filterLessThan(property: string, rule: number) {
    this.filters[property] = val => val < rule;
    this.applyFilters();
  }

  /// filter properties that resolve to true
  filterBoolean(property: string, rule: boolean) {
    if (!rule) {
      this.removeFilter(property);
    } else {
      this.filters[property] = val => val;
      this.applyFilters();
    }
  }

  /// removes filter
  removeFilter(property: string) {
    delete this.filters[property];
    this[property] = null;
    this.applyFilters();
  }

  onCategorySelect(property: string, rule: string) {
    if (rule === this.vendor) {
      return;
    }
    if (!rule) {
      this.removeFilter('vendor');
      this.removeFilter(property);
    } else {
      this.filterExact(property, rule);
      this.applyFilters();
    }
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

  private parseSelectOptions() {
    for (const item of this.priceList) {
      if (this.vendors.indexOf(item.vendor) < 0) {
        this.vendors.push(item.vendor);
      }
    this.vendors = this.vendors.sort();
  }
}}
