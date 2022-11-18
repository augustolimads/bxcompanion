import { useCharacter } from 'src/hooks/useCharacter/useCharacter'
import { EditSaveProps } from './SaveListEditor.types'

export const useSaveListEditor = () => {
  const { character, setCharacter } = useCharacter()
  const editSaveSheet = (values: EditSaveProps) => {
    setCharacter({
      ...character,
      saves: character.saves.map((el) => ({
        ...el,
        value: values[`${el.ref}`]
      }))
    })
  }
  return { character, editSaveSheet }
}
