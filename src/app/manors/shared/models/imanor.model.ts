import { ITenant } from './itenant.model';

export class IManor {
  clearedAcres: number;
  landQuality: number;
  tenants: ITenant[];
  freeRent: number;
  serfLabor: number;
  isSlaveState: boolean;
  isCoastal: boolean;
}
