import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { actions, useCharacter } from 'src/stores/SheetCharacter'
import { AttributeProps } from 'src/stores/SheetCharacter/SheetCharacter.types'
import { AttributeListEditorProps } from './AttributeListEditor.types'

export const useAttributeListEditor = (props: AttributeListEditorProps) => {
  const { character, dispatch } = useCharacter()

  const editAttributeSheet = (values: AttributeProps) => {
    const numberConverted = {
      str: Number(values.str),
      dex: Number(values.dex),
      con: Number(values.con),
      int: Number(values.int),
      wis: Number(values.wis),
      cha: Number(values.cha)
    }
    dispatch(actions.editAttribute(numberConverted))
  }

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
    setFocus(props.attrRef)
  }, [setFocus, props.attrRef])

  return { character, editAttributeSheet, handleSubmit, register, isSubmitting }
}
