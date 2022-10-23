import { Box, Text } from '@chakra-ui/react';
import { HeaderDrawerProps } from './HeaderDrawer.types';
import { useHeaderDrawer } from './HeaderDrawer.viewmodel';

export const HeaderDrawer = () => {
  const {} = useHeaderDrawer()

  return (
    <Box>
      <Text fontSize='md'>HeaderDrawer</Text>
    </Box>
  );
}