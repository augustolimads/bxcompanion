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
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { AcSheetEditorProps, useAcSheetEditor } from './index'

export const AcSheetEditor = (props: AcSheetEditorProps) => {
  const { character, editACSheet } = useAcSheetEditor()

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { isSubmitting }
  } = useForm({
    defaultValues: {
      ACBonus: character.combat.ACBonus
    }
  })

  return (
    <VStack as="form" align="left" onSubmit={handleSubmit(editACSheet)}>
      <FormControl
        display="flex"
        alignItems="center"
        bg="neutral.500"
        roundedLeft="lg"
      >
        <FormLabel
          htmlFor="ACBonus"
          mt={2}
          ml={2}
          color="neutral.100"
          flex="1"
          textAlign="right"
        >
          Bônus de CA
        </FormLabel>
        <NumberInput
          name="ACBonus"
          defaultValue={0}
          max={20}
          flex="0.4"
          bg="neutral.700"
        >
          <NumberInputField {...register('ACBonus')} />
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
