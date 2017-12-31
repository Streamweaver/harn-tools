import { Itenant } from './itenant.model';

export class TenantGenerator {

  newTenant(): Itenant {
    return {
      occupation: 'Farmer',
      size: Math.floor(Math.random() * 6) + 1,
      ml: Math.floor(Math.random() * 30) + 70,
      serf_acres: Math.floor(Math.random() * 5) + 4,
      free_acres: Math.floor(Math.random() * 5) + 6,
      labor_days: Math.floor(Math.random() * 20) + 6,
      rent: Math.floor(Math.random() * 30) + 1,
      fees: Math.floor(Math.random() * 12) + 1,
      note: 'stubb generation'
    };
  }
}
