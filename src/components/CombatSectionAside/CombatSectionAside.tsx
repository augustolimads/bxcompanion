import { Button, Center, Heading, Text, VStack } from '@chakra-ui/react'
import { CombatSectionAsideGroup } from '../CombatSectionAsideGroup'
import { CombatSectionAsideProps, useCombatSectionAside } from './index'

export const CombatSectionAside = (props: CombatSectionAsideProps) => {
  const { result } = useCombatSectionAside()

  return (
    <VStack w="8rem" color="white">
      <CombatSectionAsideGroup>
        <Center w="full" fontSize="xl" fontWeight="bold">
          CA 10
        </Center>
      </CombatSectionAsideGroup>
      <CombatSectionAsideGroup>
        <Center w="full" flexDir="column" h={12}>
          <Text as="p" fontWeight="bold">
            Tac0
          </Text>
          <Text as="p" fontSize="xl">
            +1
          </Text>
        </Center>
        <Center w="full" flexDir="column" h={12}>
          <Text as="p" fontWeight="bold">
            corporal
          </Text>
          <Text as="p" fontSize="xl">
            +3
          </Text>
        </Center>
        <Center w="full" flexDir="column" h={12}>
          <Text as="p" fontWeight="bold">
            distância
          </Text>
          <Text as="p" fontSize="xl">
            +2
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
