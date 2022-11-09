import { Flex, IconButton, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header, Layout, MainContent, MainMenu } from 'src/components'
import { PencilIcon } from 'src/components/Icons'
import { SheetContainer } from 'src/components/SheetContainer'

const Ficha: NextPage = () => {
  return (
    <div>
      <Layout>
        <Header>
          <Flex flex="1" alignItems="center">
            <Text flex="1" textAlign="center">
              Guerreiro neutro
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
        <SheetContainer>
          <MainContent />
        </SheetContainer>
        <MainMenu />
        <SheetContainer>{/* componente de conteudo */}</SheetContainer>
      </Layout>
    </div>
  )
}

export default Ficha
