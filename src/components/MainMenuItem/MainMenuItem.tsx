import { Button } from '@chakra-ui/react'
import { MainMenuItemProps, useMainMenuItem } from './index'

export const MainMenuItem = (props: MainMenuItemProps) => {
  const { result } = useMainMenuItem()

  return (
    <Button
      w="full"
      size="xs"
      fontSize="xs"
      bg="transparent"
      color="neutral.100"
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}
