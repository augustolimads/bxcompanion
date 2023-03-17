import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Select,
  Spacer,
  VStack
} from '@chakra-ui/react'
import { CUIAutoComplete } from 'chakra-ui-autocomplete'
import { useForm } from 'react-hook-form'
import { Option } from '../Option'
import { AlignmentSheetEditorProps, useAlignmentSheetEditor } from './index'

export const AlignmentSheetEditor = (props: AlignmentSheetEditorProps) => {
  const {
    pickerItems,
    selectedItems,
    alignment,
    vision,
    currentLanguages,
    listVisions,
    listAlignment,
    handleAlignmentSubmit,
    handleCreateItem,
    handleSelectedItemsChange,
    openDropdownSelect,
    onOpenDropdownSelect,
    onCloseDropdownSelect
  } = useAlignmentSheetEditor()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      alignment,
      vision,
      languages: currentLanguages
    }
  })
  return (
    <VStack
      as="form"
      align="left"
      onSubmit={handleSubmit(handleAlignmentSubmit)}
    >
      <FormControl flex="1">
        <FormLabel htmlFor="type">Alinhamento</FormLabel>
        <Select bg="neutral.700" {...register('alignment')} onChange={() => {}}>
          {listAlignment.map((el) => (
            <Option key={el} color="neutral.900" bg="neutral.700" value={el}>
              {el}
            </Option>
          ))}
        </Select>
      </FormControl>
      <FormControl flex="1">
        <FormLabel htmlFor="type">Visão</FormLabel>
        <Select bg="neutral.700" {...register('vision')} onChange={() => {}}>
          {listVisions.map((el) => (
            <Option key={el} color="neutral.900" bg="neutral.700" value={el}>
              {el}
            </Option>
          ))}
        </Select>
      </FormControl>
      <Box onBlur={onCloseDropdownSelect} onClick={onOpenDropdownSelect}>
        <CUIAutoComplete
          {...register('languages')}
          label="Línguas conhecidas"
          placeholder="Digite uma língua"
          hideToggleButton
          onCreateItem={handleCreateItem}
          items={pickerItems}
          selectedItems={selectedItems}
          onSelectedItemsChange={(changes) =>
            handleSelectedItemsChange(changes.selectedItems)
          }
          labelStyleProps={{ pb: 0, mb: 0 }}
          toggleButtonStyleProps={{ bg: 'neutral.500' }}
          tagStyleProps={{ bg: 'neutral.900', color: 'neutral.100' }}
          listStyleProps={{
            bg: 'neutral.700',
            color: 'neutral.100',
            height: openDropdownSelect ? 100 : 0,
            overflowY: 'scroll'
          }}
          highlightItemBg="neutral.700"
        />
      </Box>
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
