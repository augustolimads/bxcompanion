import { HStack, Text, VStack } from '@chakra-ui/react'
import { AttributeModifierItemProps, useAttributeModifierItem } from './index'

export const AttributeModifierItem = (props: AttributeModifierItemProps) => {
  const { attrMod, attrValue } = useAttributeModifierItem(props.attrRef)

  return (
    <VStack flex="1" align="left">
      <HStack>
        <Text fontWeight="bold" minW="200px">
          Modificador
        </Text>
        <Text>{attrMod}</Text>
      </HStack>
      {props.attrData.map((item) => (
        <HStack>
          <Text fontWeight="bold" minW="200px">
            {item.label}
          </Text>
          <Text>{item.value}</Text>
        </HStack>
      ))}
    </VStack>
  )
}
