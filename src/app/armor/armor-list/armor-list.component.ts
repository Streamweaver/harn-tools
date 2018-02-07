import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {ArmorList} from '../shared/armor.data';
import {ArmorType} from '../shared/armor.enum';
import {Armor, ArmorPiece} from '../shared/armor.model';

@Component({
  selector: 'app-armor-list',
  templateUrl: './armor-list.component.html',
  styleUrls: ['./armor-list.component.scss']
})
export class ArmorListComponent implements OnInit {
  armorList: Armor[];
  armorWorn: ArmorPiece[];
  armorType = ArmorType;

  constructor() {
  }

  ngOnInit() {
    this.armorWorn = [];
    this.filterArmor();
  }

  addWornArmor($event: any) {
    const data: Armor = <Armor>$event.dragData;
    this.armorWorn.push(new ArmorPiece(data));
  }

  removeWornArmor($event: any) {
    const idx = this.armorWorn.indexOf($event.dragData);
    if (idx > -1) {
      this.armorWorn.splice(idx, 1);
    }
  }

  filterArmor(armorType: ArmorType = null) {
    if (armorType === null) {
      this.armorList = ArmorList;
    } else {
      this.armorList = ArmorList.filter(armor => armor.type === armorType);
    }
  }

  armorCoverageDescription(armor: Armor): string {
    const props: string[] = [];
    for (const prop in armor) {
      if (typeof armor[prop] === 'boolean' && armor[prop]) {
        props.push(prop);
      }
    }
    return props.join('-');
  }
}
