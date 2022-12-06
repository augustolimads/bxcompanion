import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Spacer,
  VStack
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { NameSheetEditorProps, useNameSheetEditor } from './index'

export const NameSheetEditor = (props: NameSheetEditorProps) => {
  const { editNameSheet, character } = useNameSheetEditor()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      name: character.name,
    }
  })

  return (
    <VStack as="form" align="left" onSubmit={handleSubmit(editNameSheet)}>
      <FormControl>
        <FormLabel htmlFor="name">Nome do personagem</FormLabel>
        <Input
          id="name"
          placeholder="Nome do personagem"
          {...register('name')}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && (
          <FormErrorMessage>{errors.name.message}</FormErrorMessage>
        )}
      </FormControl>

      <Spacer />
      <Button
        bg="neutral.900"
        color="neutral.100"
        type="submit"
        isLoading={isSubmitting}
      >
        Confirmar
      </Button>
    </VStack>
  )
}
