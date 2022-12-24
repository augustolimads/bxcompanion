import { Actions } from "./SheetMenu.enums"
import { ReducerProps } from "./useSheetMenu.types"

export const initialMenuActive = 0

export const sheetMenuReducer = (state: number, action: ReducerProps) => {
    switch (action.type) {
      case Actions.SET:
        return action.payload
      default:
        return state
    }
  }
  