import { Component, OnInit } from '@angular/core';
import { Manor, ManorFactory, Topology } from '../shared/models/manor.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-manor',
  templateUrl: './reactive-manor.component.html',
  styleUrls: ['./reactive-manor.component.scss']
})
export class ReactiveManorComponent implements OnInit {
  manor: Manor;
  manorForm: FormGroup;

  showGenerationInput: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.manor = ManorFactory.getManor();
    this.createForm();
    this.manorForm.patchValue(this.manor);
  }

  createForm() {
    this.manorForm = this.fb.group({
      name: ['', Validators.required],
      realm: ['', Validators.required],
      topology: ['', Validators.required],
      grossAcres: [0, Validators.min(500)],
      woodlandAcres: [0, Validators.max(10000)],
      clearedAcres: [0, Validators.required],
      fiefIndex: [1.0, Validators.required],
      tradeIndex: [0.5, Validators.required],
      // Generation data
      isSlaveState: [false, Validators.required]
    });
  }

  onResetClick() {}
  onGenerateClick() {}

  /**
   * When gross acres is changed it recalculates cleared acres and woodland acres to the same percent.
   */
  onGrossAcresChange() {
    const oldTotal =
      this.manorForm.value.woodlandAcres + this.manorForm.value.clearedAcres;
    const woodlandPercent = this.manorForm.value.woodlandAcres / oldTotal;
    this.manorForm.value.woodlandAcres = Math.floor(
      this.manorForm.value.grossAcres * woodlandPercent
    );
    this.manorForm.value.clearedAcres =
      this.manorForm.value.grossAcres - this.manorForm.value.woodlandAcres;
  }

  onWoodlandAcresChange() {
    this.manorForm.value.clearedAcres =
      this.manorForm.value.grossAcres - this.manor.woodlandAcres;
  }

  onClearedAcresChange() {
    this.manorForm.value.woodlandAcres =
      this.manorForm.value.grossAcres - this.manor.clearedAcres;
  }
}
