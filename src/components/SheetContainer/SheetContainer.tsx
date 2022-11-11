import { Container } from '@chakra-ui/react';
import { SheetContainerProps, useSheetContainer } from './index';

export const SheetContainer = (props:SheetContainerProps) => {
  const {result} = useSheetContainer()

  return (
    <Container py={2} px={4} >
      {props.children}
    </Container>
  );
}
