import { CheckResult } from './../../shared/generators/number-generator';

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
