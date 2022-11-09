import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header, Layout, MainContent, MainMenu } from 'src/components'
import { PencilIcon } from 'src/components/Icons'

const Ficha: NextPage = () => {
  return (
    <div>
      <Layout>
        <Header>
          <Flex flex="1" alignItems="center">
            <Text flex="1" textAlign="center">
              Falkor Merak
            </Text>
            <IconButton
              aria-label="Search database"
              colorScheme="transparent"
              icon={<PencilIcon size="24" />}
              justifySelf="self-start"
              rounded="md"
            />
          </Flex>
        </Header>
        <Box position="fixed" w="full" pt={16} zIndex={2} bg="neutral.700">
          <MainContent />
          <MainMenu />
        </Box>
        <Box pt={80} flex="1">
          {/* <SheetContentContainer aside={<ItemSectionAside />}>
            <ItemSection />
          </SheetContentContainer> */}
          {/* <SheetContentContainer>
            <CombatSection /> 
          </SheetContentContainer> */}
          {/* <SheetContentContainer aside={<AbilitySectionAside />}>
            <AbilitySection />
          </SheetContentContainer> */}
        </Box>
      </Layout>
    </div>
  )
}

export default Ficha
