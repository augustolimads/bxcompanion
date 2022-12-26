import { actions, useCharacter } from 'src/stores/SheetCharacter'
import { EditACProps } from 'src/stores/SheetCharacter/SheetCharacter.types'

export const useAcSheetEditor = () => {
  const { character, dispatch } = useCharacter()

  const editACSheet = (value: EditACProps) => {
    dispatch(actions.editAC(value))
  }

  return { character, editACSheet }
}
