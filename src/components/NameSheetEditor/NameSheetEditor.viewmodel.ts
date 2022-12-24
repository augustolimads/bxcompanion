import { useCharacter } from "src/stores/useCharacter/useCharacter"
import { NameSheetEditorForm } from "./NameSheetEditor.types"

export const useNameSheetEditor = () => {
    const { character, setCharacter } = useCharacter()

    const editNameSheet = ({name, avatar, title} : NameSheetEditorForm) => {
        setCharacter({
            ...character,
            name,
            title,
            avatar
        })
    }

    return {character, editNameSheet}
}
