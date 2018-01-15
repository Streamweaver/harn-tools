import { HouseholdGenerator } from './../shared/generators/household.generator';
import { IHouseholdMember } from './../shared/models/housemember.model';
import { IManor } from './../shared/models/manor.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-household-list',
  templateUrl: './household-list.component.html',
  styleUrls: ['./household-list.component.scss']
})
export class HouseholdListComponent implements OnInit {
  @Input('manor') manor: IManor;
  private _hg: HouseholdGenerator;

  constructor() {}

  ngOnInit() {
    this._hg = new HouseholdGenerator();
  }

  householdTotal(): number {
    let total = 0;
    for (const member of this.manor.population.household) {
      total += member.each * member.count;
    }
    return total;
  }

  onAddMemberClick() {
    this.manor.population.household.push(
      this._hg.generateHouseMember('New memeber', 0, 0, 50)
    );
  }

  onDeleteMemberClick(idx: number) {
    const member = this.manor.population.household[idx];
    if (confirm('Are you sure you want to DELETE ' + member.title + '?')) {
      this.manor.population.household.splice(idx, 1);
    }
  }
}
