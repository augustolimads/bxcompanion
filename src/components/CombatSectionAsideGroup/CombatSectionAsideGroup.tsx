import { VStack } from '@chakra-ui/react';
import { CombatSectionAsideGroupProps } from './index';

export const CombatSectionAsideGroup = (props:CombatSectionAsideGroupProps) => {

  return (
    <VStack w="full" bg="neutral.500" p={2} rounded="md" color="neutral.100">
      {props.children}
    </VStack>
  );
}
