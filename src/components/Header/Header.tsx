import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useHeader } from './Header.viewmodel';

export const Header = () => {
  const {} = useHeader()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Box bg='gray.700' w='full' p={6} color='white'>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>
            <Text>ihu</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}