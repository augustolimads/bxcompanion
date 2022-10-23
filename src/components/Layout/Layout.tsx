import { Flex } from '@chakra-ui/react';
import { LayoutProps } from './index';

export const Layout = (props:LayoutProps) => {

  return (
    <Flex bg='gray.600' minHeight='100vh' flexDir='column'>
      {props.children}
    </Flex>
  );
}
