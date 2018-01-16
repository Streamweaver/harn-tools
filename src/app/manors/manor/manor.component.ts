import { Component, OnInit } from '@angular/core';
import {
  Manor,
  ManorFactory,
  Topology,
  TopologyEffects
} from '../shared/models/manor.model';
import { NumberGenerator } from '../../shared/generators/number-generator';
import { CropGeneratorService } from '../shared/services/crop-generator.service';

@Component({
  selector: 'app-manor',
  templateUrl: './manor.component.html',
  styleUrls: ['./manor.component.scss']
})
export class ManorComponent implements OnInit {
  manor: Manor;
  dice: NumberGenerator;
  showGenerationInput: boolean;

  constructor(
    private cropService: CropGeneratorService
  ) {}

  ngOnInit() {
    this.dice = new NumberGenerator();
    this._reset();
  }

  private _reset() {
    this.manor = ManorFactory.getManor();
    this.showGenerationInput = true;
    this.onTopologySelect();
  }

  /**
   * Recalculates Woodland and Cleared Acre values based on values from the
   * Topology table in Harn Manor.
   */
  onTopologySelect() {
    const woodlandRatio =
      TopologyEffects[this.manor.topology].woods -
      10 +
      this.dice.rollTotal(6, 3);
    this.manor.woodlandAcres = Math.floor(
      this.manor.grossAcres * woodlandRatio / 100
    );
    this.manor.clearedAcres = this.manor.grossAcres - this.manor.woodlandAcres;
  }

  /**
   * When gross acres is changed it recalculates cleared acres and woodland acres to the same percent.
   */
  onGrossAcresChange() {
    const oldTotal = this.manor.woodlandAcres + this.manor.clearedAcres;
    const woodlandPercent = this.manor.woodlandAcres / oldTotal;
    this.manor.woodlandAcres = Math.floor(
      this.manor.grossAcres * woodlandPercent
    );
    this.manor.clearedAcres = this.manor.grossAcres - this.manor.woodlandAcres;
  }

  /**
   * When woodland acres are changed, recalculate cleared acres to compensate.
   */
  onWoodlandAcresChange() {
    this.manor.clearedAcres = this.manor.grossAcres - this.manor.woodlandAcres;
  }

  /**
   * When cleared acres are changed, recalculate woodland acres to compensate.
   */
  onClearedAcresChange() {
    this.manor.woodlandAcres = this.manor.grossAcres - this.manor.clearedAcres;
  }

  onResetClick() {
    this._reset();
  }

  onGenerateClick() {
    this.showGenerationInput = false;
    this.cropService.generateCrops(this.manor);
  }

  /**
   * Parses a string array of topologies from the enum for use in select option.
   * @returns {string[]}
   */
  topologyChoices(): string[] {
    const keys = Object.keys(Topology);
    return keys;
  }
}
