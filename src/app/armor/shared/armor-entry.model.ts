import {ArmorType} from './armor-type.enum';

export interface ArmorData {
  name: string;
  type: string;
  skull: boolean;
  face: boolean;
  neck: boolean;
  shoulders: boolean;
  upperArms: boolean;
  elbows: boolean;
  forearms: boolean;
  hands: boolean;
  thoraxFront: boolean;
  thoraxBack: boolean;
  abdomenFront: boolean;
  abdomenBack: boolean;
  hips: boolean;
  groin: boolean;
  thighs: boolean;
  knees: boolean;
  calves: boolean;
  feet: boolean;
  baseWeight: number;
  baseCost: number;
}

export class ArmorEntryModel {
  type: ArmorType;
  quality: number;
  data: ArmorData;

  constructor(data: ArmorData) {
    this.data = data;
  }

  displayName(): string {
    return `${this.data.type} ${this.data.name}`;
  }
}
