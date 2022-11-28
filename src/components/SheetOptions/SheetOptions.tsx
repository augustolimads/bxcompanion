import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import { ThreeDotsIcon } from '../Icons'
import { SheetOptionsProps, useSheetOptions } from './index'

export const SheetOptions = (props: SheetOptionsProps) => {
  const { result } = useSheetOptions()

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
        <MenuItem _focus={{ bg: 'neutral.700' }}>Sincronizar ficha</MenuItem>
        <MenuItem _focus={{ bg: 'neutral.700' }}>Configurações de ficha</MenuItem>
        <MenuItem _focus={{ bg: 'neutral.700' }}>exportar ficha</MenuItem>
        <MenuItem _focus={{ bg: 'neutral.700' }}>Deletar personagem</MenuItem>
      </MenuList>
    </Menu>
  )
}
