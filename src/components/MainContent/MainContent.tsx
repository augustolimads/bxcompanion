import { Box, Flex, VStack } from '@chakra-ui/react'
import { Attribute } from '../Attribute'
import { Hitpoint } from '../Hitpoint'
import { LevelControl } from '../LevelControl'
import { SavingThrow } from '../SavingThrow'
import { SheetContainer } from '../SheetContainer'
import { MainContentProps, useMainContent } from './index'

export const MainContent = (props: MainContentProps) => {
  const { result } = useMainContent()

  return (
    <Box w="full">
      <SheetContainer>
        <VStack align="normal">
          <Flex justifyContent="space-between" gap={3}>
            <LevelControl />
          </Flex>
          <Flex gap={1} justify="space-between">
            <Attribute label="for" value={12} />
            <Attribute label="des" value={12} />
            <Attribute label="con" value={12} />
            <Attribute label="int" value={12} />
            <Attribute label="sab" value={12} />
            <Attribute label="car" value={12} />
          </Flex>
          <Flex gap={1} justify="space-between">
            <SavingThrow label="vs magia" value={1} highLight symbol />
            <SavingThrow label="morte" value={2} />
            <SavingThrow label="varinhas" value={2} />
            <SavingThrow label="paralisia" value={2} />
            <SavingThrow label="sopro" value={2} />
            <SavingThrow label="feitiços" value={2} />
          </Flex>
          <Hitpoint />
        </VStack>
      </SheetContainer>
    </Box>
  )
}
