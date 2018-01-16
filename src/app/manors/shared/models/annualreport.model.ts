import { ICrop, LivestockInterface } from './crop.model';
import { CheckResult } from './../../../shared/generators/number-generator';

interface LaborInterface {
  labor: number;
  kind: number;
}

interface AcresInterface extends LaborInterface {
  acres: number;
}

interface YieldInterface extends AcresInterface {
  yield: number;
}

export class AnnualReportInterface {
  year: number;
  landQuality: number;
  weatherIndex: number;
  fiefIndex: number;
  tradeIndex: number;
  reeveCheckResult: CheckResult;
  woodwardCheckResult: CheckResult;
  herderCheckResult: CheckResult;
  BeadleCheckResult: CheckResult;

  // Fief Budget
  woods: YieldInterface;
  crops: YieldInterface;
  pasture: YieldInterface;
  waste: number;
  totalHarvest: number;
  cropSeed: { acres: number; kind: number };
  winterFeed: { acres: number; kind: number };
  fiefMaintenance: AcresInterface;
  assart: AcresInterface;
  fiefIncome: LaborInterface;
  fields: ICrop[];
  pastures: LivestockInterface[];

  // Lords Budget
  demesneIncome: number;
  tenantRentAndFees: number;
  glebeRevenue: number;
  taxesAndTolls: number;
  amercements: number;
  feudalIncome: number;
  totalIncome: number;
}
