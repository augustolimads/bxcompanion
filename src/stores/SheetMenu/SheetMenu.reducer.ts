import { Actions, Areas } from "./SheetMenu.enums"
import { ReducerProps } from "./useSheetMenu.types"

export const initialMenuActive = Areas.COMBAT

export const sheetMenuReducer = (state: number, action: ReducerProps) => {
    switch (action.type) {
      case Actions.SET:
        return action.payload
      default:
        return state
    }
  }
  