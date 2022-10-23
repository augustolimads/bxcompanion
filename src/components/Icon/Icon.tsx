import { Icon as ChakraIcon } from '@chakra-ui/react';
import { MdOutlineMenu, MdSettings } from 'react-icons/md';
import { IconProps } from './index';

export const Icon = (props:IconProps) => {

  const resolveIcon = () => {
    switch (props.as) {
      case "menu":
        return MdOutlineMenu;
        default:
          return MdSettings
    }
  }

  return <ChakraIcon w={6} h={6} as={resolveIcon()} />
}
