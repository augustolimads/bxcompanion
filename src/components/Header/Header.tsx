import { Box, Drawer, Flex, IconButton } from '@chakra-ui/react'
import { HeaderDrawer } from '../HeaderDrawer'
import { MenuIcon } from '../Icons'
import { SheetContainer } from '../SheetContainer'
import { HeaderProps, useHeader } from './index'

export const Header = ({ children }: HeaderProps) => {
  const { isOpen, onClose, onOpen, btnRef } = useHeader()

  return (
    <Box
      as="header"
      bg="neutral.900"
      w="full"
      position="fixed"
      zIndex={3}
      px={6}
    >
      <SheetContainer>
        <Flex color="white" alignItems="center">
          <IconButton
            aria-label="Search database"
            ref={btnRef}
            colorScheme="transparent"
            onClick={onOpen}
            icon={<MenuIcon size="24" />}
            justifySelf="self-start"
          />
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <HeaderDrawer />
          </Drawer>
          {children}
        </Flex>
      </SheetContainer>
    </Box>
  )
}
