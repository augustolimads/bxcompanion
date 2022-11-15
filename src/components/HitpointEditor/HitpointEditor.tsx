import { Button, FormControl, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Spacer, VStack } from '@chakra-ui/react';
import { useCharacter } from 'src/hooks/useCharacter/useCharacter';
import { HitpointEditorProps, useHitpointEditor } from './index';

export const HitpointEditor = (props:HitpointEditorProps) => {
  const {result} = useHitpointEditor()
  const { character } = useCharacter()

  return (
    <VStack as="form" align="left">
      <FormControl>
        <FormLabel>DV</FormLabel>
        <NumberInput defaultValue={character.hp.hd} min={4} max={12}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl>
        <FormLabel>PV atual</FormLabel>
        <NumberInput defaultValue={character.hp.current} min={0} max={20}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      
      <FormControl>
        <FormLabel>PV máximo</FormLabel>
        <NumberInput defaultValue={character.hp.max} min={0} max={20}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      
      <Spacer />
      <Button bg="neutral.900" color="neutral.100">
        Confirmar
      </Button>
    </VStack>
  );
}
