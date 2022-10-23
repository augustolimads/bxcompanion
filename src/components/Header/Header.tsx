import { Center, Drawer, Grid, IconButton } from '@chakra-ui/react';
import { HeaderDrawer } from '../HeaderDrawer';
import { Icon } from '../Icon';
import { HeaderProps, useHeader } from './index';

export const Header = ({children}: HeaderProps) => {
 const {isOpen, onClose, onOpen, btnRef} = useHeader()

  return (
    <Grid
      templateColumns='repeat(3, 1fr)'
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
        icon={<Icon as="menu" />}
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
      <Center>
        {children}
      </Center>
    </Grid>
  );
}
