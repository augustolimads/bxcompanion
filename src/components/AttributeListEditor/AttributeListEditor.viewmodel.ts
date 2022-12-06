import { useCharacter } from 'src/hooks/useCharacter/useCharacter'
import { EditAttributeProps } from './AttributeListEditor.types'

export const useAttributeListEditor = () => {
  const { character, setCharacter } = useCharacter()

  const editAttributeSheet = (values: EditAttributeProps) => {
    // setCharacter({...character, attr: character.attr.map(el => ({...el, value: values[`${el.ref}`]}))})
    setCharacter({...character, attr: {
      str: values.str,
      dex: values.dex,
      con: values.con,
      int: values.int,
      wis: values.wis,
      cha: values.cha
    }})
  }

  return { character, editAttributeSheet }
}
