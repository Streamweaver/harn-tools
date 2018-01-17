import {Crop, CropData, CropFactory, CropType, Herd} from './crop.model';
import { CheckResult } from '../../../shared/generators/number-generator';

interface LaborInterface {
  labor: number;
  kind: number;
}

interface AcresInterface extends LaborInterface {
  acres: number;
}

interface YieldInterface extends AcresInterface {
  yield: number;
  checkResult: CheckResult;
}

export class AnnualReport {
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
  fields: Crop[];
  pastures: Herd[];
  // Lords Budget
  demesneIncome: number;
  tenantRentAndFees: number;
  glebeRevenue: number;
  taxesAndTolls: number;
  amercements: number;
  feudalIncome: number;
  totalIncome: number;

  constructor() {
    this.year = 0;
    this.landQuality = 0;
    this.weatherIndex = 0;
    this.fiefIndex = 0;
    this.tradeIndex = 0;
    this.reeveCheckResult = CheckResult.CF;
    this.woodwardCheckResult = CheckResult.CF;
    this.herderCheckResult = CheckResult.CF;
    this.BeadleCheckResult = CheckResult.CF;
    this.woods = {yield: 0, acres: 0, labor: 0, kind: 0, checkResult: CheckResult.CF};
    this.crops = {yield: 0, acres: 0, labor: 0, kind: 0, checkResult: CheckResult.CF};
    this.pasture = {yield: 0, acres: 0, labor: 0, kind: 0, checkResult: CheckResult.CF};
    this.waste = 0;
    this.totalHarvest = 0;
    this.cropSeed = {acres: 0, kind: 0};
    this.winterFeed = {acres: 0, kind: 0};
    this.fiefMaintenance = {acres: 0, labor: 0, kind: 0};
    this.assart = {acres: 0, labor: 0, kind: 0};
    this.fiefIncome = {labor: 0, kind: 0};
    this.demesneIncome = 0;
    this.tenantRentAndFees = 0;
    this.glebeRevenue = 0;
    this.taxesAndTolls = 0;
    this.amercements = 0;
    this.feudalIncome = 0;
    this.totalIncome = 0;
    this.initFields();
    this.initPastures();
  }

  initFields() {
    const cf = new CropFactory();
    this.fields.push(cf.newCrop(CropType.Rye));
    this.fields.push(cf.newCrop(CropType.Barley));
    this.fields.push(cf.newCrop(CropType.Oats));
    this.fields.push(cf.newCrop(CropType.Hay));
    this.fields.push(cf.newCrop(CropType.Vegetables));
    this.fields.push(cf.newCrop(CropType.Flax));
    this.fields.push(cf.newCrop(CropType.Wheat));
    this.fields.push(cf.newCrop(CropType.Fruit));
  }

  initPastures() {
    this.pastures = [];
  }
}
