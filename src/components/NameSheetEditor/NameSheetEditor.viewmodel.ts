import { useCharacter } from "src/hooks/useCharacter/useCharacter"
import { NameSheetEditorForm } from "./NameSheetEditor.types"

export const useNameSheetEditor = () => {
    const { character, setCharacter } = useCharacter()

    const editNameSheet = ({name, charClass} : NameSheetEditorForm) => {
        setCharacter({
            ...character,
            name: name,
            class: charClass
        })
    }

    return {character, editNameSheet}
}