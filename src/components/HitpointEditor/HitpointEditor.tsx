import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spacer,
  VStack
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { HitpointEditorProps, useHitpointEditor } from './index'

export const HitpointEditor = (props: HitpointEditorProps) => {
  const { forms, character, editHpSheet } = useHitpointEditor()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      hd: character.hp.hd,
      current: character.hp.current,
      max: character.hp.max
    }
  })

  return (
    <VStack as="form" align="left" onSubmit={handleSubmit(editHpSheet)}>
      <HStack>
      {forms.map((el) => (
        <FormControl key={el.id}>
          <FormLabel htmlFor={el.label}>{el.label}</FormLabel>
          <NumberInput name={el.label} defaultValue={el.value} min={4} max={12}>
            <NumberInputField {...register(el.ref)} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      ))}
      </HStack>

      <Spacer />
      <Button bg="neutral.900" color="neutral.100" type="submit">
        Confirmar
      </Button>
    </VStack>
  )
}
