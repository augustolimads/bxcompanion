import { sheetMock } from 'src/mocks/sheetMock'
import { Actions } from './SheetCharacter.enums'
import { CharacterProps, CharacterReducerProps } from './SheetCharacter.types'

export const initialCharacterState = sheetMock

export const sheetCharacterReducer = (
  state: CharacterProps,
  action: CharacterReducerProps
) => {
  switch (action.type) {
    case Actions.EDIT_NAME:
      return {
        ...state,
        name: action.payload.name,
        title: action.payload.title,
        avatar: action.payload.avatar
      }
    case Actions.EDIT_LEVEL:
      return {
        ...state,
        charClass: action.payload.charClass,
        level: {
          ...state.level,
          value: action.payload.level,
          currentXP: action.payload.currentXP,
          maxXP: action.payload.maxXP,
          xpBonus: action.payload.xpBonus
        }
      }
    case Actions.EDIT_ATTRIBUTE:
      return {
        ...state,
        attr: {
          str: action.payload.str,
          dex: action.payload.dex,
          con: action.payload.con,
          int: action.payload.int,
          wis: action.payload.wis,
          cha: action.payload.cha
        }
      }
    case Actions.EDIT_SAVES:
      return {
        ...state,
        saves: {
          vsMagic: action.payload.vsMagic,
          death: action.payload.death,
          wand: action.payload.wand,
          paralysis: action.payload.paralysis,
          breath: action.payload.breath,
          spells: action.payload.spells
        }
      }
    case Actions.EDIT_HP:
      return {
        ...state,
        hp: {
          hd: action.payload.hd,
          current: action.payload.current,
          max: action.payload.max
        }
      }
    case Actions.INCREASE_HITPOINT:
      return {
        ...state,
        hp: {
          ...state.hp,
          current: state.hp.current + 1
        }
      }
    case Actions.DECREASE_HITPOINT:
      return {
        ...state,
        hp: {
          ...state.hp,
          current: state.hp.current - 1
        }
      }
    case Actions.EDIT_AC:
      return {
        ...state,
        combat: {
          ...state.combat,
          ACBonus: action.payload.ACBonus
        }
      }
    case Actions.EDIT_TAC0:
      return {
        ...state,
        combat: {
          ...state.combat,
          tac0: action.payload.tac0
        }
      }
    case Actions.DECREASE_AMMO:
      const listEquipment = state.itens.itemList
      const ammoElement = listEquipment.find(
        (el) => el.id === action.payload.id
      )
      const actualAmount = ammoElement?.amount || 0

      const ammoIndex = listEquipment.findIndex(
        (el) => el.id === action.payload.id
      )
      return {
        ...state,
        ...(listEquipment[ammoIndex] = {
          ...listEquipment[ammoIndex],
          amount: actualAmount - 1
        })
      }
    case Actions.CREATE_ITEM:
      const itemList = state.itens.itemList
      itemList.push(action.payload.newEquipment)
      return {
        ...state,
        ...(state.itens.itemList = itemList)
      }
    case Actions.EDIT_ITEM:
      const equipmentList = state.itens.itemList
      const equipIndex = equipmentList.findIndex(
        (el) => el.id === action.payload.values.equipId
      )
      const amount = Number(action.payload.values?.amount) || 1
      return {
        ...state,
        ...(equipmentList[equipIndex] = {
          ...action.payload.values,
          amount,
          id: action.payload.values.equipmentSlug
        })
      }
    default:
      return state
  }
}
