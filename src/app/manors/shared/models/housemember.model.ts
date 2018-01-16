export interface HouseholdMember {
  title: string;
  ml: number;
  each: number;
  count: number;
  loyalty: number;
}

export enum Noble {
  Fiefholder = 'Fiefholder',
  Spouse = 'Spouse',
  LadyInWaiting = 'Lady-in-Waiting',
  Offspring = 'Offspring',
  Relative = 'Relative',
  Squire = 'Squire',
  Bailiff = 'Bailiff',
  Steward = 'Steward'
}

export enum Stable {
  Warhorse = 'Warhorse',
  Palfrey = 'Palfrey'
}

export enum Servant {
  Chamberlain = 'Chamberlain',
  Cook = 'Cook',
  Baker = 'Baker',
  Alewife = 'Alewife',
  Gardener = 'Gardener',
  Nursemaid = 'Nursemaid',
  Domestic = 'Domestic'
}
