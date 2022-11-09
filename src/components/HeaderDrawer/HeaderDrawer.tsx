import { Center, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react';
import { DrawerLink } from '../index';
import { Logo } from '../Logo';

export const HeaderDrawer = () => {

  return (
    <>
      <DrawerOverlay />
      <DrawerContent bg='neutral.900' color='white'>
        <DrawerHeader bgImage='url("/images/drawer-image.jpg")' minHeight='180px'>
          <Center height='100%'>
          <Logo />
          </Center>
        </DrawerHeader>
        <DrawerBody px='3'>
          <DrawerLink label='Equipes' href='/equipes' />
        </DrawerBody>
      </DrawerContent>
    </>
  );
}
