import { Component, OnInit, Input } from '@angular/core';
import { ITenant } from '../shared/models/itenant.model';

@Component({
  selector: '[app-tenant]',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent implements OnInit {
  @Input('tenant') tenant: ITenant;

  constructor() { }

  ngOnInit() {}

  title(): string {
    if (this.tenant.military !== null) {
      return 'Yeoman: ' + this.tenant.military;
    }
    if (this.tenant.craft !== null) {
      return this.tenant.craft;
    }
    if (this.tenant.occupation !== null) {
      return this.tenant.occupation;
    }
    return 'Unknown';
  }
}
