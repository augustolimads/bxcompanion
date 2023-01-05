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
import { useForm } from 'react-hook-form'
import { SheetCoinsEditorProps, useSheetCoinsEditor } from './index'

export const SheetCoinsEditor = (props: SheetCoinsEditorProps) => {
  const { copper, silver, electron, gold, platinum, editCoinList } =
    useSheetCoinsEditor()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      copper,
      silver,
      electron,
      gold,
      platinum
    }
  })

  return (
    <VStack as="form" align="left" onSubmit={handleSubmit(editCoinList)}>
      <FormControl>
        <FormLabel htmlFor={'copper'}>Cobre</FormLabel>
        <NumberInput name={'copper'} defaultValue={0} min={0}>
          <NumberInputField {...register('copper')} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor={'silver'}>Prata</FormLabel>
        <NumberInput name={'silver'} defaultValue={0} min={0}>
          <NumberInputField {...register('silver')} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor={'electron'}>Electrum</FormLabel>
        <NumberInput name={'electron'} defaultValue={0} min={0}>
          <NumberInputField {...register('electron')} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor={'gold'}>Ouro</FormLabel>
        <NumberInput name={'gold'} defaultValue={0} min={0}>
          <NumberInputField {...register('gold')} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor={'platinum'}>Platina</FormLabel>
        <NumberInput name={'platinum'} defaultValue={0} min={0}>
          <NumberInputField {...register('platinum')} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <Spacer />
      <Button
        bg="neutral.900"
        color="neutral.100"
        type="submit"
        isLoading={isSubmitting}
      >
        Confirmar
      </Button>
    </VStack>
  )
}
