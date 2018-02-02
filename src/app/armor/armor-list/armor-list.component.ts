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

  constructor(private armorService: ArmorService) { }

  ngOnInit() {
    this.armorService.loadArmor().subscribe(data => this.armorList = data);
  }

}
