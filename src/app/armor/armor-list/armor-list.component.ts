import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {ArmorLocationCodes, ArmorTypes} from '../shared/armor.data';
import {Armor, ArmorPiece} from '../shared/armor.model';
import {ArmorService} from '../shared/armor.service';

@Component({
  selector: 'app-armor-list',
  templateUrl: './armor-list.component.html',
  styleUrls: ['./armor-list.component.scss']
})
export class ArmorListComponent implements OnInit {
  armorDisplayList: Armor[];
  armorList: Armor[];
  armorWorn: ArmorPiece[];
  armorLoaded: boolean;
  armorTypes: string[];

  constructor(private armorService: ArmorService) {
  }

  ngOnInit() {
    this.armorTypes = ArmorTypes;
    this.armorLoaded = false;
    this.armorService.loadArmor().subscribe(
      armorList => this.armorList = armorList,
      err => console.log(err),
      () => {
        this.armorList = this.sortArmorList(this.armorList);
        this.filterArmor();
        this.armorLoaded = true;
      }
    );
    this.armorWorn = [];
  }

  onItemDrop(e: any) {
    const data = e.dragData as Armor;
    if (data) {
      this.addWornArmor(e.dragData);
    }
  }

  onTrashDrop(e: any) {
    if (e.dragData instanceof ArmorPiece) {
      this.removeWornArmor(e.dragData);
    }
  }

  addWornArmor(data: Armor) {
    this.armorWorn.push(new ArmorPiece(data));
  }

  removeWornArmor(data: ArmorPiece) {
    const idx = this.armorWorn.indexOf(data);
    if (idx > -1) {
      this.armorWorn.splice(idx, 1);
    }
  }

  filterArmor(armorType: string = null) {
    if (armorType === null) {
      this.armorDisplayList = this.armorList;
    } else {
      this.armorDisplayList = this.armorList.filter(armor => armor.type === armorType);
    }
  }

  sortArmorList(armorList: Armor[]): Armor[] {
    return _.orderBy(armorList,
      [
        'type',
        'skull',
        'face',
        'neck',
        'shoulders',
        'thoraxFront',
        'thoraxBack',
        'abdomenFront',
        'abdomenBack',
        'hips',
        'upperArms',
        'elbows',
        'hands',
        'groin',
        'thighs',
        'knees',
        'feet'
      ],
      [
        'asc',
        'desc',
        'desc',
        'desc',
        'desc',
        'desc',
        'desc',
        'desc',
        'desc',
        'desc',
        'desc',
        'desc',
        'desc',
        'desc',
        'desc',
        'desc',
        'desc',
      ]);
  }

  armorCoverageList(armor: Armor): string {
    const props: string[] = [];
    for (const prop in armor) {
      if (ArmorLocationCodes[prop] && armor[prop]) {
        props.push(ArmorLocationCodes[prop]);
      }
    }
    return props.join(', ');
  }

}
