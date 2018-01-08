import { Component, OnInit, Input } from '@angular/core';
import { ITenant } from '../shared/models/tenant.model';

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
    let title = 'Unknown';
    if (this.tenant.military !== null) {
      title = 'Yeoman: ' + this.tenant.military;
    } else if (this.tenant.craft !== null) {
      title = this.tenant.craft;
    } else if (this.tenant.occupation !== null) {
      title = this.tenant.occupation;
    }
    title = this.tenant.office !== null ? title + '/' + this.tenant.office : title;
    return title;
  }
}
