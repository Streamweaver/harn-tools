export interface ITenant {
  occupation: string;
  craft: string;
  military: string;
  office: string;
  size: number;
  ml: number;
  serf_acres: number;
  free_acres: number;
  labor_days: number;
  rent: number;
  fees: number;
  notes: string[];
}

export enum Craftsman {
  Miller = 'Miller',
  Metalsmith = 'Metalsmith',
  Woodcrafter = 'Woodcrafter',
  Salter = 'Salter',
  Hideworker = 'Hideworker',
  Timberwright = 'Timberwright',
  Charcoaler = 'Charcoaler',
  Shipwright = 'Shipwright',
  Innkeeper = 'Innkeeper',
  Ostler = 'Ostler',
  Potter = 'Potter',
  Apothecary = 'Apothecary',
  Glassworker = 'Glassworker',
  Weaponsmith = 'Weaponsmith',
  Armourer = 'Armourer',
  GMDetermine = 'GM Determine'
}

export const craftsmanFees = {
  [Craftsman.Miller]: 240,
  [Craftsman.Metalsmith]: 144,
  [Craftsman.Woodcrafter]: 120,
  [Craftsman.Salter]: 120,
  [Craftsman.Hideworker]: 144,
  [Craftsman.Timberwright]: 216,
  [Craftsman.Charcoaler]: 180,
  [Craftsman.Shipwright]: 144,
  [Craftsman.Innkeeper]: 216,
  [Craftsman.Ostler]: 180,
  [Craftsman.Potter]: 120,
  [Craftsman.Apothecary]: 120,
  [Craftsman.Glassworker]: 120,
  [Craftsman.Weaponsmith]: 220,
  [Craftsman.Armourer]: 220,
  [Craftsman.GMDetermine]: 0
};

export enum TenantType {
  CRAFTSMAN = 'Craftsman', // Guilded Freeman
  FARMER = 'Farmer', // Unguilded Freeman
  VILLEIN = 'Villein', // Serf
  HALFVILLEIN = 'Half-Villein', // Serf
  COTTAR = 'Cottar', // Serf
  SLAVE = 'Slave/Thrall', // Slave
  PRIEST = 'Priest',
  FISHERMAN = 'Fisherman',
  TRAPPER = 'Trapper'
}

export enum Officer {
  Reeve = 'Reeve',
  Woodward = 'Woodward',
  Herder = 'Herder',
  Beadle = 'Beadle',
  Glebe = 'Glebe',
  FishWarden = 'Fish Warden',
  ForestWarden = 'Forest Warden'
}
