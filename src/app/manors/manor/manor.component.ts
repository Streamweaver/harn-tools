import { Component, OnInit } from '@angular/core';
import { TenantGenerator } from '../shared/tenant-generator';
import { Itenant } from '../shared/itenant.model';

@Component({
  selector: 'app-manor',
  templateUrl: './manor.component.html',
  styleUrls: ['./manor.component.scss']
})
export class ManorComponent implements OnInit {
  tenants: Itenant[];

  constructor() {
    this.tenants = this.generateTenants(5);
  }

  ngOnInit() {
    this.tenants = this.generateTenants(10);
  }

  onPopulateClick() {
    console.log('POPULATE NOW');
    this.tenants = this.generateTenants(30);
  }

  private generateTenants(n: number): Itenant[] {
    const tg = new TenantGenerator();
   const tList: Itenant[] = [];
    while (tList.length < n) {
      tList.push(tg.newTenant());
    }
    console.log('Added ' + tList.length + ' Tenants');
    return tList;
  }

}
