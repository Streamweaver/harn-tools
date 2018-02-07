import { Component, OnInit, Input } from '@angular/core';
import { ArmorLocation, ArmorProtection, ArmorLocationLabels } from '../shared/armor.enum';
import { ArmorPiece} from '../shared/armor.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-protection-table',
  templateUrl: './protection-table.component.html',
  styleUrls: ['./protection-table.component.scss']
})
export class ProtectionTableComponent implements OnInit {
  @Input('armorWorn') armorWorn: ArmorPiece[];
  protection = ArmorProtection;
  location = ArmorLocation;
  locationLabels = ArmorLocationLabels;

  constructor() { }

  ngOnInit() {
  }

  locationProtection(location: string, damageType: ArmorProtection): number {
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

  locationList(): string[] {
    const locations: string[] = [];
    for (let location in ArmorLocation) {
      if (isNaN(Number(location))) {
        location = _.lowerFirst(location);
        locations.push(location);
      }
    }
    return locations;
  }

  protectionList(): ArmorProtection[] {
    const protectionTypes: ArmorProtection[] = [];
    for (const protectionType in ArmorProtection) {
      if (Number(protectionType) >= 0) {
        protectionTypes.push(Number(protectionType));
      }
    }
    return protectionTypes;
  }
}
