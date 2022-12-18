import { Container, Flex } from '@chakra-ui/react'
import { useSheetMenu } from 'src/store/useSheetMenu/useSheetMenu'
import { MainMenuItem } from '../MainMenuItem'
import { MainMenuProps, useMainMenu } from './index'

export const MainMenu = (props: MainMenuProps) => {
  const { menuButtons } = useMainMenu()
  const { handleMenuActive, menuActive } = useSheetMenu()

  return (
    <Flex bg="neutral.900" p={1}>
      <Container display="flex" flexDir="row" gap={1}>
        {menuButtons.map((item, index) => (
          <MainMenuItem
            key={`${item}+${index}`}
            onClick={() => handleMenuActive(index)}
            isActive={menuActive === index}
          >
            {item}
          </MainMenuItem>
        ))}
      </Container>
    </Flex>
  )
}
