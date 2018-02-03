export enum ArmorType {
  Cloth,
  Leather,
  Kurbul,
  Mail,
  Scale,
  Plate
}

export const ArmorTypeLabel = {
  [ArmorType.Cloth]: 'cloth',
  [ArmorType.Leather]: 'leather',
  [ArmorType.Kurbul]: 'kurbul',
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
}

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
export const ArmorLocationFields = {
  [ArmorLocation.Skull]: 'skull',
  [ArmorLocation.Face]: 'face',
  [ArmorLocation.Neck]: 'neck',
  [ArmorLocation.Shoulders]: 'shoulders',
  [ArmorLocation.UpperArms]: 'upperArms',
  [ArmorLocation.Elbows]: 'elbows',
  [ArmorLocation.Forearms]: 'forearms',
  [ArmorLocation.Hands]: 'hands',
  [ArmorLocation.ThoraxFront]: 'thoraxFront',
  [ArmorLocation.ThoraxBack]: 'thoraxBack',
  [ArmorLocation.AbdomenFront]: 'abdomenFront',
  [ArmorLocation.AbdomenBack]: 'adbomenBack',
  [ArmorLocation.Hips]: 'hips',
  [ArmorLocation.Thighs]: 'thighs',
  [ArmorLocation.Knees]: 'knees',
  [ArmorLocation.Calves]: 'calves',
  [ArmorLocation.Feet]: 'feet'
};

export enum ArmorProtection {
  Blunt,
  Edge,
  Pierce,
  Fire
}
