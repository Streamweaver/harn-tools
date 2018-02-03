import { Component, OnInit, Input } from '@angular/core';
import { ArmorType, ArmorLocation, ArmorProtection, ArmorLocationFields, ArmorLabelType } from '../shared/armor.enum';
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

  constructor() { }

  ngOnInit() {
  }

  locationProtection(location: ArmorLocation, material: ArmorType, damageType: ArmorProtection): number {
    let protection = 0;
    for (const item of this.armorWorn) {
      if (item[ArmorLocationFields[location]]) {
        protection += ProtectionValue[ArmorLabelType[item.type]][damageType];
      }
    }
    return protection;
  }

  dataFieldNames(location: ArmorLocation): string {
    switch (location) {
      case ArmorLocation.Skull: return 'skull';
      case ArmorLocation.Face: return 'face';
      case ArmorLocation.Neck: return 'neck';
      case ArmorLocation.Shoulders: return 'shoulders';
      case ArmorLocation.UpperArms: return 'upperArms';
      case ArmorLocation.Elbows: return 'elbows';
      case ArmorLocation.Forearms: return 'forearms';
      case ArmorLocation.Hands: return 'hands';
      case ArmorLocation.ThoraxFront: return 'thoraxFront';
      default:
        return null;
    }
  }
}
