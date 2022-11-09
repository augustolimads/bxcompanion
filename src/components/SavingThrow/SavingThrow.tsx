import { Box, Text } from '@chakra-ui/react';
import { SavingThrowProps, useSavingThrow } from './index';

export const SavingThrow = (props:SavingThrowProps) => {
  const {result} = useSavingThrow()
  const bg = props.highLight ? "neutral.900" : "neutral.500"
  const isPositiveNumber = props.symbol && props.value > 0

  return (
    <Box bg={bg} rounded="md" w="full" color="neutral.100">
      <Text fontSize='xs' textAlign="center">{props.label}</Text>
      <Text fontSize='xl' textAlign="center">{isPositiveNumber && '+'}{props.value}</Text>
    </Box>
  );
}
