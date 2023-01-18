import { Button, FormControl, FormLabel, Select, Spacer, VStack } from '@chakra-ui/react'
import { CUIAutoComplete } from 'chakra-ui-autocomplete'
import { useForm } from 'react-hook-form'
import { Option } from '../Option'
import { AlignmentSheetEditorProps, useAlignmentSheetEditor } from './index'

export const AlignmentSheetEditor = (props: AlignmentSheetEditorProps) => {
  const { handleCreateItem, handleSelectedItemsChange, pickerItems, selectedItems } = useAlignmentSheetEditor()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      alignment: '',
      vision: '',
      languages: []
    }
  })
  return (
    <VStack as="form" align="left" onSubmit={handleSubmit()}>
      <FormControl flex="1">
        <FormLabel htmlFor="type">Alinhamento</FormLabel>
        <Select bg="neutral.700" {...register('alignment')} onChange={() => {}}>
          <Option color="neutral.900" bg="neutral.700" value="Ordeiro">
            Ordeiro
          </Option>
          <Option color="neutral.900" bg="neutral.700" value="Neutro">
            Neutro
          </Option>
          <Option color="neutral.900" bg="neutral.700" value="Caótico">
            Caótico
          </Option>
        </Select>
      </FormControl>
      <FormControl flex="1">
        <FormLabel htmlFor="type">Visão</FormLabel>
        <Select bg="neutral.700" {...register('alignment')} onChange={() => {}}>
          <Option color="neutral.900" bg="neutral.700" value="normal">
            normal
          </Option>
          <Option color="neutral.900" bg="neutral.700" value="Infravisão 60'">
            Infravisão 60'
          </Option>
          <Option color="neutral.900" bg="neutral.700" value="Infravisão 90'">
            Infravisão 90'
          </Option>
        </Select>
      </FormControl>
      <CUIAutoComplete
          label="Línguas conhecidas"
          placeholder="Digite uma língua"
          onCreateItem={handleCreateItem}
          items={pickerItems}
          selectedItems={selectedItems}
          onSelectedItemsChange={(changes) =>
            handleSelectedItemsChange(changes.selectedItems)
          }
          labelStyleProps={{pb: 0, mb: 0}}
          toggleButtonStyleProps={{bg: 'neutral.500'}}
          tagStyleProps={{bg: 'neutral.900', color: 'neutral.100'}}
          listStyleProps={{bg: 'neutral.700', color: 'neutral.100', height: '200px', overflowY: 'scroll'}}
          highlightItemBg='neutral.700'
        />
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
