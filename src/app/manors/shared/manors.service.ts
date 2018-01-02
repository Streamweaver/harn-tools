import { Injectable } from '@angular/core';
import { Itenant } from './itenant.model';
import { TenantGenerator } from './tenant-generator';

@Injectable()
export class ManorService {

  tenants: Itenant[];
  private tg: TenantGenerator;

  constructor() {
    this.tg = new TenantGenerator();
    this.tenants = [];
    if (localStorage.getItem('tenants') != null) {
      this.tenants = JSON.parse(localStorage.getItem('tenants'));
    }
  }

  getTenants(): Itenant[] {
    return this.tenants;
  }
}