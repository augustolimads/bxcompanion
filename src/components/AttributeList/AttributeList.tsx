import { Flex } from '@chakra-ui/react'
import { Attribute } from '../Attribute/Attribute'
import { AttributeListProps, useAttributeList } from './index'

export const AttributeList = (props: AttributeListProps) => {
  const { attrList } = useAttributeList()

  return (
    <Flex gap={1} justify="space-between">
      {attrList.map((item) => (
        <Attribute
          key={item.id}
          abbreviate={item.abbreviate}
          label={item.label}
          value={item.value}
          attrRef={item.id}
        />
      ))}
    </Flex>
  )
}
