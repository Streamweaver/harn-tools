export const ArmorTypes = [
  'cloth',
  'quilt',
  'leather',
  'kurbul',
  'ring',
  'mail',
  'scale',
  'plate'
];

export const DamageTypes = [
  'blunt', 'edge', 'point', 'fire'
];

export const ProtectionValue = {
  'cloth': {
    'blunt': 1,
    'edge': 1,
    'point': 1,
    'fire': 1,
  },
  'quilt': {
    'blunt': 5,
    'edge': 3,
    'point': 2,
    'fire': 4,
  },
  'leather': {
    'blunt': 2,
    'edge': 4,
    'point': 3,
    'fire': 3,
  },
  'kurbul': {
    'blunt': 4,
    'edge': 5,
    'point': 4,
    'fire': 3,
  },
  'ring': {
    'blunt': 3,
    'edge': 6,
    'point': 4,
    'fire': 3,
  },
  'mail': {
    'blunt': 2,
    'edge': 8,
    'point': 5,
    'fire': 1,
  },
  'scale': {
    'blunt': 5,
    'edge': 9,
    'point': 4,
    'fire': 5,
  },
  'plate': {
    'blunt': 6,
    'edge': 10,
    'point': 6,
    'fire': 2,
  },
};
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

export const ArmorLocationCodes = {
  skull: 'sk',
  face: 'fc',
  neck: 'nk',
  shoulders: 'sh',
  upperArms: 'ua',
  elbows: 'el',
  forearms: 'fo',
  hands: 'ha',
  thoraxFront: 'tx-f',
  thoraxBack: 'tx-b',
  abdomenFront: 'ab-f',
  abdomenBack: 'ab-b',
  hips: 'hp',
  groin: 'gr',
  thighs: 'th',
  knees: 'kn',
  calves: 'ca',
  feet: 'ft'
};

