import { Flex, useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import { useCharacter } from 'src/hooks/useCharacter/useCharacter'
import { Attribute } from '../Attribute/Attribute'
import { AttributeListEditor } from '../AttributeListEditor'
import { CharacterSheetEditor } from '../CharacterSheetEditor'
import { AttributeListProps, useAttributeList } from './index'

export const AttributeList = (props: AttributeListProps) => {
  const { result } = useAttributeList()
  const btnRef = useRef<HTMLDivElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { character } = useCharacter()

  return (
    <>
      <Flex gap={1} justify="space-between" ref={btnRef} onClick={onOpen}>
        {character.attr.map((item) => (
          <Attribute label={item.abbreviate} value={item.value} />
        ))}
      </Flex>
      <CharacterSheetEditor
        label="Edição de atributos"
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
      >
        <AttributeListEditor />
      </CharacterSheetEditor>
    </>
  )
}
