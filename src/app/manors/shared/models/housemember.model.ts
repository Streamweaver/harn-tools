import {Craftsman} from './tenant.model';

export class HouseholdMember {
  name: string;
  role: string;
  ml: number;
  each: number;
  count: number;
  loyalty: number;

  constructor(role: string, name: string = null) {
    this.name = name;
    this.role = role;
    this.ml = 0;
    this.each = 0;
    this.count = 1;
    this.loyalty = 0;
  }

  displayName(): string {
    let name = this.role;
    if (this.name) {
      name = this.name + ' (' + this.role + ')';
    }
    return name;
  }
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
