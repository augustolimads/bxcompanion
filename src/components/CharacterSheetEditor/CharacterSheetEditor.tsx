import {
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import { ThreeDotsIcon } from '../Icons'
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
        <DrawerHeader display="flex" justifyContent="space-between">
          {props.hasMenu && (
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<ThreeDotsIcon />}
                variant="ghost"
                _active={{ bg: 'neutral.900' }}
                _focus={{ bg: 'neutral.900' }}
              />
              <MenuList bg="neutral.700">
                <MenuItem _focus={{ bg: 'neutral.700' }}>Duplicar</MenuItem>
                <MenuItem _focus={{ bg: 'neutral.700' }}>Deletar</MenuItem>
              </MenuList>
            </Menu>
          )}
          <Heading size="lg">{props.label}</Heading>
          <CloseButton onClick={props.onClose} />
        </DrawerHeader>
        <DrawerBody px="3">{props.children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
