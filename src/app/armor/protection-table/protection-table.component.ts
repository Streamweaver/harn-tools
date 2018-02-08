import { Component, OnInit, Input } from '@angular/core';
import { DamageTypes } from '../shared/armor.data';
import { ArmorLocationLabels } from '../shared/armor.data';
import { ArmorPiece} from '../shared/armor.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-protection-table',
  templateUrl: './protection-table.component.html',
  styleUrls: ['./protection-table.component.scss']
})
export class ProtectionTableComponent implements OnInit {
  @Input('armorWorn') armorWorn: ArmorPiece[];
  damageTypes: string[];
  locationList: string[];
  locationLabels = ArmorLocationLabels;

  constructor() { }

  ngOnInit() {
    this.parseLocationList();
    this.damageTypes = DamageTypes;
  }

  locationProtection(location: string, damageType: string): number {
    let protection = 0;
    for (const item of this.armorWorn) {
      if (item[location]) {
        protection += item.protection(damageType);
      }
    }
    return protection;
  }

  totalWeight(): number {
    let weight = 0;
    for (const item of this.armorWorn) {
      weight += item.baseWeight;
    }
    return weight;
  }

  totalValue(): number {
    let price = 0;
    for (const item of this.armorWorn) {
      price += item.price();
    }
    return price;
  }

  private parseLocationList() {
    const locations: string[] = [];
    for (let location in ArmorLocationLabels) {
      if (location) {
        location = _.lowerFirst(location);
        locations.push(location);
      }
    }
    this.locationList = locations;
  }
}
