import { useForm } from 'react-hook-form'
import { actions, useCharacter } from 'src/stores/SheetCharacter'
import { EditLevelSheetProps } from 'src/stores/SheetCharacter/SheetCharacter.types'

export const useLevelSheetEditor = () => {
  const { character, dispatch } = useCharacter()

  const editLevelSheet = (props: EditLevelSheetProps ) => {
    dispatch(actions.editLevelSheet(props))
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      charClass: character.class,
      level: character.level.value,
      currentXP: character.level.currentXP,
      maxXP: character.level.maxXP,
      xpBonus: character.level.xpBonus
    }
  })

  return {
    character,
    editLevelSheet,
    handleSubmit,
    register,
    errors,
    isSubmitting
  }
}
