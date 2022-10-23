import { Grid, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { StarIcon } from '../Icons';
import { DrawerLinkProps, useDrawerLink } from './index';

export const DrawerLink = (props:DrawerLinkProps) => {
  const {result} = useDrawerLink()

  return (
    <Link href={props.href}>
      <Grid
        templateColumns='2rem 1fr 2rem'
        alignItems='center'
        p={4}
        bg='gray.600'
        rounded='md'
        _hover={{
          background: 'gray.800',
          cursor: 'pointer'
        }}>
      <Icon as={StarIcon}/>
        <Text fontSize='md'>{props.label}</Text>
      </Grid>
    </Link>
  );
}
