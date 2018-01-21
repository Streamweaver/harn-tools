import { HouseholdGenerator } from './../shared/generators/household.generator';
import { Manor } from './../shared/models/manor.model';
import { Component, OnInit, Input } from '@angular/core';
import { SharedDataService } from '../shared/services/shared-data.service';

@Component({
  selector: 'app-household-list',
  templateUrl: './household-list.component.html',
  styleUrls: ['./household-list.component.scss']
})
export class HouseholdListComponent implements OnInit {
  @Input('manor') manor: Manor;
  private _hg: HouseholdGenerator;
  householdKind: number;

  constructor(private dataService: SharedDataService) {}

  ngOnInit() {
    this._hg = new HouseholdGenerator();
    this.dataService.householdKind.subscribe(k => (this.householdKind = k));
  }

  updateTotal() {
    let total = 0;
    for (const member of this.manor.population.household) {
      total += member.each * member.count;
    }
    this.dataService.setHouseholdKind(total);
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
