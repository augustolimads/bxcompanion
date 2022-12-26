import { actions, useCharacter } from "src/stores/SheetCharacter"
import { EditTAC0Props } from "src/stores/SheetCharacter/SheetCharacter.types"

export const useTac0SheetEditor = () => {
    const { character, dispatch } = useCharacter()

  const editTac0Sheet = (value: EditTAC0Props) => {
    const ConvertedValue = {
      tac0: Number(value.tac0)
    }
    dispatch(actions.editTAC0(ConvertedValue))
  }

  return { character, editTac0Sheet }
}
