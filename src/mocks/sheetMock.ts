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
    itemList: [
      {
        id: 'tocha',
        label: 'Tocha',
        type: 'item',
        description: '',
        weight: 1
      },
      {
        id: 'casaco-de-peles',
        label: 'Casaco de peles',
        type: 'item',
        description: '',
        weight: 2
      },
      {
        id: 'pincel',
        label: 'Pincel',
        type: 'item',
        description: '',
        weight: 0
      },
      {
        id: 'espada-longa',
        equippedOn: 'r-hand',
        label: 'Espada longa',
        type: 'weapon',
        TAC0Bonus: 5,
        damage: 'd8',
        description: 'é uma espada com detalhes dourados',
        weight: 0,
        imageRef: 'espada-longa'
      },
      {
        id: 'armadura-de-couro',
        equippedOn: 'armor',
        type: 'armor',
        label: 'Armadura de couro',
        ACBonus: 5,
        weight: 0,
        imageRef: 'couro'
      },
      {
        id: 'escudo',
        equippedOn: 'l-hand',
        type: 'shield',
        label: 'escudo',
        ACBonus: 1,
        weight: 0,
        imageRef: 'escudo'
      },
      {
        id: 'elmo',
        equippedOn: 'helmet',
        type: 'helmet',
        label: 'Elmo',
        weight: 0,
        imageRef: 'elmo'
      },
      {
        id: 'anel-do-poder',
        equippedOn: 'magic0',
        type: 'magic',
        label: 'Anel do poder',
        weight: 0,
        imageRef: 'anel'
      },
      {
        id: 'flechas',
        equippedOn: 'ammo',
        type: 'ammo',
        label: 'flechas',
        amount: 10,
        weight: 0,
        imageRef: 'flecha'
      }
    ]
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
