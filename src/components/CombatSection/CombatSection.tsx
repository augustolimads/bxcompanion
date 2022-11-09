import { Button, HStack, VStack } from '@chakra-ui/react';
import { CombatSectionProps, useCombatSection } from './index';

export const CombatSection = (props:CombatSectionProps) => {
  const {result} = useCombatSection()

  return (
    <VStack>
      <HStack>
        <Button>
          CA 10
        </Button>
        <Button>
          Atk corporal +1
        </Button>
        <Button>
          Atk distância +2
        </Button>
      </HStack>
      {/* armas */}
      {/* armaduras */}
    </VStack>
  );
}
