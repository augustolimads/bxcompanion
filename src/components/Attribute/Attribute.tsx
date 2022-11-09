import { Box, Flex, Text } from '@chakra-ui/react'
import { AttributeProps, useAttribute } from './index'

export const Attribute = (props: AttributeProps) => {
  const { result } = useAttribute()

  return (
    <Box
      border="1px"
      borderColor="neutral.500"
      rounded="md"
      w="full"
      maxW={16}
      color="neutral.100"
    >
      <Flex>
        <Text
          as="span"
          flex="1"
          textAlign="center"
          fontSize="xs"
          color="neutral.300"
        >
          {props.label}
        </Text>
        <Text
          as="span"
          borderLeft="1px"
          borderBottom="1px"
          borderColor="neutral.500"
          fontSize="xs"
          p={1}
        >
          +{1}
        </Text>
      </Flex>
      <Text as="p" fontSize="xl" textAlign="center" w="100%">
        {props.value}
      </Text>
    </Box>
  )
}
