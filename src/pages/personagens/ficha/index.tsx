import { Box, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Layout, MainContent, MainMenu, SheetOptions } from 'src/components'
import { CharacterSheetName } from 'src/components/CharacterSheetName'
import { SheetContentDisplay } from 'src/components/SheetContentDisplay'
import { SheetMenuProvider } from 'src/hooks/useSheetMenu/useSheetMenu'

const Ficha: NextPage = () => {
  return (
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
          <SheetContentDisplay />
        </Box>
      </Layout>
    </SheetMenuProvider>
  )
}

export default Ficha
