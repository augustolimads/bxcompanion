import { Button, ButtonGroup, VStack } from '@chakra-ui/react';
import { CombatSectionProps, useCombatSection } from './index';

export const CombatSection = (props:CombatSectionProps) => {
  const {result} = useCombatSection()

  return (
    <VStack w="full">
      <ButtonGroup w="full">
        <Button w="full">
          CA 10
        </Button>
        <Button w="full">
          corporal +1
        </Button>
        <Button w="full">
          distância +2
        </Button>
      </ButtonGroup>
      {/* armas */}
      {/* armaduras */}
    </VStack>
  );
}
