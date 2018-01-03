import { Injectable } from '@angular/core';
import { Manor } from './models/manor.model';
import { Itenant } from './itenant.model';
import { TenantGenerator } from './tenant-generator';

@Injectable()
export class ManorService {
  manor: Manor;
  tenants: Itenant[];
  private tg: TenantGenerator;

  constructor() {
    this.tg = new TenantGenerator();
    this.manor = new Manor();
    this.tenants = [];
    if (localStorage.getItem('tenants') != null) {
      this.tenants = JSON.parse(localStorage.getItem('tenants'));
    }
  }

  getTenants(): Itenant[] {
    return this.tenants;
  }

  getManor(): Manor {
    return this.manor;
  }
}
