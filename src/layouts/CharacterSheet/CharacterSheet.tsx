import { Box, Flex } from '@chakra-ui/react'
import {
  Layout,
  MainContent,
  MainMenu,
  SheetContainer,
  SheetOptions
} from 'src/components'
import { CharacterSheetName } from 'src/components/CharacterSheetName'
import { SheetContentDisplay } from 'src/components/SheetContentDisplay'
import { SheetCharacterProvider } from 'src/stores/SheetCharacter'
import { SheetMenuProvider } from 'src/stores/SheetMenu'
import { CharacterSheetProps } from './index'

export const CharacterSheet = (props: CharacterSheetProps) => {
  return (
    <SheetCharacterProvider>
      <SheetMenuProvider>
        <Layout
          headerChildren={
            <Flex flex="1" alignItems="center">
              <CharacterSheetName />
              <SheetOptions />
            </Flex>
          }
        >
          <Box position="fixed" w="full" zIndex={2} bg="neutral.700">
            <MainContent />
            <MainMenu />
          </Box>
          <Box pt="16rem">
            <SheetContainer>
              <SheetContentDisplay />
            </SheetContainer>
          </Box>
        </Layout>
      </SheetMenuProvider>
    </SheetCharacterProvider>
  )
}
