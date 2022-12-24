import { useForm } from 'react-hook-form'
import { actions, useCharacter } from 'src/stores/SheetCharacter'
import { CharacterProps } from 'src/stores/SheetCharacter/SheetCharacter.types'

export const useNameSheetEditor = () => {
  const { character, dispatch } = useCharacter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      name: character?.name || '',
      title: character?.title || '',
      avatar: character?.avatar || ''
    }
  })

  const editNameSheet = (props: Partial<CharacterProps>) => {
    dispatch(actions.editNameSheet(props))
  }

  const avatar = character?.avatar || ''
  const name = character?.name || ''

  return {
    avatar,
    name,
    register,
    errors,
    isSubmitting,
    handleSubmit,
    editNameSheet
  }
}
