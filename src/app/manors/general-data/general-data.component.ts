import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NumberGenerator} from '../../shared/generators/number-generator';
import {Manor, Topology, TopologyEffects} from '../shared/models/manor.model';
import {maxGrossAcres} from '../shared/utilities';

@Component({
  selector: 'app-general-data',
  templateUrl: './general-data.component.html',
  styleUrls: ['./general-data.component.scss']
})
export class GeneralDataComponent implements OnInit {
  @Input('manor') manor: Manor;
  generalDataForm: FormGroup;
  private dice: NumberGenerator;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.dice = new NumberGenerator();
    this.createForm();
  }

  createForm() {
    this.generalDataForm = this.fb.group({
      year: [null],
      topology: [null, Validators.required],
      grossAcres: [0, [Validators.required, Validators.min(0)]],
      woodlandAcres: [0, [Validators.required, Validators.min(0), maxGrossAcres]],
      clearedAcres: [0, [Validators.required, Validators.min(0), maxGrossAcres]],
      landQuality: [0, [Validators.required, Validators.min(0.75), Validators.max(1.3)]],
      fiefIndex: [0, [Validators.required, Validators.min(0.75), Validators.max(1.25)]],
      tradeIndex: [0, [Validators.required, Validators.min(0.5), Validators.max(1.7)]],
      weatherIndex: [0, Validators.compose([Validators.required, Validators.min(0.65), Validators.max(1.35)])]
    });
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
