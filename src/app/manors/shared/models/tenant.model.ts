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

/**
 * List of craftsman that can appear in a village or manor.
 */
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
  Clothier = 'Clothier',
  Harper = 'Harper',
  Herald = 'Herald',
  Litigant = 'Litigant',
  Mason = 'Mason',
  Physician = 'Physician',
  Priest = 'Priest',
  Sage = 'Sage/Tutor',
  Scribe = 'Scribe',
  Teamster = 'Teamster',
  GMDetermine = 'GM Determine'
}

/**
 * Used to calculate cost for household
 * @type {{}}
 */
export const craftsmanCost = {
  [Craftsman.Clothier]: 900,
  [Craftsman.Harper]: 600,
  [Craftsman.Herald]: 1200,
  [Craftsman.Hideworker]: 900,
  [Craftsman.Litigant]: 1100,
  [Craftsman.Mason]: 1500,
  [Craftsman.Metalsmith]: 1100,
  [Craftsman.Ostler]: 1300,
  [Craftsman.Physician]: 1200,
  [Craftsman.Priest]: 800,
  [Craftsman.Sage]: 1200,
  [Craftsman.Scribe]: 800,
  [Craftsman.Salter]: 700,
  [Craftsman.Teamster]: 900,
  [Craftsman.Timberwright]: 1200,
  [Craftsman.Weaponsmith]: 1800,
  [Craftsman.Woodcrafter]: 1000
};

/**
 * Used to calculate fees as part of village census.
 * @type {{}}
 */
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
