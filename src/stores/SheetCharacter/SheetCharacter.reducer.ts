import { sheetMock } from "src/mocks/sheetMock"
import { Actions } from "./SheetCharacter.enums"
import { CharacterProps, CharacterReducerProps } from "./SheetCharacter.types"

export const initialCharacterState = sheetMock

export const sheetCharacterReducer = (state: CharacterProps, action: CharacterReducerProps) => {
    switch (action.type) {
      case Actions.EDIT_NAME_SHEET:
        return {
          ...state,
          name: action.payload.name,
          title: action.payload.title,
          avatar: action.payload.avatar
        }
      default:
        return state
    }
  }
  