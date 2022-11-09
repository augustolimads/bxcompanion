import { Flex } from '@chakra-ui/react';
import { LayoutProps } from './index';

export const Layout = (props:LayoutProps) => {

  return (
    <Flex bg='neutral.700' minHeight='100vh' flexDir='column' position="relative">
      {props.children}
    </Flex>
  );
}
