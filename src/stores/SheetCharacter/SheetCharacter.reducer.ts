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
        class: action.payload.charClass,
        level: {
          ...state.level,
          value: action.payload.level,
          currentXP: action.payload.currentXP,
          maxXP: action.payload.maxXP,
          xpBonus: action.payload.xpBonus
        }
      }
    default:
      return state
  }
}
