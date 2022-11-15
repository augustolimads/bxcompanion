import { CharacterProps } from "src/hooks/useCharacter/useCharacter.types";

export const sheetMock = {
  name: 'Falkor Merako',
  class: 'Guerreiro',
  level: 1,
  currentXP: 9,
  maxXP: 10,
  attr: [
    {
      id: '1',
      label: 'Força',
      abbreviate: 'for',
      ref: 'str',
      value: 12
    },
    {
      id: '2',
      label: 'Destreza',
      abbreviate: 'des',
      ref: 'dex',
      value: 16
    },
    {
      id: '3',
      label: 'Constituição',
      abbreviate: 'con',
      ref: 'con',
      value: 5
    },
    {
      id: '4',
      label: 'Inteligência',
      abbreviate: 'int',
      ref: 'int',
      value: 8
    },
    {
      id: '5',
      label: 'Sabedoria',
      abbreviate: 'sab',
      ref: 'wis',
      value: 10
    },
    {
      id: '6',
      label: 'Carisma',
      abbreviate: 'car',
      ref: 'cha',
      value: 14
    },
  ],
  saves: [
    {
      id: '1',
      label: 'Vs Magia',
      abbreviate: 'vs magia',
      ref: 'vsMagic',
      value: 12
    },
    {
      id: '2',
      label: 'Morte e veneno',
      abbreviate: 'morte',
      ref: 'death',
      value: 16
    },
    {
      id: '3',
      label: 'Varinhas',
      abbreviate: 'varinhas',
      ref: 'wand',
      value: 8
    },
    {
      id: '4',
      label: 'Paralisia',
      abbreviate: 'paralisia',
      ref: 'paralysis',
      value: 13
    },
    {
      id: '5',
      label: 'Baforada',
      abbreviate: 'sopro',
      ref: 'breath',
      value: 10
    },
    {
      id: '6',
      label: 'Feitiços',
      abbreviate: 'feitiços',
      ref: 'spells',
      value: 14
    },
  ],
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
} as CharacterProps
