import { DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Text } from '@chakra-ui/react';

export const HeaderDrawer = () => {

  return (
    <>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>Create your account</DrawerHeader>
        <DrawerBody>
          <Text>ihu</Text>
        </DrawerBody>
      </DrawerContent>
    </>
  );
}