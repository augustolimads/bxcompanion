import { useCharacter } from 'src/hooks/useCharacter/useCharacter'
import { AcSheetEditorProps } from './AcSheetEditor.types'

export const useAcSheetEditor = () => {
  const { character, setCharacter } = useCharacter()

  const editACSheet = (value: AcSheetEditorProps) => {
    setCharacter({
      ...character,
      combat: {
        ...character.combat,
        ACExtra: Number(value.ACBonus)
      },
    })
  }

  return { character, editACSheet }
}
