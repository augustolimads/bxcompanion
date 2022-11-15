import { Text, useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import { CharacterSheetEditor } from '../CharacterSheetEditor'
import { NameSheetEditor } from '../NameSheetEditor'
import { CharacterSheetNameProps, useCharacterSheetName } from './index'

export const CharacterSheetName = (props: CharacterSheetNameProps) => {
  const { name } = useCharacterSheetName()
  const btnRef = useRef<HTMLParagraphElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Text
        fontSize="md"
        flex="1"
        textAlign="center"
        ref={btnRef}
        onClick={onOpen}
      >
        {name}
      </Text>
      <CharacterSheetEditor isOpen={isOpen} onClose={onClose} btnRef={btnRef}>
        <NameSheetEditor />
      </CharacterSheetEditor>
    </>
  )
}
