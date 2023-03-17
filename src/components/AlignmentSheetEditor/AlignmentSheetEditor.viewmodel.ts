import { useEffect, useState } from 'react'
import slugify from 'react-slugify'
import { useCharacter } from 'src/stores/SheetCharacter'

const listLanguages = [
  'Comum',
  'Ordeiro',
  'Neutro',
  'Caótico',
  'Bugbear',
  'Doppelganger',
  'Dracônico',
  'Anão',
  'Élfico',
  'Gárgola',
  'Gnoll',
  'Gnomo',
  'Goblin',
  'Halfling',
  'Harpia',
  'Hobgoblin',
  'Kobold',
  'Homem lagarto',
  'Medusa',
  'Minotauro',
  'Ogro',
  'Órquico',
  'Pixie',
  'Dialeto humano'
]

const listVisions = ['normal', 'infravisão 18m']

const listAlignment = ['Ordeiro', 'Neutro', 'Caótico']

const languagesObject = listLanguages.map((el) => ({
  value: slugify(el),
  label: el
}))

export const useAlignmentSheetEditor = () => {
  const { character } = useCharacter()
  const [pickerItems, setPickerItems] = useState(languagesObject)
  const [openDropdownSelect, setOpenDropdownSelect] = useState(false)
  const alignment = character.notes.alignment
  const vision = character.notes.vision
  const currentLanguages = character.notes.languages
  const [selectedItems, setSelectedItems] = useState(languagesObject)

  const currentLanguagesObject = currentLanguages.map((el) => ({
    value: slugify(el),
    label: el
  }))

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item])
    setSelectedItems((curr) => [...curr, item])
  }

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedItems(selectedItems)
    }
  }

  const handleAlignmentSubmit = (props) => {
    console.log(props)
  }

  const onOpenDropdownSelect = () => setOpenDropdownSelect(true)
  const onCloseDropdownSelect = () => setOpenDropdownSelect(false)

  useEffect(() => {
    setSelectedItems(currentLanguagesObject)
  }, [])

  return {
    handleCreateItem,
    handleSelectedItemsChange,
    pickerItems,
    selectedItems,
    alignment,
    vision,
    currentLanguages,
    listVisions,
    listAlignment,
    handleAlignmentSubmit,
    openDropdownSelect,
    onOpenDropdownSelect,
    onCloseDropdownSelect
  }
}
