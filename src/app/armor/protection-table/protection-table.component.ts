import { Component, OnInit, Input } from '@angular/core';
import { ArmorType, ArmorLocation, ArmorProtection, ArmorLocationLabels, ArmorLabelType } from '../shared/armor.enum';
import {Armor} from '../shared/armor-entry.model';
import {ProtectionValue} from '../shared/armor.data';

@Component({
  selector: 'app-protection-table',
  templateUrl: './protection-table.component.html',
  styleUrls: ['./protection-table.component.scss']
})
export class ProtectionTableComponent implements OnInit {
  @Input('armorWorn') armorWorn: Armor[];
  protection = ArmorProtection;
  location = ArmorLocation;
  locationLabels = ArmorLocationLabels;

  constructor() { }

  ngOnInit() {
  }

  locationProtection(location: ArmorLocation, damageType: ArmorProtection): number {
    let protection = 0;
    for (const item of this.armorWorn) {
      if (item.coverage[location]) {
        protection += ProtectionValue[item.type][damageType];
      }
    }
    return protection;
  }

  locationList(): ArmorLocation[] {
    const locations: ArmorLocation[] = [];
    for (const location in ArmorLocation) {
      if (Number(location) >= 0) {
        locations.push(Number(location));
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
