import { Button } from '@chakra-ui/react'
import { MainMenuItemProps } from './index'

export const MainMenuItem = (props: MainMenuItemProps) => {
  return (
    <Button
      w="full"
      size="xs"
      fontSize="xs"
      bg="transparent"
      color="neutral.100"
      onClick={props.onClick}
      border={props.isActive ? '1px solid' : ''}
      borderColor={props.isActive ? 'neutral.100' : ''}
      _focus={{
        border: '1px solid',
        borderColor: 'neutral.100',
        bg: 'neutral.900'
      }}
    >
      {props.children}
    </Button>
  )
}
