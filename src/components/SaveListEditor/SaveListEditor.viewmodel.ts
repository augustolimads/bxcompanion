import { actions, useCharacter } from 'src/stores/SheetCharacter'
import { SaveProps } from 'src/stores/SheetCharacter/SheetCharacter.types'
import { saveListProps } from './SaveListEditor.types'

export const useSaveListEditor = () => {
  const { character, dispatch } = useCharacter()
  const defaultSaves = character.saves

  const saveList = [
    {
      id: 'vsMagic',
      label: 'Vs Magia',
      abbreviate: 'vs magia',
      value: character.saves.vsMagic
    },
    {
      id: 'death',
      label: 'Morte e veneno',
      abbreviate: 'morte',
      value: character.saves.death
    },
    {
      id: 'wand',
      label: 'Varinhas',
      abbreviate: 'varinhas',
      value: character.saves.wand
    },
    {
      id: 'paralysis',
      label: 'Paralisia',
      abbreviate: 'paralisia',
      value: character.saves.paralysis
    },
    {
      id: 'breath',
      label: 'Baforada',
      abbreviate: 'sopro',
      value: character.saves.breath
    },
    {
      id: 'spells',
      label: 'Feitiços',
      abbreviate: 'feitiços',
      value: character.saves.spells
    }
  ] as saveListProps[]

  const editSaveSheet = (values: SaveProps) => {
    dispatch(actions.editSaves(values))
  }
  return { defaultSaves, saveList, editSaveSheet }
}
