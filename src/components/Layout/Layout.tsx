import { Box, Flex } from '@chakra-ui/react';
import { Header } from '../Header';
import { LogoHeader } from '../LogoHeader';
import { LayoutProps } from './index';

export const Layout = (props:LayoutProps) => {

  const HeaderComponent = () => {
    if(props.headerChildren) {
      return (
        <Header>
         {props.headerChildren}
        </Header>
      )
    }
    return (
      <Header>
         <LogoHeader />
      </Header>
    )
  }

  return (
    <Flex bg='neutral.700' minHeight='100vh' flexDir='column' position="relative">
      {HeaderComponent()}
      <Box pt={16} h="100vh">
        {props.children}
      </Box>
    </Flex>
  );
}
