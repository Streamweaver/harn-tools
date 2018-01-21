import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Manor } from '../shared/models/manor.model';
import { TenantSummary } from '../shared/models/summaries.model';
import { SharedDataService } from '../shared/services/shared-data.service';

@Component({
  selector: 'app-lords-budget',
  templateUrl: './lords-budget.component.html',
  styleUrls: ['./lords-budget.component.scss']
})
export class LordsBudgetComponent implements OnInit {
  @Input('manor') manor: Manor;
  fiefIncome: number;
  tenants: TenantSummary;
  householdKind: number;
  lordsBudgetForm: FormGroup;

  constructor(
    private dataService: SharedDataService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.dataService.fiefIncome.subscribe(income => (this.fiefIncome = income));
    this.dataService.tenants.subscribe(t => (this.tenants = t));
    this.dataService.householdKind.subscribe(k => (this.householdKind = k));
    this.createForm();
  }

  createForm() {
    this.lordsBudgetForm = this.fb.group({
      taxes: [0, Validators.required],
      amercements: [0, Validators.required],
      feudalIncome: [0, Validators.required],
      feudalPayments: [0, Validators.required],
      tithe: [0, Validators.required],
      laborHired: [0, Validators.required],
      politicalExpenses: [0, Validators]
    });
  }

  demesneIncome(): number {
    return Math.floor(
      this.fiefIncome * this.manor.demenseAcres() / this.manor.clearedAcres
    );
  }

  getGlebeRevenue(): number {
    return Math.floor(this.manor.population.glebeRevenue() * 0.5);
  }

  totalIncome(): number {
    let income = this.demesneIncome();
    income += this.tenants.rent + this.tenants.fees;
    income += this.getGlebeRevenue();
    income += this.manor.taxIncome;
    income += this.manor.amercements.amount;
    income += this.manor.feudalIncome;
    this.dataService.setTotalIncome(income);
    return income;
  }

  totalExpenses(): number {
    let expenses = this.householdKind;
    expenses += this.manor.feudalPayments;
    expenses += this.manor.tithe;
    expenses += this.manor.laborHired;
    expenses += this.manor.politicalExpenses;
    return expenses;
  }

  privyPurse(): number {
    return this.totalIncome() - this.totalExpenses();
  }
}
