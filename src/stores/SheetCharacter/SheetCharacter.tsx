import { createContext, useContext, useReducer } from 'react'
import { initialCharacterState, sheetCharacterReducer } from './SheetCharacter.reducer'
import {
  CharacterContextProps,
  CharacterProviderProps
} from './SheetCharacter.types'

const SheetCharacterContext = createContext({})

export const SheetCharacterProvider = ({ children }: CharacterProviderProps) => {
  const [character, dispatch] = useReducer(sheetCharacterReducer, initialCharacterState)

  return (
    <SheetCharacterContext.Provider value={{ character, dispatch }}>
      {children}
    </SheetCharacterContext.Provider>
  )
}

export const useCharacter = () => {
  const context = useContext(SheetCharacterContext) as CharacterContextProps
  return { ...context }
}
