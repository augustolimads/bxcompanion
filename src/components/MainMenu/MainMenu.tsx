import { Container, Flex } from '@chakra-ui/react'
import { MainMenuItem } from '../MainMenuItem'
import { MainMenuProps, useMainMenu } from './index'

export const MainMenu = (props: MainMenuProps) => {
  const { result } = useMainMenu()

  return (
    <Flex bg="neutral.900" p={1}>
      <Container display="flex" flexDir="row" gap={1}>
        <MainMenuItem>Combate</MainMenuItem>
        <MainMenuItem>Itens</MainMenuItem>
        <MainMenuItem>Características</MainMenuItem>
        <MainMenuItem>Magias</MainMenuItem>
        <MainMenuItem>Notas</MainMenuItem>
      </Container>
    </Flex>
  )
}
