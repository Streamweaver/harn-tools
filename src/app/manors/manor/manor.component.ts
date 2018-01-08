import { Component, OnInit } from '@angular/core';
import {CraftsmanGenerator} from '../shared/generators/craftsman-generator';
import {TenantGenerator} from '../shared/generators/tenant-generator';
import {YeomanGenerator} from '../shared/generators/yeoman-generator';
import { IManor, Topology } from '../shared/models/manor.model';
import { ManorService } from '../shared/manor.service';
import { TenantOfficerGenerator } from '../shared/generators/tenant-officer.generator';

@Component({
  selector: 'app-manor',
  templateUrl: './manor.component.html',
  styleUrls: ['./manor.component.scss']
})
export class ManorComponent implements OnInit {
  manor: IManor;
  showGenerationInput: boolean;
  private _tg: TenantGenerator;
  private _cg: CraftsmanGenerator;
  private _mg: YeomanGenerator;
  private _to: TenantOfficerGenerator;

  constructor(private manorService: ManorService) {}

  ngOnInit() {
    this.manor = this.manorService.getManor();
    this.showGenerationInput = true;
    this._tg = new TenantGenerator();
    this._cg = new CraftsmanGenerator();
    this._mg = new YeomanGenerator();
    this._to = new TenantOfficerGenerator();
  }

  private _reset() {
    this.manorService.resetManor();
    this.showGenerationInput = true;
  }

  onResetClick() {
    this._reset();
  }

  onGenerateClick() {
    this.showGenerationInput = false;
    this._tg.generateTenants(this.manor);
    this._cg.assignCraftsmen(this.manor);
    this._mg.recruitYeoman(this.manor);
    this._to.electOfficers(this.manor);
  }

  topologyChoices(): string[] {
    const keys = Object.keys(Topology);
    return keys;
  }
}
