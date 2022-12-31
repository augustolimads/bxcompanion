import { createContext, useContext, useReducer } from 'react'
import { initialEquipmentState, sheetEquipmentsReducer } from './SheetEquipments.reducer'
import {
  EquipmentsContextProps,
  EquipmentsProviderProps
} from './SheetEquipments.types'

const SheetEquipmentsContext = createContext({})

export const SheetEquipmentsProvider = ({ children }: EquipmentsProviderProps) => {
  const [equipments, dispatch] = useReducer(sheetEquipmentsReducer, initialEquipmentState)

  return (
    <SheetEquipmentsContext.Provider value={{ equipments, dispatch }}>
      {children}
    </SheetEquipmentsContext.Provider>
  )
}

export const useEquipments = () => {
  const context = useContext(SheetEquipmentsContext) as EquipmentsContextProps
  return { ...context }
}
