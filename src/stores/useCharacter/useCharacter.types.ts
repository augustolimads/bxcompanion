export type CharacterProps = {
  id?: string
  avatar?: string
  name: string
  title?: string
  class: string
  level: {
    value: number
    currentXP: number
    maxXP: number
    xpBonus: number
  }
  attr: {
    str: number
    dex: number
    con: number
    int: number
    wis: number
    cha: number
  }
  saves: {
    vsMagic: number
    death: number
    wand: number
    paralysis: number
    breath: number
    spells: number
  }
  hp: {
    hd: number
    current: number
    max: number
  }
  combat: {
    AC: number
    ACBonus: number
    tac0: number
    tac0Extra: number
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
    itemList: EquipmentProps[]
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
  equipped?: boolean
  type: EquipTypeProps
  label: string
  TAC0Bonus?: number
  ACBonus?: number
  damage?: string
  amount?: number
  description?: string
  weight?: number
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

export type itemSavesProps =
  | 'death'
  | 'vsMagic'
  | 'wand'
  | 'paralysis'
  | 'breath'
  | 'spells'

export type EquipTypeProps = 'weapon' | 'armor' | 'ammo' | 'item'
