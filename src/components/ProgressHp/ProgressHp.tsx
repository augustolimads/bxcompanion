import { Box, Flex } from '@chakra-ui/react';
import { ProgressHpProps, useProgressHp } from './index';

export const ProgressHp = (props:ProgressHpProps) => {
  const {result} = useProgressHp()

  return (
    <Flex flex="1" bg="neutral.100" h={2} rounded="sm">
      <Box h="full" w={`${20}%`} bg="primary.500" />
      <Box h="full" w={`${20}%`} bg="yellow" />
      <Box h="full" w={`${20}%`} bg="green" />
      <Box h="full" w={`${30}%`} bg="neutral.100" />
      <Box h="full" w={`${10}%`} bg="blue" />
    </Flex>
  );
}
