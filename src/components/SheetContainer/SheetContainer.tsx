import { Container } from '@chakra-ui/react';
import { SheetContainerProps } from './index';

export const SheetContainer = (props:SheetContainerProps) => {

  return (
    <Container py={2} px={2} >
      {props.children}
    </Container>
  );
}
