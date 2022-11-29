import { useCharacter } from "src/hooks/useCharacter/useCharacter"
import { Tac0SheetEditorProps } from "./Tac0SheetEditor.types"

export const useTac0SheetEditor = () => {
    const { character, setCharacter } = useCharacter()

  const editTac0Sheet = (value: Tac0SheetEditorProps) => {
    setCharacter({
      ...character,
      combat: {
        ...character.combat,
        tac0Extra: Number(value.tac0Bonus)
      },
    })
  }

  return { character, editTac0Sheet }
}