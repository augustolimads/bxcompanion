import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  VStack
} from '@chakra-ui/react'
import { useCharacter } from 'src/hooks/useCharacter/useCharacter'
import { NameSheetEditorProps, useNameSheetEditor } from './index'

export const NameSheetEditor = (props: NameSheetEditorProps) => {
  const { result } = useNameSheetEditor()
  const { character } = useCharacter()

  return (
    <VStack as="form" align="left">
      <FormControl>
        <FormLabel>Nome</FormLabel>
        <Input placeholder="Nome do personagem" value={character.name} />
      </FormControl>
      <FormControl>
        <FormLabel>Classe</FormLabel>
        <Input placeholder="Nome do personagem" value={character.class} />
      </FormControl>
      <Spacer />
      <Button bg="neutral.900" color="neutral.100">
        Confirmar
      </Button>
    </VStack>
  )
}
