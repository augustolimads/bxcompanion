import { Box, Flex } from '@chakra-ui/react';
import {
  Layout,
  MainContent,
  MainMenu,
  SheetContainer,
  SheetOptions
} from 'src/components';
import { CharacterSheetName } from 'src/components/CharacterSheetName';
import { SheetContentDisplay } from 'src/components/SheetContentDisplay';
import { SheetMenuProvider } from 'src/store/useSheetMenu/useSheetMenu';
import { CharacterSheetProps, useCharacterSheet } from './index';

export const CharacterSheet = (props:CharacterSheetProps) => {
  const {result} = useCharacterSheet()

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
          <SheetContainer>
            <SheetContentDisplay />
          </SheetContainer>
        </Box>
      </Layout>
    </SheetMenuProvider>
  );
}
