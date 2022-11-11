export const sheetMock = {
  name: 'Falkor Merak',
  class: 'Guerreiro',
  level: 1,
  currentLevel: 10,
  maxLevel: 200,
  attr: {
    str: 14,
    des: 12,
    con: 10,
    int: 11,
    sab: 9,
    car: 19
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
    max: 20
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
