import { useCharacter } from 'src/hooks/useCharacter/useCharacter'

export const useCharacterSheetName = () => {
  //35 caracteres
  const { character } = useCharacter()
  const name = character.name
  const nameLength = name.length
  return { name }
}
