import {CheckResult, NumberGenerator} from './../../shared/generators/number-generator';
import {AbstractControl, FormControl, ValidatorFn} from '@angular/forms';
import {Manor} from './models/manor.model';

const dice = new NumberGenerator();

export function checkResultIndex(cr: CheckResult): number {
  switch (cr) {
    case CheckResult.CS:
      return 1.1;
    case CheckResult.MS:
      return 1;
    case CheckResult.MF:
      return 0.95;
    default:
      return 0.9;
  }
}

export function beadleResultIndex(cr: CheckResult): number {
  let beadleIndex = 0;
  switch (cr) {
    case CheckResult.CS:
      beadleIndex = 0.95;
      break;
    case CheckResult.MS:
      beadleIndex = 0.9;
      break;
    case CheckResult.MF:
      beadleIndex = 0.85;
      break;
    default:
      beadleIndex = 0.8;
      break;
  }
  return beadleIndex;
}

export function checkSkill(eml: number): CheckResult {
  const result = dice.rollDie(100);
  if (result <= eml || result < 5) {
    if (result % 5 === 0) {
      return CheckResult.CS;
    }
    return CheckResult.MS;
  } else {
    if (result % 5 === 0) {
      return CheckResult.CF;
    }
    return CheckResult.MF;
  }
}

export function maxGrossAcres(c: FormControl) {
  const group = c.parent;
  let grossAcres: number;
  if (group) {
    grossAcres = group.controls['grossAcres'].value;
  }
  if (grossAcres && grossAcres < c.value) {
    return { maxGrossAcres: {valid: false}};
  }
  return null;
}

export function maxManorWoodlands(m: Manor): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
      return m.woodlandAcres < control.value ? {'maxManorWoodlands': {valid: false}} : null;
  };
}
