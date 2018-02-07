export enum ArmorType {
  Cloth,
  Quilt,
  Leather,
  Kurbul,
  Ring,
  Mail,
  Scale,
  Plate
}

export const ArmorTypeLabel = {
  [ArmorType.Cloth]: 'cloth',
  [ArmorType.Quilt]: 'quilt',
  [ArmorType.Leather]: 'leather',
  [ArmorType.Kurbul]: 'kurbul',
  [ArmorType.Ring]: 'Ring',
  [ArmorType.Mail]: 'mail',
  [ArmorType.Scale]: 'scale',
  [ArmorType.Plate]: 'plate'
};

export const ArmorLabelType = {
  'cloth': ArmorType.Cloth,
  'leather': ArmorType.Leather,
  'kurbul': ArmorType.Kurbul,
  'mail': ArmorType.Mail,
  'scale': ArmorType.Scale,
  'plate': ArmorType.Plate
};

export enum ArmorLocation {
  Skull,
  Face,
  Neck,
  Shoulders,
  UpperArms,
  Elbows,
  Forearms,
  Hands,
  ThoraxFront,
  ThoraxBack,
  AbdomenFront,
  AbdomenBack,
  Hips,
  Groin,
  Thighs,
  Knees,
  Calves,
  Feet
}

/**
 * This is a map of ArmorLocation to the field label in the object.
 * @type {string}
 */
export const ArmorLocationLabels = {
  skull: 'skull',
  face: 'face',
  neck: 'neck',
  shoulders: 'shoulders',
  upperArms: 'upper arms',
  elbows: 'elbows',
  forearms: 'forearms',
  hands: 'hands',
  thoraxFront: 'thorax (front)',
  thoraxBack: 'thorax (back)',
  abdomenFront: 'abdomen (front)',
  abdomenBack: 'abdomen (back)',
  hips: 'hips',
  groin: 'groin',
  thighs: 'thighs',
  knees: 'knees',
  calves: 'calves',
  feet: 'feet'
};

export enum ArmorProtection {
  Blunt,
  Edge,
  Pierce,
  Fire
}
