import {TitleCasePipe} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Armor} from '../shared/armor-entry.model';
import {ArmorList} from '../shared/armor.data';
import {ArmorService} from '../shared/armor.service';

@Component({
  selector: 'app-armor-list',
  templateUrl: './armor-list.component.html',
  styleUrls: ['./armor-list.component.scss']
})
export class ArmorListComponent implements OnInit {
  armorList: Armor[];
  armorWorn: Armor[];

  constructor() { }

  ngOnInit() {
    this.armorWorn = [];
    this.armorList = ArmorList;
  }

  addWornArmor($event: any) {
    console.log($event);
    this.armorWorn.push($event.dragData);
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
