import {ArmorProtection, ArmorType} from './armor.enum';
import {Armor} from './armor.model';

export const ProtectionValue = {
  [ArmorType.Cloth]: {
    [ArmorProtection.Blunt]: 1,
    [ArmorProtection.Edge]: 1,
    [ArmorProtection.Pierce]: 1,
    [ArmorProtection.Fire]: 1,
  },
  [ArmorType.Quilt]: {
    [ArmorProtection.Blunt]: 5,
    [ArmorProtection.Edge]: 3,
    [ArmorProtection.Pierce]: 2,
    [ArmorProtection.Fire]: 4,
  },
  [ArmorType.Leather]: {
    [ArmorProtection.Blunt]: 2,
    [ArmorProtection.Edge]: 4,
    [ArmorProtection.Pierce]: 3,
    [ArmorProtection.Fire]: 3,
  },
  [ArmorType.Kurbul]: {
    [ArmorProtection.Blunt]: 4,
    [ArmorProtection.Edge]: 5,
    [ArmorProtection.Pierce]: 4,
    [ArmorProtection.Fire]: 3,
  },
  [ArmorType.Ring]: {
    [ArmorProtection.Blunt]: 3,
    [ArmorProtection.Edge]: 6,
    [ArmorProtection.Pierce]: 4,
    [ArmorProtection.Fire]: 3,
  },
  [ArmorType.Mail]: {
    [ArmorProtection.Blunt]: 2,
    [ArmorProtection.Edge]: 8,
    [ArmorProtection.Pierce]: 5,
    [ArmorProtection.Fire]: 1,
  },
  [ArmorType.Scale]: {
    [ArmorProtection.Blunt]: 5,
    [ArmorProtection.Edge]: 9,
    [ArmorProtection.Pierce]: 4,
    [ArmorProtection.Fire]: 5,
  },
  [ArmorType.Plate]: {
    [ArmorProtection.Blunt]: 6,
    [ArmorProtection.Edge]: 10,
    [ArmorProtection.Pierce]: 6,
    [ArmorProtection.Fire]: 2,
  },
};

