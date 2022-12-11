import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
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
      title: character.title,
      avatar: character.avatar
    }
  })

  return (
    <VStack as="form" align="left" onSubmit={handleSubmit(editNameSheet)}>
      <Image
        alignSelf='center'
        boxSize='150px'
        objectFit='cover'
        src={character.avatar}
        alt={character.name}
        fallbackSrc='https://via.placeholder.com/150'
      />
      <FormControl>
        <FormLabel htmlFor="avatar">(URL) Avatar do personagem</FormLabel>
        <Input
          id="avatar"
          placeholder="URL do avatar do personagem"
          {...register('avatar')}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && (
          <FormErrorMessage>{errors.name.message}</FormErrorMessage>
        )}
      </FormControl>
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
      <FormControl>
        <FormLabel htmlFor="title">Título do personagem</FormLabel>
        <Input
          id="title"
          placeholder="Título do personagem"
          {...register('title')}
          aria-invalid={errors.title ? 'true' : 'false'}
        />
        {errors.title && (
          <FormErrorMessage>{errors.title.message}</FormErrorMessage>
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
