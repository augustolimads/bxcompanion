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
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AttributeModifiers } from '../AttributeModifiers';
import { AttributeListEditorProps, useAttributeListEditor } from './index';



export const AttributeListEditor = (props: AttributeListEditorProps) => {
  const { editAttributeSheet, character } = useAttributeListEditor()
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { isSubmitting }
  } = useForm({
    defaultValues: {
      str: character.attr.str,
      dex: character.attr.dex,
      con: character.attr.con,
      int: character.attr.int,
      wis: character.attr.wis,
      cha: character.attr.cha
    }
  })

  useEffect(() => {
    setFocus(props.attrRef);
  }, [setFocus, props.attrRef]);

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
