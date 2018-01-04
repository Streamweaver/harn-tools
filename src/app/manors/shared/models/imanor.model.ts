import { ITenant } from './itenant.model';

export class IManor {
  grossAcres: number;
  clearedAcres: number;
  landQuality: number;
  tenants: ITenant[];
  freeRent: number;
  serfLabor: number;
  isSlaveState: boolean;
  isCoastal: boolean;
  foAcresPerHH: number;
  foAcresPerLF: number;
  feudalObligationHH: number;
  feudalObligationLF: number;
}
