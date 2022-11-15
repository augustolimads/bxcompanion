import { Box, Flex, IconButton } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Layout, MainContent, MainMenu } from 'src/components'
import { CharacterSheetName } from 'src/components/CharacterSheetName'
import { ThreeDotsIcon } from 'src/components/Icons'
import { SheetContentDisplay } from 'src/components/SheetContentDisplay'
import { SheetMenuProvider } from 'src/hooks/useSheetMenu/useSheetMenu'

const Ficha: NextPage = () => {
  return (
    <SheetMenuProvider>
      <Layout
        headerChildren={
          <Flex flex="1" alignItems="center">
            <CharacterSheetName />
            <IconButton
              aria-label="Search database"
              colorScheme="transparent"
              icon={<ThreeDotsIcon size="24" />}
              justifySelf="self-start"
              rounded="md"
            />
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
