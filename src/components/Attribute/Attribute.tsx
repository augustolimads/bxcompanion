import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import { AttributeListEditor } from '../AttributeListEditor'
import { CharacterSheetEditor } from '../CharacterSheetEditor'
import { AttributeProps, useAttribute } from './index'

export const Attribute = (props: AttributeProps) => {
  const { modifier, isPositive } = useAttribute(props.value)
  const btnRef = useRef<HTMLDivElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box
        border="1px"
        borderColor="neutral.500"
        rounded="md"
        w="full"
        maxW={16}
        color="neutral.100"
        ref={btnRef}
        onClick={onOpen}
      >
        <Flex>
          <Text
            as="span"
            flex="1"
            textAlign="center"
            fontSize="xs"
            color="neutral.300"
          >
            {props.abbreviate}
          </Text>
          <Text
            as="span"
            borderLeft="1px"
            borderBottom="1px"
            borderColor="neutral.500"
            fontSize="xs"
            p={1}
          >
            {isPositive}
            {modifier}
          </Text>
        </Flex>
        <Text as="p" fontSize="xl" textAlign="center" w="100%">
          {props.value}
        </Text>
      </Box>
      <CharacterSheetEditor
        label={`Edição de ${props.label}`}
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
      >
        <AttributeListEditor attrRef={props.attrRef} label={props.label} />
      </CharacterSheetEditor>
    </>
  )
}
