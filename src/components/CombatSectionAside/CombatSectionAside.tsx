import { Button, Heading, IconButton, Text, VStack } from '@chakra-ui/react'
import { AcSheetEditor } from '../AcSheetEditor'
import { CombatButtonAside } from '../CombatButtonAside'
import { CombatSectionAsideGroup } from '../CombatSectionAsideGroup'
import { DiceIcon } from '../Icons'
import { Tac0SheetEditor } from '../Tac0SheetEditor'
import { CombatSectionAsideProps, useCombatSectionAside } from './index'

export const CombatSectionAside = (props: CombatSectionAsideProps) => {
  const { ac, tac0 } = useCombatSectionAside()

  return (
    <VStack w="8rem" color="white">
      <CombatSectionAsideGroup>
        <CombatButtonAside
          label="Classe de armadura"
          modalEditor={<AcSheetEditor />}
        >
          <Text fontSize="xl" fontWeight="bold">
            CA {ac}
          </Text>
        </CombatButtonAside>
      </CombatSectionAsideGroup>
      <CombatSectionAsideGroup>
        <CombatButtonAside
          h={16}
          label="To hit armor class 0"
          modalEditor={<Tac0SheetEditor />}
        >
          <VStack>
            <Text as="p" fontWeight="bold">
              Tac0
            </Text>
            <Text as="p" fontSize="xl">
              {tac0}
            </Text>
          </VStack>
        </CombatButtonAside>
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
      <IconButton
        bg="transparent"
        aria-label="dice"
        icon={<DiceIcon size="2rem" />}
      />
    </VStack>
  )
}
