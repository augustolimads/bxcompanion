import {
  Button,
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spacer,
  VStack
} from '@chakra-ui/react'
import { useCharacter } from 'src/hooks/useCharacter/useCharacter'
import { SaveListEditorProps, useSaveListEditor } from './index'

export const SaveListEditor = (props: SaveListEditorProps) => {
  const { result } = useSaveListEditor()
  const { character } = useCharacter()

  return (
    <VStack as="form" align="left">
      {character.saves.map((item) => (
        <FormControl key={item.id}>
          <FormLabel>{item.label}</FormLabel>
          <NumberInput defaultValue={item.value} min={-3} max={20}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      ))}

      <Spacer />
      <Button bg="neutral.900" color="neutral.100">
        Confirmar
      </Button>
    </VStack>
  )
}
