import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import * as _ from 'lodash';
import {PriceListing} from '../shared/price-listing.model';
import {PriceService} from '../shared/price.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {
  priceList: PriceListing[];
  filteredPrices: PriceListing[];
  displayList: boolean;
  categories: string[];
  vendors: string[];
  subcategories: { [key: string]: string[] };
  searchForm: FormGroup;

  // filter-able properties
  name: string;
  vendor: string;
  category: string;
  subcategory: string;

  filters = {};

  constructor(
    private priceService: PriceService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.displayList = false;
    this.categories = [];
    this.vendors = [];
    this.subcategories = {};
    this.category = null;
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
    if (rule === this.category) {
      return;
    }
    if (!rule) {
      this.removeFilter(property);
      this.category = null;
    } else {
      this.category = rule;
      this.filters[property] = val => val === rule;
      if (this.subcategory && this.subcategories[property].indexOf(this.subcategory) < 0) {
        this.removeFilter('subcategory');
        this.subcategory = null;
      }
      console.log(this.category);
      console.log(this.subcategories);
      this.applyFilters();
    }
  }

  localPrice(price: number): string {
    const priceLabel: string[] = [];
    if (price / 240 > 1) {
      priceLabel.push(Math.floor(price / 240) + 'L');
      price = price % 240;
    }
    if (price >= 1) {
      priceLabel.push(Math.floor(price) + 'd');
      price = price % 1;
    }
    if (price > 0) {
      priceLabel.push (price * 4 + 'f');
    }
    return priceLabel.join(', ');
  }

  private parseSelectOptions() {
    for (const item of this.priceList) {
      if (this.categories.indexOf(item.category) < 0) {
        this.categories.push(item.category);
      }
      if (this.vendors.indexOf(item.vendor) < 0) {
        this.vendors.push(item.vendor);
      }
      if (!(item.category in this.subcategories)) {
        this.subcategories[item.category] = [];
      }
      if (this.subcategories[item.category].indexOf(item.subcategory) < 0) {
        this.subcategories[item.category].push(item.subcategory);
      }
    }
    // for (const subcat in this.subcategories) {
    //   if (subcat) {
    //     this.subcategories[subcat] = this.subcategories[subcat].sort();
    //   }
    // }
    this.categories = this.categories.sort();
    this.vendors = this.vendors.sort();
  }
}
