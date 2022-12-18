import { createContext, useContext, useState } from 'react'
import {
    MenuActiveStateProps,
    SheetMenuContextProps,
    SheetMenuProps
} from './useSheetMenu.types'

const SheetMenuContext = createContext({})

export const SheetMenuProvider = ({ children }: SheetMenuProps) => {
  const [menuActive, setMenuActive] = useState<MenuActiveStateProps>(0)

  const handleMenuActive = (index: number) => {
    setMenuActive(index)
  }

  return (
    <SheetMenuContext.Provider value={{ handleMenuActive, menuActive }}>
      {children}
    </SheetMenuContext.Provider>
  )
}

export const useSheetMenu = () => {
  const { handleMenuActive, menuActive } = useContext(
    SheetMenuContext
  ) as SheetMenuContextProps

  return { handleMenuActive, menuActive }
}
