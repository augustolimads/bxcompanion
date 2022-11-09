import { Drawer, Flex, IconButton } from '@chakra-ui/react';
import { HeaderDrawer } from '../HeaderDrawer';
import { MenuIcon } from '../Icons';
import { HeaderProps, useHeader } from './index';

export const Header = ({children}: HeaderProps) => {
 const {isOpen, onClose, onOpen, btnRef} = useHeader()

  return (
    <Flex
      as="header"
      bg='neutral.900'
      w='full'
      px={6}
      py={3}
      color='white'
      alignItems='center'
      position="fixed"
      zIndex={3}
    >
      <IconButton
        aria-label='Search database'
        ref={btnRef}
        colorScheme='transparent'
        onClick={onOpen}
        icon={<MenuIcon size='24' />}
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
