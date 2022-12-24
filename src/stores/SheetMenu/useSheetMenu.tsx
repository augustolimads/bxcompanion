import { createContext, useContext, useReducer } from 'react'
import { initialMenuActive, sheetMenuReducer } from './SheetMenu.reducer'
import { SheetMenuProps, useSheetMenuProps } from './useSheetMenu.types'

export const SheetMenuContext = createContext({})

export const SheetMenuProvider = ({ children }: SheetMenuProps) => {
  const [sheetMenu, dispatch] = useReducer(sheetMenuReducer, initialMenuActive)

  return (
    <SheetMenuContext.Provider value={{ sheetMenu, dispatch }}>
      {children}
    </SheetMenuContext.Provider>
  )
}

export const useSheetMenu = () => {
  const context = useContext(SheetMenuContext) as useSheetMenuProps
  return { ...context }
}
