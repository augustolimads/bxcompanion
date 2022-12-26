import { VStack } from '@chakra-ui/react';
import { CombatSectionAsideGroupProps } from './index';

export const CombatSectionAsideGroup = (props:CombatSectionAsideGroupProps) => {

  return (
    <VStack w="full" bg="neutral.300" p={2} rounded="md">
      {props.children}
    </VStack>
  );
}
