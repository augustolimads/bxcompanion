import { createContext, useContext, useState } from 'react'
import { sheetMock } from 'src/data/sheetMock'
import {
  CharacterContextProps,
  CharacterProps,
  CharacterProviderProps
} from './useCharacter.types'

const CharacterContext = createContext({})

export const CharacterProvider = ({ children }: CharacterProviderProps) => {
  const [character, setCharacter] = useState<CharacterProps>(sheetMock)

  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  )
}

export const useCharacter = () => {
  const { character, setCharacter } = useContext(CharacterContext) as CharacterContextProps
  return { character, setCharacter }
}
