import { useCharacter } from 'src/store/useCharacter/useCharacter'
import { textDelimiter } from 'src/utils/textDelimiter'

export const useCharacterSheetName = () => {
  const { character } = useCharacter()
  const formattedName = textDelimiter(character.name, 25)

  return { name: formattedName, avatar: character.avatar }
}