export const ArmorList: Armor[] = [
  {
    name: 'cloth cap',
    type: ArmorType.Cloth,

    skull: true,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 0.4,
    basePrice: 8
  },
  {
    name: 'cloth hood',
    type: ArmorType.Cloth,

    skull: true,
    face: false,
    neck: true,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 0.8,
    basePrice: 16
  },
  {
    name: 'cloth gloves',
    type: ArmorType.Cloth,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: true,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 0.4,
    basePrice: 8
  },
  {
    name: 'cloth leggings',
    type: ArmorType.Cloth,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: true,
    groin: true,
    thighs: true,
    knees: true,
    calves: true,
    feet: true,
    baseWeight: 4.4,
    basePrice: 88
  },
  {
    name: 'cloth robe',
    type: ArmorType.Cloth,

    skull: false,
    face: false,
    neck: false,
    shoulders: true,
    upperArms: true,
    elbows: true,
    forearms: true,
    hands: false,
    thoraxFront: true,
    thoraxBack: true,
    abdomenFront: true,
    abdomenBack: true,
    hips: true,
    groin: true,
    thighs: true,
    knees: true,
    calves: true,
    feet: false,
    baseWeight: 7.9,
    basePrice: 158
  },
  {
    name: 'cloth surcoat',
    type: ArmorType.Cloth,

    skull: false,
    face: false,
    neck: false,
    shoulders: true,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: true,
    thoraxBack: true,
    abdomenFront: true,
    abdomenBack: true,
    hips: true,
    groin: true,
    thighs: true,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 5.3,
    basePrice: 106
  },
  {
    name: 'cloth tunic',
    type: ArmorType.Cloth,

    skull: false,
    face: false,
    neck: false,
    shoulders: true,
    upperArms: true,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: true,
    thoraxBack: true,
    abdomenFront: true,
    abdomenBack: true,
    hips: true,
    groin: true,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 4.4,
    basePrice: 88
  },
  {
    name: 'cloth vest',
    type: ArmorType.Cloth,

    skull: false,
    face: false,
    neck: false,
    shoulders: true,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: true,
    thoraxBack: true,
    abdomenFront: true,
    abdomenBack: true,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 2.8,
    basePrice: 56
  },
  {
    name: 'quilt cap',
    type: ArmorType.Quilt,

    skull: true,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 1.2,
    basePrice: 16
  },
  {
    name: 'quilt cowl',
    type: ArmorType.Quilt,

    skull: true,
    face: false,
    neck: true,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 2.4,
    basePrice: 32
  },
  {
    name: 'quilt gambeson',
    type: ArmorType.Quilt,

    skull: false,
    face: false,
    neck: false,
    shoulders: true,
    upperArms: true,
    elbows: true,
    forearms: true,
    hands: false,
    thoraxFront: true,
    thoraxBack: true,
    abdomenFront: true,
    abdomenBack: true,
    hips: true,
    groin: true,
    thighs: true,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 19.8,
    basePrice: 264
  },
  {
    name: 'quild gloves',
    type: ArmorType.Quilt,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: true,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 1.2,
    basePrice: 16
  },
  {
    name: 'quilt leggings',
    type: ArmorType.Quilt,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: true,
    groin: true,
    thighs: true,
    knees: true,
    calves: true,
    feet: true,
    baseWeight: 13.2,
    basePrice: 176
  },
  {
    name: 'quilt tunic',
    type: ArmorType.Quilt,

    skull: false,
    face: false,
    neck: false,
    shoulders: true,
    upperArms: true,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: true,
    thoraxBack: true,
    abdomenFront: true,
    abdomenBack: true,
    hips: true,
    groin: true,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 13.2,
    basePrice: 176
  },
  {
    name: 'leather calfboots',
    type: ArmorType.Leather,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: true,
    feet: true,
    baseWeight: 3.2,
    basePrice: 64
  },
  {
    name: 'leather cap',
    type: ArmorType.Leather,

    skull: true,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 0.8,
    basePrice: 16
  },
  {
    name: 'leather cowl',
    type: ArmorType.Leather,

    skull: true,
    face: false,
    neck: true,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 1.6,
    basePrice: 32
  },
  {
    name: 'leather gorget',
    type: ArmorType.Leather,

    skull: false,
    face: false,
    neck: true,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 0.8,
    basePrice: 16
  },
  {
    name: 'leather gauntlets',
    type: ArmorType.Leather,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: true,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 0.8,
    basePrice: 16
  },
  {
    name: 'leather kneeboots',
    type: ArmorType.Leather,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: true,
    calves: true,
    feet: true,
    baseWeight: 3.8,
    basePrice: 76
  },
  {
    name: 'leather leggings',
    type: ArmorType.Leather,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: true,
    groin: true,
    thighs: true,
    knees: true,
    calves: true,
    feet: true,
    baseWeight: 8.8,
    basePrice: 176
  },
  {
    name: 'leather shoes',
    type: ArmorType.Leather,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: true,
    baseWeight: 1.2,
    basePrice: 24
  },
  {
    name: 'leather surcoat',
    type: ArmorType.Leather,

    skull: false,
    face: false,
    neck: false,
    shoulders: true,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: true,
    thoraxBack: true,
    abdomenFront: true,
    abdomenBack: true,
    hips: true,
    groin: true,
    thighs: true,
    knees: true,
    calves: false,
    feet: false,
    baseWeight: 11.2,
    basePrice: 224
  },
  {
    name: 'leather tunic',
    type: ArmorType.Leather,

    skull: false,
    face: false,
    neck: false,
    shoulders: true,
    upperArms: true,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: true,
    thoraxBack: true,
    abdomenFront: true,
    abdomenBack: true,
    hips: true,
    groin: true,
    thighs: true,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 11.8,
    basePrice: 236
  },
  {
    name: 'leather vest',
    type: ArmorType.Leather,

    skull: false,
    face: false,
    neck: false,
    shoulders: true,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: true,
    thoraxBack: true,
    abdomenFront: true,
    abdomenBack: true,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 5.6,
    basePrice: 112
  },
  {
    name: 'kurbul ailettes',
    type: ArmorType.Kurbul,

    skull: false,
    face: false,
    neck: false,
    shoulders: true,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 1.0,
    basePrice: 20
  },
  {
    name: 'kurbul breastplate',
    type: ArmorType.Kurbul,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: true,
    thoraxBack: false,
    abdomenFront: true,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 3.0,
    basePrice: 60
  },
  {
    name: 'kurbul backplate',
    type: ArmorType.Kurbul,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: true,
    abdomenFront: false,
    abdomenBack: true,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 3.0,
    basePrice: 60
  },
  {
    name: 'kurbul coudes',
    type: ArmorType.Kurbul,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: true,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 0.5,
    basePrice: 10
  },
  {
    name: 'kurbul greaves',
    type: ArmorType.Kurbul,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: true,
    feet: false,
    baseWeight: 2.5,
    basePrice: 50
  },
  {
    name: 'kurbul halfhelm',
    type: ArmorType.Kurbul,

    skull: true,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 1.0,
    basePrice: 20
  },
  {
    name: 'kurbul kneecops',
    type: ArmorType.Kurbul,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: true,
    calves: false,
    feet: false,
    baseWeight: 0.8,
    basePrice: 15
  },
  {
    name: 'kurbul rerebraces',
    type: ArmorType.Kurbul,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: true,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 1.5,
    basePrice: 30
  },
  {
    name: 'kurbul vambraces',
    type: ArmorType.Kurbul,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: true,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 1.3,
    basePrice: 25
  },
  {
    name: 'ring byrnie',
    type: ArmorType.Ring,

    skull: false,
    face: false,
    neck: false,
    shoulders: true,
    upperArms: true,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: true,
    thoraxBack: true,
    abdomenFront: true,
    abdomenBack: true,
    hips: true,
    groin: true,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 17.6,
    basePrice: 308
  },
  {
    name: 'ring gauntlets',
    type: ArmorType.Ring,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: true,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 1.6,
    basePrice: 28
  },
  {
    name: 'ring halfhelm',
    type: ArmorType.Ring,

    skull: true,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 1.6,
    basePrice: 28
  },
  {
    name: 'ring hauberk',
    type: ArmorType.Ring,

    skull: false,
    face: false,
    neck: false,
    shoulders: true,
    upperArms: true,
    elbows: true,
    forearms: true,
    hands: false,
    thoraxFront: true,
    thoraxBack: true,
    abdomenFront: true,
    abdomenBack: true,
    hips: true,
    groin: true,
    thighs: true,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 26.4,
    basePrice: 462
  },
  {
    name: 'ring leggings',
    type: ArmorType.Ring,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: true,
    groin: true,
    thighs: true,
    knees: true,
    calves: true,
    feet: true,
    baseWeight: 17.6,
    basePrice: 308
  },
  {
    name: 'ring vest',
    type: ArmorType.Ring,

    skull: false,
    face: false,
    neck: false,
    shoulders: true,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: true,
    thoraxBack: true,
    abdomenFront: true,
    abdomenBack: true,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 11.2,
    basePrice: 196
  },
  {
    name: 'mail byrnie',
    type: ArmorType.Mail,

    skull: false,
    face: false,
    neck: false,
    shoulders: true,
    upperArms: true,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: true,
    thoraxBack: true,
    abdomenFront: true,
    abdomenBack: true,
    hips: true,
    groin: true,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 22.0,
    basePrice: 660
  },
  {
    name: 'mail cowl',
    type: ArmorType.Mail,

    skull: true,
    face: false,
    neck: true,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 4.0,
    basePrice: 120
  },
  {
    name: 'mail hauberk',
    type: ArmorType.Mail,

    skull: false,
    face: false,
    neck: false,
    shoulders: true,
    upperArms: true,
    elbows: true,
    forearms: true,
    hands: false,
    thoraxFront: true,
    thoraxBack: true,
    abdomenFront: true,
    abdomenBack: true,
    hips: true,
    groin: true,
    thighs: true,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 33.0,
    basePrice: 990
  },
  {
    name: 'mail leggings',
    type: ArmorType.Mail,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: true,
    groin: true,
    thighs: true,
    knees: true,
    calves: true,
    feet: true,
    baseWeight: 22.0,
    basePrice: 660
  },
  {
    name: 'mail mittens',
    type: ArmorType.Mail,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: true,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 2.0,
    basePrice: 60
  },
  {
    name: 'scale byrnie',
    type: ArmorType.Scale,

    skull: false,
    face: false,
    neck: false,
    shoulders: true,
    upperArms: true,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: true,
    thoraxBack: true,
    abdomenFront: true,
    abdomenBack: true,
    hips: true,
    groin: true,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 30.8,
    basePrice: 440
  },
  {
    name: 'scale hauberk',
    type: ArmorType.Scale,

    skull: false,
    face: false,
    neck: false,
    shoulders: true,
    upperArms: true,
    elbows: true,
    forearms: true,
    hands: false,
    thoraxFront: true,
    thoraxBack: true,
    abdomenFront: true,
    abdomenBack: true,
    hips: true,
    groin: true,
    thighs: true,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 46.2,
    basePrice: 660
  },
  {
    name: 'scale vest',
    type: ArmorType.Scale,

    skull: false,
    face: false,
    neck: false,
    shoulders: true,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: true,
    thoraxBack: true,
    abdomenFront: true,
    abdomenBack: true,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 19.6,
    basePrice: 280
  },
  {
    name: 'plate ailettes',
    type: ArmorType.Plate,

    skull: false,
    face: false,
    neck: false,
    shoulders: true,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 3.2,
    basePrice: 100
  },
  {
    name: 'plate breastplate',
    type: ArmorType.Plate,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: true,
    thoraxBack: false,
    abdomenFront: true,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 9.6,
    basePrice: 300
  },
  {
    name: 'plate backplate',
    type: ArmorType.Plate,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: true,
    abdomenFront: false,
    abdomenBack: true,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 9.6,
    basePrice: 300
  },
  {
    name: 'plate coudes',
    type: ArmorType.Plate,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: true,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 1.6,
    basePrice: 50
  },
  {
    name: 'plate great helmet',
    type: ArmorType.Plate,

    skull: true,
    face: true,
    neck: true,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 8.8,
    basePrice: 275
  },
  {
    name: 'plate greaves',
    type: ArmorType.Plate,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: true,
    feet: false,
    baseWeight: 8.0,
    basePrice: 250
  },
  {
    name: 'plate halfhelm',
    type: ArmorType.Plate,

    skull: true,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 3.2,
    basePrice: 100
  },
  {
    name: 'plate kneecops',
    type: ArmorType.Plate,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: true,
    calves: false,
    feet: false,
    baseWeight: 2.4,
    basePrice: 75
  },
  {
    name: 'plate rerebraces',
    type: ArmorType.Plate,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: true,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 4.8,
    basePrice: 150
  },
  {
    name: 'plate vambraces',
    type: ArmorType.Plate,

    skull: false,
    face: false,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: true,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 4.0,
    basePrice: 125
  },
  {
    name: 'plate 3/4 helm',
    type: ArmorType.Plate,

    skull: true,
    face: true,
    neck: false,
    shoulders: false,
    upperArms: false,
    elbows: false,
    forearms: false,
    hands: false,
    thoraxFront: false,
    thoraxBack: false,
    abdomenFront: false,
    abdomenBack: false,
    hips: false,
    groin: false,
    thighs: false,
    knees: false,
    calves: false,
    feet: false,
    baseWeight: 5.6,
    basePrice: 175
  }
];
