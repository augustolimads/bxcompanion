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
  const { defaultSaves, editSaveSheet, saveList } = useSaveListEditor()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      vsMagic: defaultSaves.vsMagic,
      death: defaultSaves.death,
      wand: defaultSaves.wand,
      paralysis: defaultSaves.paralysis,
      breath: defaultSaves.breath,
      spells: defaultSaves.spells,
    }
  })

  return (
    <VStack as="form" align="left" onSubmit={handleSubmit(editSaveSheet)}>
      {saveList.map((item, index) => {
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
              <NumberInputField {...register(item.id)} />
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
