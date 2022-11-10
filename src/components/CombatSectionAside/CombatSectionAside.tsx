import { Button, Text, VStack } from '@chakra-ui/react'
import { CombatSectionAsideGroup } from '../CombatSectionAsideGroup'
import { CombatSectionAsideProps, useCombatSectionAside } from './index'

export const CombatSectionAside = (props: CombatSectionAsideProps) => {
  const { result } = useCombatSectionAside()

  return (
    <VStack w="30vw">
      <CombatSectionAsideGroup>
        <Button size="md" w="full" fontSize="xl">
          CA 10
        </Button>
      </CombatSectionAsideGroup>
      <CombatSectionAsideGroup>
        <Button size="sm" w="full" flexDir="column" h={12}>
          <Text as="p" fontWeight="bold">
            Tac0
          </Text>
          <Text as="p" fontSize="xl">
            +1
          </Text>
        </Button>
        <Button size="sm" w="full" flexDir="column" h={12}>
          <Text as="p" fontWeight="bold">
            Tac0 corp.
          </Text>
          <Text as="p" fontSize="xl">
            +3
          </Text>
        </Button>
        <Button size="sm" w="full" flexDir="column" h={12}>
          <Text as="p" fontWeight="bold">
            Tac0 dist.
          </Text>
          <Text as="p" fontSize="xl">
            +2
          </Text>
        </Button>
      </CombatSectionAsideGroup>
      <CombatSectionAsideGroup>
        <Button size="sm" w="full" flexDir="column" h={12}>
          <Text as="p" fontWeight="bold">
            Tac0 dist.
          </Text>
          <Text as="p" fontSize="xl">
            +2
          </Text>
        </Button>
      </CombatSectionAsideGroup>
    </VStack>
  )
}
