import { Component, OnInit } from '@angular/core';
import { IManor } from '../shared/models/imanor.model';
import { TenantGenerator } from '../shared/generators/tenant-generator';
import { Itenant } from '../shared/itenant.model';
import { ManorService } from '../shared/manor.service';

@Component({
  selector: 'app-manor',
  templateUrl: './manor.component.html',
  styleUrls: ['./manor.component.scss']
})
export class ManorComponent implements OnInit {
  manor: IManor;
  tenantTotals: {
    size: number;
    serf_acres: number;
    free_acres: number;
    labor_days: number;
    rent: number;
    fees: number;
  };

  constructor(private manorService: ManorService) {}

  ngOnInit() {
    this.manor = this.manorService.getManor();
  }

  private _reset() {
    this.manorService.resetManor();
    this.tenantTotals = {
      size: 0,
      serf_acres: 0,
      free_acres: 0,
      labor_days: 0,
      rent: 0,
      fees: 0
    };
  }

  onResetClick() {
    this._reset();
  }

}
