import {
  Button,
  Divider,
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
import { AttributeModifiers } from '../AttributeModifiers'
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
      <AttributeModifiers attrRef={props.attrRef} />

      <Divider mt={2} />

      <FormControl
        display="flex"
        alignItems="center"
        bg="neutral.500"
        roundedLeft="lg"
      >
        <FormLabel
          htmlFor={props.attrRef}
          mt={2}
          ml={2}
          color="neutral.100"
          flex="1"
          textAlign="right"
        >
          Valor do Atributo
        </FormLabel>
        <NumberInput min={3} max={20} flex="0.4" bg="neutral.700">
          <NumberInputField {...register(props.attrRef)} />
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
        Atualizar
      </Button>
    </VStack>
  )
}
