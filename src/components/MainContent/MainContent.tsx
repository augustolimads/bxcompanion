import { Box, Flex, VStack } from '@chakra-ui/react'
import { Attribute } from '../Attribute'
import { Hitpoint } from '../Hitpoint'
import { LevelControl } from '../LevelControl'
import { SavingThrow } from '../SavingThrow'
import { SheetContainer } from '../SheetContainer'
import { MainContentProps, useMainContent } from './index'

export const MainContent = (props: MainContentProps) => {
  const {
    str,
    dex,
    con,
    int,
    wis,
    cha,
    death,
    wand,
    paralysis,
    breath,
    spells,
    vsMagic
  } = useMainContent()

  return (
    <Box w="full">
      <SheetContainer>
        <VStack align="normal">
          <Flex justifyContent="space-between" gap={3}>
            <LevelControl />
          </Flex>
          <Flex gap={1} justify="space-between">
            <Attribute label="for" value={str} />
            <Attribute label="des" value={dex} />
            <Attribute label="con" value={con} />
            <Attribute label="int" value={int} />
            <Attribute label="sab" value={wis} />
            <Attribute label="car" value={cha} />
          </Flex>
          <Flex gap={1} justify="space-between">
            <SavingThrow label="vs magia" value={vsMagic} highLight symbol />
            <SavingThrow label="morte" value={death} />
            <SavingThrow label="varinhas" value={wand} />
            <SavingThrow label="paralisia" value={paralysis} />
            <SavingThrow label="sopro" value={breath} />
            <SavingThrow label="feitiços" value={spells} />
          </Flex>
          <Hitpoint />
        </VStack>
      </SheetContainer>
    </Box>
  )
}
