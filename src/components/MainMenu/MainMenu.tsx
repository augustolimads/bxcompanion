import { Container, Flex } from '@chakra-ui/react'
import { actions, useSheetMenu } from 'src/stores/SheetMenu'
import { MainMenuItem } from '../MainMenuItem'
import { MainMenuProps, useMainMenu } from './index'

export const MainMenu = (props: MainMenuProps) => {
  const { menuButtons } = useMainMenu()
  const { sheetMenu, dispatch } = useSheetMenu()

  return (
    <Flex bg="neutral.900" p={1}>
      <Container display="flex" flexDir="row" gap={1}>
        {menuButtons.map((item, index) => (
          <MainMenuItem
            key={`${item}+${index}`}
            onClick={() => dispatch(actions.handleMenuActive(index))}
            isActive={sheetMenu === index}
          >
            {item}
          </MainMenuItem>
        ))}
      </Container>
    </Flex>
  )
}
