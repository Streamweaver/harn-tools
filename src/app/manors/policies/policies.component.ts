import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Policies} from '../shared/models/manor.model';
import {SharedDataService} from '../shared/services/shared-data.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit {
  @Input('policies') policies: Policies;
  policiesForm: FormGroup;
  showGenerationInput: boolean;

  constructor(
    private fb: FormBuilder,
    private dataService: SharedDataService
  ) {
  }

  ngOnInit() {
    this.createForm();
    this.initForm();
    this.dataService.showGenerationInput.subscribe(g => this.showGenerationInput = g);
  }

  createForm() {
    this.policiesForm = this.fb.group({
      baseRent: [0, [Validators.required, Validators.min(30), Validators.max(120)]],
      freeholderRent: [0, [Validators.required, Validators.min(3), Validators.max(12)]],
      serfLabor: [0, [Validators.required, Validators.min(0), Validators.max(8)]],
      foAcresPerHH: [0, [Validators.required, Validators.min(0)]],
      foAcresPerLF: [0, Validators.required],
      isSlaveState: '',
      isBailiffRun: '',
    });
  }

  initForm() {
    this.policiesForm.patchValue(this.policies);
  }
}
