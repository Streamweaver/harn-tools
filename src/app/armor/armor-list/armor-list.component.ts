import {TitleCasePipe} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Armor} from '../shared/armor-entry.model';
import {ArmorService} from '../shared/armor.service';

@Component({
  selector: 'app-armor-list',
  templateUrl: './armor-list.component.html',
  styleUrls: ['./armor-list.component.scss']
})
export class ArmorListComponent implements OnInit {
  armorList: Armor[];
  armorWorn: Armor[];
  receivedData: Array<any> = [];

  constructor(private armorService: ArmorService) { }

  ngOnInit() {
    this.armorWorn = [];
    this.armorService.loadArmor().subscribe(data => this.armorList = data);
  }

  addWornArmor($event: any) {
    this.armorWorn.push($event.dragData[0]);
    console.log($event);
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
