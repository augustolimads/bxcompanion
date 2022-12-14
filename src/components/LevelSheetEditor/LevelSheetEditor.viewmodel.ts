import { useCharacter } from 'src/hooks/useCharacter/useCharacter'
import { levelSheetEditorForm } from './LevelSheetEditor.types'

export const useLevelSheetEditor = () => {
  const { character, setCharacter } = useCharacter()

  const editLevelSheet = ({
    level,
    currentXP,
    maxXP,
    charClass,
    xpBonus
  }: levelSheetEditorForm) => {
    setCharacter({
      ...character,
      class: charClass,
      level: {
        ...character.level,
        value: level,
        currentXP,
        maxXP,
        xpBonus
      }
    })
  }

  return { character, editLevelSheet }
}
