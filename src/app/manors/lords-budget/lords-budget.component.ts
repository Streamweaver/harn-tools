import { Component, OnInit, Input } from '@angular/core';
import { Manor } from '../shared/models/manor.model';
import {TenantSummary} from '../shared/models/summaries.model';
import {SharedDataService} from '../shared/services/shared-data.service';

@Component({
  selector: 'app-lords-budget',
  templateUrl: './lords-budget.component.html',
  styleUrls: ['./lords-budget.component.scss']
})
export class LordsBudgetComponent implements OnInit {
  @Input('manor') manor: Manor;
  fiefIncome: number;
  tenants: TenantSummary;

  constructor(private dataService: SharedDataService) { }

  ngOnInit() {
    this.dataService.fiefIncome.subscribe(income => this.fiefIncome = income);
    this.dataService.tenants.subscribe(t => this.tenants = t);
  }

  demesneIncome(): number {
    return Math.floor(this.fiefIncome * this.manor.demenseAcres() / this.manor.clearedAcres);
  }

  getGlebeRevenue(): number {
    return Math.floor(this.manor.population.glebeRevenue() / 2);
  }

}
