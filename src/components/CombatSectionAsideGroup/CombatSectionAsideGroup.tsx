import { VStack } from '@chakra-ui/react';
import { CombatSectionAsideGroupProps, useCombatSectionAsideGroup } from './index';

export const CombatSectionAsideGroup = (props:CombatSectionAsideGroupProps) => {
  const {result} = useCombatSectionAsideGroup()

  return (
    <VStack w="full" bg="neutral.300" p={2} rounded="md">
      {props.children}
    </VStack>
  );
}
