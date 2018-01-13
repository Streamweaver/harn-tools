import { IManor } from './../shared/models/manor.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-household-list',
  templateUrl: './household-list.component.html',
  styleUrls: ['./household-list.component.scss']
})
export class HouseholdListComponent implements OnInit {
  @Input('manor') manor: IManor;

  constructor() {}

  ngOnInit() {}
}
