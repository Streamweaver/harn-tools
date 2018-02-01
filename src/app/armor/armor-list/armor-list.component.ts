import {TitleCasePipe} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {ArmorEntryModel} from '../shared/armor-entry.model';
import {ArmorService} from '../shared/armor.service';

@Component({
  selector: 'app-armor-list',
  templateUrl: './armor-list.component.html',
  styleUrls: ['./armor-list.component.scss']
})
export class ArmorListComponent implements OnInit {
  armorList: ArmorEntryModel[];

  constructor(private armorService: ArmorService) { }

  ngOnInit() {
    this.armorList = [];
    this.armorService.loadArmor().subscribe(data => {
      for (const item of data) {
        this.armorList.push(new ArmorEntryModel(item));
      }
    });
  }

}
