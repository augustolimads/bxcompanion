import { useCharacter } from "src/store/useCharacter/useCharacter"
import { Tac0SheetEditorProps } from "./Tac0SheetEditor.types"

export const useTac0SheetEditor = () => {
    const { character, setCharacter } = useCharacter()

  const editTac0Sheet = (value: Tac0SheetEditorProps) => {
    setCharacter({
      ...character,
      combat: {
        ...character.combat,
        tac0: Number(value.tac0)
      },
    })
  }

  return { character, editTac0Sheet }
}
