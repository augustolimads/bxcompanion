import { useCharacter } from "src/hooks/useCharacter/useCharacter"
import { NameSheetEditorForm } from "./NameSheetEditor.types"

export const useNameSheetEditor = () => {
    const { character, setCharacter } = useCharacter()

    const editNameSheet = ({name} : NameSheetEditorForm) => {
        setCharacter({
            ...character,
            name: name,
        })
    }

    return {character, editNameSheet}
}