import { Component, OnInit } from '@angular/core';
import {CraftsmanGenerator} from '../shared/generators/craftsman-generator';
import {TenantGenerator} from '../shared/generators/tenant-generator';
import {YeomanGenerator} from '../shared/generators/yeoman-generator';
import { Manor, IManor, Topology, TopologyEffects } from '../shared/models/manor.model';
import { ManorService } from '../shared/manor.service';
import { TenantOfficerGenerator } from '../shared/generators/tenant-officer.generator';
import { NumberGenerator } from '../../shared/generators/number-generator';

@Component({
  selector: 'app-manor',
  templateUrl: './manor.component.html',
  styleUrls: ['./manor.component.scss']
})
export class ManorComponent implements OnInit {
  manor: Manor;
  dice: NumberGenerator;
  showGenerationInput: boolean;
  private _tg: TenantGenerator;
  private _cg: CraftsmanGenerator;
  private _mg: YeomanGenerator;
  private _to: TenantOfficerGenerator;

  constructor(private manorService: ManorService) {}

  ngOnInit() {
    this.manor = this.manorService.getManor() as Manor;
    this.dice = new NumberGenerator();
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

  onTopologySelect() {
      const woodlandRatio = TopologyEffects[this.manor.topology].woods  + this.dice.rollDie(10) - 5;
      this.manor.woodlandAcres = Math.floor(this.manor.grossAcres * woodlandRatio / 100);
      this.manor.clearedAcres = this.manor.grossAcres - this.manor.woodlandAcres;
  }

  /**
   * When gross acres is changed it recalculates cleared acres and woodland acres to the same percent.
   */
  onGrossAcresChange() {
    const oldTotal = this.manor.woodlandAcres + this.manor.clearedAcres;
    const woodlandPercent = this.manor.woodlandAcres / oldTotal;
    this.manor.woodlandAcres = Math.floor(this.manor.grossAcres * woodlandPercent);
    this.manor.clearedAcres = this.manor.grossAcres - this.manor.woodlandAcres;
  }

  onWoodlandAcresChange() {
    this.manor.clearedAcres = this.manor.grossAcres - this.manor.woodlandAcres;
  }

  onClearedAcresChange() {
    this.manor.woodlandAcres = this.manor.grossAcres - this.manor.clearedAcres;
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
    this.manor.setFiefIndex();
  }

  topologyChoices(): string[] {
    const keys = Object.keys(Topology);
    return keys;
  }
}
