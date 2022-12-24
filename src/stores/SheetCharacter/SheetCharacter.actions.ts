import { Actions } from "./SheetCharacter.enums"
import { CharacterProps } from "./SheetCharacter.types"

export const editNameSheet = ({name, avatar, title}: Partial<CharacterProps>) => {
    return {
        type: Actions.EDIT_NAME_SHEET,
        payload: {
            name,
            title,
            avatar
        }
    }
}