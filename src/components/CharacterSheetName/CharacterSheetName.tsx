import { Avatar, HStack, Text, useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import { CharacterSheetEditor } from '../CharacterSheetEditor'
import { NameSheetEditor } from '../NameSheetEditor'
import { CharacterSheetNameProps, useCharacterSheetName } from './index'

export const CharacterSheetName = (props: CharacterSheetNameProps) => {
  const { name, avatar } = useCharacterSheetName()
  const btnRef = useRef<HTMLParagraphElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <HStack flex='1' gap={2} ml={5} onClick={onOpen}>
      <Avatar 
        name={name}
        src={avatar}
      />
      <Text
        fontSize="md"
        textAlign="center"
        ref={btnRef}        
      >
        {name}
      </Text>
      <CharacterSheetEditor label='Edição do personagem' isOpen={isOpen} onClose={onClose} btnRef={btnRef}>
        <NameSheetEditor />
      </CharacterSheetEditor>
    </HStack>
  )
}
