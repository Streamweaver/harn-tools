import { ITenant } from './itenant.model';

export class IManor {
  clearedAcres: number;
  landQuality: number;
  tenants: ITenant[];
  isSlaveState: boolean;
  freeRent: number;
  serfLabor: number;
}
