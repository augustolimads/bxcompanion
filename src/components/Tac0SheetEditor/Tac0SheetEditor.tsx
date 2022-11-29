import {
  Button,
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  VStack
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Tac0SheetEditorProps, useTac0SheetEditor } from './index';

export const Tac0SheetEditor = (props:Tac0SheetEditorProps) => {
  const {character, editTac0Sheet} = useTac0SheetEditor()

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { isSubmitting }
  } = useForm({
    defaultValues: {
      tac0Bonus: character.combat.tac0Extra
    }
  })

  return (
    <VStack as="form" align="left" onSubmit={handleSubmit(editTac0Sheet)}>
      <FormControl
        display="flex"
        alignItems="center"
        bg="neutral.500"
        roundedLeft="lg"
      >
        <FormLabel
          htmlFor="tac0Bonus"
          mt={2}
          ml={2}
          color="neutral.100"
          flex="1"
          textAlign="right"
        >
          Bônus de Tac0
        </FormLabel>
        <NumberInput
          name="tac0Bonus"
          defaultValue={0}
          max={20}
          flex="0.4"
          bg="neutral.700"
        >
          <NumberInputField {...register('tac0Bonus')} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <Button
        bg="neutral.900"
        color="neutral.100"
        type="submit"
        isLoading={isSubmitting}
      >
        Atualizar
      </Button>
    </VStack>
  )
}
