import { Drawer, Flex, IconButton } from '@chakra-ui/react';
import { HeaderDrawer } from '../HeaderDrawer';
import { MenuIcon } from '../Icons';
import { HeaderProps, useHeader } from './index';

export const Header = ({children}: HeaderProps) => {
 const {isOpen, onClose, onOpen, btnRef} = useHeader()

  return (
    <Flex
      as="header"
      bg='gray.700'
      w='full'
      p={6}
      color='white'
      alignItems='center'
    >
      <IconButton
        aria-label='Search database'
        ref={btnRef}
        colorScheme='transparent'
        onClick={onOpen}
        icon={<MenuIcon size='24'/>}
        justifySelf="self-start"
      />
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <HeaderDrawer />
      </Drawer>
      {children}
    </Flex>
  );
}
