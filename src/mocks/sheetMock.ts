import { CharacterProps } from 'src/stores/SheetCharacter/SheetCharacter.types'

export const sheetMock = {
  avatar: 'https://i.imgur.com/lj0WFdj.png',
  name: 'Falkor Merako',
  title: 'O matador de batatas',
  charClass: 'Guerreiro',
  level: {
    value: 1,
    currentXP: 9,
    maxXP: 10,
    xpBonus: 5
  },
  attr: {
    str: 12,
    dex: 16,
    con: 5,
    int: 8,
    wis: 10,
    cha: 14
  },
  saves: {
    vsMagic: 0,
    death: 16,
    wand: 8,
    paralysis: 13,
    breath: 10,
    spells: 14
  },
  hp: {
    hd: 8,
    current: 10,
    max: 8
  },
  combat: {
    AC: 9,
    ACBonus: 0,
    tac0: 19,
    tac0Extra: 0
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
    itemList: []
  },
  spells: [],
  notes: {
    alignment: 'Neutro',
    vision: 'Penumbra',
    languages: ['Comum', 'anão'],
    notes: []
  },
  proficiency: {
    armor: ['leve', 'pesado'],
    weapon: ['todas']
  }
} as unknown as CharacterProps
