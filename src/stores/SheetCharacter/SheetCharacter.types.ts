import { EquipmentProps } from "../SheetEquipments/SheetEquipments.types"

export type CharacterProps = {
  id?: string
  avatar?: string
  name: string
  title?: string
  charClass: string
  level: LevelProps
  attr: AttributeProps
  saves: SaveProps
  hp: HitpointProps
  combat: CombatProps
  itens: {
    coins: CoinProps
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

export type LevelProps = {
  value: number
  currentXP: number
  maxXP: number
  xpBonus: number
}

export type AttributeProps = {
  str: number
  dex: number
  con: number
  int: number
  wis: number
  cha: number
}

export type SaveProps = {
  vsMagic: number
  death: number
  wand: number
  paralysis: number
  breath: number
  spells: number
}

export type HitpointProps = {
  hd: number
  current: number
  max: number
}

export type CombatProps = {
  AC: number
  ACBonus: number
  tac0: number
  tac0Extra: number
}

export type CoinProps = {
  copper: number
  silver: number
  electron: number
  gold: number
  platinum: number
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
  dispatch: any
}

export type itemAttributeProps = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha'

export type itemSavesProps =
  | 'death'
  | 'vsMagic'
  | 'wand'
  | 'paralysis'
  | 'breath'
  | 'spells'


export type CharacterReducerProps = {
  type: string
  payload: any
}

export type EditLevelSheetProps = {
  level: LevelProps['value']
  currentXP: LevelProps['currentXP']
  maxXP: LevelProps['maxXP']
  charClass: CharacterProps['charClass']
}

export type EditACProps = {
  ACBonus: CombatProps['ACBonus']
}

export type EditTAC0Props = {
  tac0: CombatProps['tac0']
}

