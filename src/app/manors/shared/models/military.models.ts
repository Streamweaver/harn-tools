export enum Military {
  LF,
  MF,
  SB,
  LB,
  LH,
  MH,
  HH
}

export const MilitaryData = {
  [Military.LF]: {
    pts: 2,
    title:'Light Foot',
    kind: 0
    },
  [Military.MF]: {
    pts: 3,
    title: 'Medium Foot',
    kind: 0
  },
  [Military.SB]: {
    pts: 4,
    title: 'Shortbow',
    kind: 0
  },
  [Military.LB]: {
    pts: 6,
    title: 'Longbow',
    kind: 0
  },
  [Military.LH]: {
    pts: 6,
    title: 'Light Horse',
    kind: 0
  },
  [Military.MH]: {
    pts: 8,
    title: 'Medium Horse',
    kind: 0
  },
  [Military.HH]: {
    pts: 10,
    title: 'Heavy Horse',
    kind: 0
  }
};
