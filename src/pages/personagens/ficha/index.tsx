import { Box, Flex, IconButton, useDisclosure } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useRef } from 'react'
import {
  CharacterSheetEditor,
  Layout,
  MainContent,
  MainMenu
} from 'src/components'
import { CharacterSheetName } from 'src/components/CharacterSheetName'
import { PencilIcon } from 'src/components/Icons'
import { NameSheetEditor } from 'src/components/NameSheetEditor'
import { SheetContentDisplay } from 'src/components/SheetContentDisplay'
import { SheetMenuProvider } from 'src/hooks/useSheetMenu/useSheetMenu'

const Ficha: NextPage = () => {
  const btnRef = useRef<HTMLButtonElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

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
      <CharacterSheetEditor isOpen={isOpen} onClose={onClose} btnRef={btnRef}>
        <NameSheetEditor />
      </CharacterSheetEditor>
    </SheetMenuProvider>
  )
}

export default Ficha
