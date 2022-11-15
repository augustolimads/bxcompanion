import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay, Heading
} from '@chakra-ui/react'
import { CharacterSheetEditorProps, useCharacterSheetEditor } from './index'

export const CharacterSheetEditor = (props: CharacterSheetEditorProps) => {
  const { result } = useCharacterSheetEditor()

  return (
    <Drawer
      isOpen={props.isOpen}
      placement="bottom"
      onClose={props.onClose}
      finalFocusRef={props.btnRef}
      size={'lg'}
    >
      <DrawerOverlay />
      <DrawerContent bg="neutral.700" color="white" roundedTop="2xl">
        <DrawerHeader>
          <Heading size="lg">Edição de personagem</Heading>
        </DrawerHeader>
        <DrawerBody px="3">
          {props.children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
