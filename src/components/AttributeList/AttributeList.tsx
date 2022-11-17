import { Flex } from '@chakra-ui/react'
import { useCharacter } from 'src/hooks/useCharacter/useCharacter'
import { Attribute } from '../Attribute/Attribute'
import { AttributeListProps, useAttributeList } from './index'

export const AttributeList = (props: AttributeListProps) => {
  const { result } = useAttributeList()
  const { character } = useCharacter()

  return (
    <Flex gap={1} justify="space-between">
      {character.attr.map((item) => (
        <Attribute
          abbreviate={item.abbreviate}
          label={item.label}
          value={item.value}
          attrRef={item.ref}
        />
      ))}
    </Flex>
  )
}
