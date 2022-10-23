import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import { LogoProps } from './index';

export const Logo = (props:LogoProps) => {

  return (
    <Link href='/'>
      <Text fontSize='lg' fontWeight='black'>BXCompanion</Text>
    </Link>
  )
}
