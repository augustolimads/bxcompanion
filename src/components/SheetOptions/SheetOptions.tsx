import {
  IconButton,
  Menu,
  MenuButton, MenuList
} from '@chakra-ui/react'
import { ThreeDotsIcon } from '../Icons'
import { OptionMenu } from '../OptionMenu'
import { SheetOptionsProps } from './index'

export const SheetOptions = (props: SheetOptionsProps) => {

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<ThreeDotsIcon />}
        variant="ghost"
        _active={{ bg: 'neutral.900' }}
        _focus={{ bg: 'neutral.900' }}
      />
      <MenuList bg="neutral.700">
        <OptionMenu label='Sincronizar ficha' />
        <OptionMenu label='Configurações de ficha' />
        <OptionMenu label='Exportar ficha' />
        <OptionMenu label='Deletar personagem' />
      </MenuList>
    </Menu>
  )
}
