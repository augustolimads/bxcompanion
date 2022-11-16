import {
  Button,
  FormControl, FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spacer,
  VStack
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { AttributeListEditorProps, useAttributeListEditor } from './index'

export const AttributeListEditor = (props: AttributeListEditorProps) => {
  const { editAttributeSheet, character } = useAttributeListEditor()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm({
    defaultValues: {
      str: character.attr[0].value,
      dex: character.attr[1].value,
      con: character.attr[2].value,
      int: character.attr[3].value,
      wis: character.attr[4].value,
      cha: character.attr[5].value
    }
  })

  return (
    <VStack as="form" align="left" onSubmit={handleSubmit(editAttributeSheet)}>
      {character.attr.map((item) => (
        <FormControl key={item.id}>
          <FormLabel htmlFor={item.ref}>{item.label}</FormLabel>
          <NumberInput
            min={3}
            max={20}
          >
            <NumberInputField {...register(item.ref)} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      ))}

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
