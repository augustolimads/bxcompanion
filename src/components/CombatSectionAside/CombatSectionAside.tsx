import { Button, Center, Heading, Text, VStack } from '@chakra-ui/react'
import { CombatSectionAsideGroup } from '../CombatSectionAsideGroup'
import { CombatSectionAsideProps, useCombatSectionAside } from './index'

export const CombatSectionAside = (props: CombatSectionAsideProps) => {
  const { ac, tac0, meelee, range } = useCombatSectionAside()

  return (
    <VStack w="8rem" color="white">
      <CombatSectionAsideGroup>
        <Center w="full" fontSize="xl" fontWeight="bold">
          CA {ac}
        </Center>
      </CombatSectionAsideGroup>
      <CombatSectionAsideGroup>
        <Center w="full" flexDir="column" h={12}>
          <Text as="p" fontWeight="bold">
            Tac0
          </Text>
          <Text as="p" fontSize="xl">
            {tac0}
          </Text>
        </Center>
        <Center w="full" flexDir="column" h={12}>
          <Text as="p" fontWeight="bold">
            corporal
          </Text>
          <Text as="p" fontSize="xl">
            {meelee}
          </Text>
        </Center>
        <Center w="full" flexDir="column" h={12}>
          <Text as="p" fontWeight="bold">
            distância
          </Text>
          <Text as="p" fontSize="xl">
            {range}
          </Text>
        </Center>
      </CombatSectionAsideGroup>
      <CombatSectionAsideGroup>
        <Heading fontSize="md">Munição</Heading>
        <Button
          size="sm"
          w="full"
          flexDir="column"
          h={12}
          bg="neutral.900"
          color="neutral.100"
        >
          <Text as="p" fontWeight="bold">
            Flechas
          </Text>
          <Text as="p" fontSize="xl">
            20
          </Text>
        </Button>
      </CombatSectionAsideGroup>
    </VStack>
  )
}
