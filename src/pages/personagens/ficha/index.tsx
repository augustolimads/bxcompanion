import { Box, Drawer, Flex, IconButton, useDisclosure } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { CharacterSheetEditor, Layout, MainContent, MainMenu } from 'src/components'
import { CharacterSheetName } from 'src/components/CharacterSheetName'
import { PencilIcon } from 'src/components/Icons'
import { SheetContentDisplay } from 'src/components/SheetContentDisplay'
import { SheetMenuProvider } from 'src/hooks/useSheetMenu/useSheetMenu'

const Ficha: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null)
  return (
    <SheetMenuProvider>
      <Layout
        headerChildren={
          <Flex flex="1" alignItems="center">
            <CharacterSheetName />
            <IconButton
              aria-label="Search database"
              colorScheme="transparent"
              icon={<PencilIcon size="24" />}
              justifySelf="self-start"
              rounded="md"
              ref={btnRef} 
              onClick={onOpen}
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
      <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'lg'}
      >
      <CharacterSheetEditor />
      </Drawer>
    </SheetMenuProvider>
  )
}

export default Ficha
