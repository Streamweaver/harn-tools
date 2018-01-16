import { Component, OnInit, Input } from '@angular/core';
import {NumberGenerator} from '../../shared/generators/number-generator';
import {Manor, Topology, TopologyEffects} from '../shared/models/manor.model';

@Component({
  selector: 'app-general-data',
  templateUrl: './general-data.component.html',
  styleUrls: ['./general-data.component.scss']
})
export class GeneralDataComponent implements OnInit {
  @Input('manor') manor: Manor;
  private dice: NumberGenerator;

  constructor() { }

  ngOnInit() {
    this.dice = new NumberGenerator();
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
  /**
   * Parses a string array of topologies from the enum for use in select option.
   * @returns {string[]}
   */
  topologyChoices(): string[] {
    const keys = Object.keys(Topology);
    return keys;
  }
}
