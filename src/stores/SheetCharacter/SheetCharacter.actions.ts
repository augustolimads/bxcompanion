import { Actions } from './SheetCharacter.enums'
import { CharacterProps, EditLevelSheetProps } from './SheetCharacter.types'

export const editNameSheet = ({
  name,
  avatar,
  title
}: Partial<CharacterProps>) => {
  return {
    type: Actions.EDIT_NAME,
    payload: {
      name,
      title,
      avatar
    }
  }
}

export const editLevelSheet = (props: EditLevelSheetProps) => {
  return {
    type: Actions.EDIT_LEVEL,
    payload: {...props}
  }
}
