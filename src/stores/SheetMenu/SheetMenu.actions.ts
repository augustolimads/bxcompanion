import { Actions } from "./SheetMenu.enums"

export const handleMenuActive = (index: number) => {
  return {
    type: Actions.SET,
    payload: index
  }
}
