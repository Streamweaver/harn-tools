import { Component, OnInit, Input } from '@angular/core';
import { Policies } from '../shared/models/manor.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit {
  @Input('policies') policies: Policies;
  policiesForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.policiesForm = this.fb.group({
      baseRent: [0, Validators.required],
      freeholderRent: [0, Validators.required],
      serfLabor: [0, Validators.required],
      foAcresPerHH: [0, Validators.required],
      foAcresPerLF: [0, Validators.required],
      isSlaveState: false,
      isBailiffRun: false,
    });
  }
}
