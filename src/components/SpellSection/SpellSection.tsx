import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import { SimpleNote } from '../SimpleNote'
import { SpellSectionProps, useSpellSection } from './index'

export const SpellSection = (props: SpellSectionProps) => {
  const { result } = useSpellSection()

  return (
    <VStack w="full">
      <HStack color="neutral.100">
        <Text>Círculo</Text>
        <Button size="sm" bg="neutral.500">
          1º
        </Button>
        <Button size="sm" bg="neutral.500">
          2º
        </Button>
        <Button size="sm" bg="neutral.500">
          3º
        </Button>
        <Button size="sm" bg="neutral.500">
          4º
        </Button>
        <Button size="sm" bg="neutral.500">
          5º
        </Button>
        <Button size="sm" bg="neutral.500">
          6º
        </Button>
      </HStack>
      <VStack w="full">
        <SimpleNote 
          title='teste'
          content="ui"
        />
        <SimpleNote 
          title='teste'
          content="ui"
        />
        <SimpleNote 
          title='teste'
          content="ui"
        />
      </VStack>
    </VStack>
  )
}
