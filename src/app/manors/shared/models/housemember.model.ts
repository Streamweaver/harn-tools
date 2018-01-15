export interface IHouseholdMember {
  title: string;
  ml: number;
  each: number;
  count: number;
  loyalty: number;
}

export enum Noble {
  Fiefholder = 'Fiefholder',
  Spouse = 'Spouse',
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

export enum Servants {
  Chamberlain = 'Chamberlain',
  Cook = 'Cook',
  Baker = 'Baker',
  Alewife = 'Alewife',
  Gardener = 'Gardener',
  Nursemaid = 'Nursemaid',
  Domestics = 'Domestics'
}
