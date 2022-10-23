import { Box, Center } from '@chakra-ui/react';
import { Logo } from 'src/components/Logo';
import { LogoHeaderProps, useLogoHeader } from './index';

export const LogoHeader = (props:LogoHeaderProps) => {
  const {result} = useLogoHeader()

  return (
    <Center w='full'>
      <Logo />
      <Box  w='10' />
    </Center>
  );
}
