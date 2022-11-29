export type CharacterProps = {
  id?: string
  name: string
  class: string
  level: {
    value: number
    currentXP: number
    maxXP: number
    xpBonus: number
  }
  attr: {
    id: string
    label: string
    abbreviate: string
    ref: itemAttributeProps
    value: number
  }[]
  saves: {
    id: string
    label: string
    abbreviate: string
    ref: itemSavesProps
    value: number
  }[]
  hp: {
    hd: number
    current: number
    max: number
  }
  combat: {
    AC: number
    ACExtra: number
    tac0: number
    tac0Extra: number
    equipments: EquipmentProps[]
  }
  itens: {
    distance: {
      journey: number
      exploration: number
      encounter: number
    }
    weight: {
      currentWeight: number
      maxWeight: number
    }
    coins: {
      copper: number
      silver: number
      electron: number
      gold: number
      platinum: number
    }
    itens: EquipmentProps[]
  }
  spells: SpellProps[]
  notes: {
    alignment: string
    vision: string
    languages: string[]
    notes: NotesProps[]
  }
  proficiency: {
    armor: string[]
    weapon: string[]
  }
}

export type EquipmentProps = {
  id?: string
  label: string
  bonus?: number
  damage?: string
  amount?: number
}

export type SpellProps = {
  id?: string
  circle: number
  title: string
  content?: string
}

export type NotesProps = {
  id?: string
  title: string
  content?: string
}

export type CharacterProviderProps = {
  children: JSX.Element
}

export type CharacterContextProps = {
  character: CharacterProps
  setCharacter: (props: any) => void
}

export type itemAttributeProps = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha'

export type itemSavesProps = 'death' | 'vsMagic' | 'wand' | 'paralysis' | 'breath' | 'spells'
