import {
  Button,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spacer,
  VStack
} from '@chakra-ui/react'
import { CharacterSheetEditorProps, useCharacterSheetEditor } from './index'

export const CharacterSheetEditor = (props: CharacterSheetEditorProps) => {
  const { result } = useCharacterSheetEditor()

  return (
    <>
      <DrawerOverlay />
      <DrawerContent bg="neutral.700" color="white" roundedTop="2xl">
        <DrawerHeader>
          <Heading size="lg">Edição de personagem</Heading>
        </DrawerHeader>
        <DrawerBody px="3">
          <VStack as="form" align="left">
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input placeholder="Nome do personagem" />
            </FormControl>
            <FormControl>
              <FormLabel>Classe</FormLabel>
              <Input placeholder="Nome do personagem" />
            </FormControl>
            <Spacer  />
            <Button bg="neutral.900" color="neutral.100">
              Confirmar
            </Button>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </>
  )
}
