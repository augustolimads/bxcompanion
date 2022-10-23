import { Center, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Text } from '@chakra-ui/react';
import { Logo } from '../Logo';

export const HeaderDrawer = () => {

  return (
    <>
      <DrawerOverlay />
      <DrawerContent bg='gray.700' color='white'>
        <DrawerHeader bgImage='url("/images/drawer-image.jpg")' minHeight='180px'>
          <Center height='100%'>
          <Logo />
          </Center>
        </DrawerHeader>
        <DrawerBody>
          <Text>ihu</Text>
        </DrawerBody>
      </DrawerContent>
    </>
  );
}
