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
import { SaveListEditorProps, useSaveListEditor } from './index'

export const SaveListEditor = (props: SaveListEditorProps) => {
  const { editSaveSheet, character } = useSaveListEditor()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      vsMagic: character.saves[0].value,
      death: character.saves[1].value,
      wand: character.saves[2].value,
      paralysis: character.saves[3].value,
      breath: character.saves[4].value,
      spells: character.saves[5].value,
    }
  })

  return (
    <VStack as="form" align="left" onSubmit={handleSubmit(editSaveSheet)}>
      {character.saves.map((item, index) => {
        if (index === 0) {
          return
        }
        return (
          <FormControl key={item.id}>
            <FormLabel htmlFor={`saving-throw-${item.label}`}>
              {item.label}
            </FormLabel>
            <NumberInput
              name={`saving-throw-${item.label}`}
              defaultValue={item.value}
              min={0}
              max={20}
            >
              <NumberInputField {...register(item.ref)} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        )
      })}

      <Spacer />
      <Button bg="neutral.900" color="neutral.100" type="submit">
        Confirmar
      </Button>
    </VStack>
  )
}
