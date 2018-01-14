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

  householdTotal(): number {
    let total = 0;
    for (const member of this.manor.population.household) {
      total += member.each * member.count;
    }
    return total;
  }
}
