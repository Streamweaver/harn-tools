import {
  CheckResult,
  NumberGenerator
} from './../../shared/generators/number-generator';

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
