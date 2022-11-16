import { useCharacter } from 'src/hooks/useCharacter/useCharacter'
import { EditAttributeProps } from './AttributeListEditor.types'

export const useAttributeListEditor = () => {
  const { character, setCharacter } = useCharacter()

  const editAttributeSheet = (values: EditAttributeProps) => {
    setCharacter({...character, attr: character.attr.map(el => ({...el, value: values[`${el.ref}`]}))})
  }

  return { character, editAttributeSheet }
}
