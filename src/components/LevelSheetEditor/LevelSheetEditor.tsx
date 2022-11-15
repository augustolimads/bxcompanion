import { Button, FormControl, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Spacer, VStack } from '@chakra-ui/react';
import { useCharacter } from 'src/hooks/useCharacter/useCharacter';
import { LevelSheetEditorProps, useLevelSheetEditor } from './index';

export const LevelSheetEditor = (props:LevelSheetEditorProps) => {
  const {result} = useLevelSheetEditor()
  const { character } = useCharacter()

  return (
    <VStack as="form" align="left">
      <FormControl>
        <FormLabel>Nível</FormLabel>
        <NumberInput defaultValue={character.level} min={0} max={20}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl>
        <FormLabel>XP atual</FormLabel>
        <NumberInput defaultValue={character.currentXP} min={0}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl>
        <FormLabel>Próximo nível</FormLabel>
        <NumberInput defaultValue={character.maxXP} min={0}>
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
