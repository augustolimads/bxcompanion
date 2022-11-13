import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Layout, MainContent, MainMenu } from 'src/components'
import { PencilIcon } from 'src/components/Icons'
import { SheetContentDisplay } from 'src/components/SheetContentDisplay'
import { useCharacter } from 'src/hooks/useCharacter/useCharacter'
import { SheetMenuProvider } from 'src/hooks/useSheetMenu/useSheetMenu'

const Ficha: NextPage = () => {
  const { character } = useCharacter()
  return (
    <SheetMenuProvider>
      <Layout
        headerChildren={
          <Flex flex="1" alignItems="center">
            <Text flex="1" textAlign="center">
              {character.name}
            </Text>
            <IconButton
              aria-label="Search database"
              colorScheme="transparent"
              icon={<PencilIcon size="24" />}
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
