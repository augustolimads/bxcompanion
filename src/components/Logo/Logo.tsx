import { Text } from '@chakra-ui/react';
import { LogoProps, useLogo } from './index';

export const Logo = (props:LogoProps) => {
  const {result} = useLogo()

  return <Text fontSize='lg' fontWeight='black'>BXCompanion</Text>;
}
