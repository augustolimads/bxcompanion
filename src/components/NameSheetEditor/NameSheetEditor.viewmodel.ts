import { useForm } from 'react-hook-form'
import { useCharacter } from 'src/stores/SheetCharacter'

export const useNameSheetEditor = () => {
  const { character } = useCharacter()
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

  const avatar = character?.avatar || ''
  const name = character?.name || ''

  return { avatar, name, handleSubmit, register, errors, isSubmitting }
}
