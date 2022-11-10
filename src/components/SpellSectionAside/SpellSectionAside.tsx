import { Button, Text, VStack } from '@chakra-ui/react'
import { SpellSectionAsideProps, useSpellSectionAside } from './index'

export const SpellSectionAside = (props: SpellSectionAsideProps) => {
  const { result } = useSpellSectionAside()

  return (
    <VStack color="neutral.100" mb={2}>
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
    </VStack>
  )
}
