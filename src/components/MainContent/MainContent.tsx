import { Box, Flex, VStack } from '@chakra-ui/react'
import { AttributeList } from '../AttributeList'
import { Hitpoint } from '../Hitpoint'
import { LevelControl } from '../LevelControl'
import { SaveList } from '../SaveList'
import { SheetContainer } from '../SheetContainer'
import { MainContentProps } from './index'

export const MainContent = (props: MainContentProps) => {
  return (
    <Box w="full">
      <SheetContainer>
        <VStack align="normal">
          <Flex justifyContent="space-between" gap={3}>
            <LevelControl />
          </Flex>
          <AttributeList />
          <SaveList />
          <Hitpoint />
        </VStack>
      </SheetContainer>
    </Box>
  )
}
