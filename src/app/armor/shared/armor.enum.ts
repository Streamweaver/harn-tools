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
  [ArmorLocation.Skull]: 'skull',
  [ArmorLocation.Face]: 'face',
  [ArmorLocation.Neck]: 'neck',
  [ArmorLocation.Shoulders]: 'shoulders',
  [ArmorLocation.UpperArms]: 'upper arms',
  [ArmorLocation.Elbows]: 'elbows',
  [ArmorLocation.Forearms]: 'forearms',
  [ArmorLocation.Hands]: 'hands',
  [ArmorLocation.ThoraxFront]: 'thorax (front)',
  [ArmorLocation.ThoraxBack]: 'thorax (back)',
  [ArmorLocation.AbdomenFront]: 'abdomen (front)',
  [ArmorLocation.AbdomenBack]: 'abdomen (back)',
  [ArmorLocation.Hips]: 'hips',
  [ArmorLocation.Groin]: 'groin',
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
