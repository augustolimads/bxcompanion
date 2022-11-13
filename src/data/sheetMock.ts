export const sheetMock = {
  name: 'Falkor Merako',
  class: 'Guerreiro',
  level: 1,
  currentXP: 9,
  maxXP: 10,
  attr: {
    str: 14,
    dex: 12,
    con: 7,
    int: 11,
    wis: 9,
    cha: 19
  },
  saves: {
    vsMagic: 1,
    death: 10,
    wand: 15,
    paralysis: 16,
    breath: 12,
    spells: 14
  },
  hp: {
    hd: 8,
    current: 10,
    max: 8
  },
  combat: {
    AC: 9,
    tac0: 19,
    equipments: []
  },
  itens: {
    distance: {
      journey: 20,
      exploration: 20,
      encounter: 20
    },
    weight: {
      currentWeight: 100,
      maxWeight: 100
    },
    coins: {
      copper: 0,
      silver: 0,
      electron: 0,
      gold: 0,
      platinum: 0
    },
    itens: []
  },
  spells: [],
  notes: {
    alignment: 'Neutro',
    vision: 'Penumbra',
    languages: ['Comum', 'anão'],
    notes:[]
  },
  proficiency: {
    armor: ['leve', 'pesado'],
    weapon: ['todas']
  }
}
