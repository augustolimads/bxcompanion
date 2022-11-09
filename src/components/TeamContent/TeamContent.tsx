import { Button, Flex } from '@chakra-ui/react';
import { TeamItem } from '../TeamItem';
import { TeamContentProps, useTeamContent } from './index';

export const TeamContent = (props:TeamContentProps) => {
  const {result} = useTeamContent()

  return (
    <Flex p='4' flex='1' flexDir='column' justifyContent='space-between'>
      <Flex flexDir='column' overflowY='scroll' maxHeight='80vh' flex='1' gap='2'>
        <TeamItem id='1' />
        <TeamItem id='1' />
        <TeamItem id='1' />
      </Flex>
      <Button w='full' h='14' bg='neutral.500' color='white' _hover={{bg: 'neutral.300'}}>Novo Personagem</Button>
    </Flex>
  );
}
