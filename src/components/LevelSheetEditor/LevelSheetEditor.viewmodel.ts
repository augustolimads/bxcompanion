import { useCharacter } from "src/hooks/useCharacter/useCharacter"
import { levelSheetEditorForm } from "./LevelSheetEditor.types"

export const useLevelSheetEditor = () => {
    const { character, setCharacter } = useCharacter()

    const editLevelSheet = ({level, currentXP, maxXP} : levelSheetEditorForm) => {
        setCharacter({
            ...character,
            level,
            currentXP,
            maxXP
        })
    }

    return {character, editLevelSheet}
}