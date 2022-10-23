import { Box, Text } from '@chakra-ui/react';
import { HeaderProps } from './Header.types';
import { useHeader } from './Header.viewmodel';

export const Header = () => {
  const {} = useHeader()

  return (
    <Box>
      <Text fontSize='md'>Header</Text>
    </Box>
  );
}