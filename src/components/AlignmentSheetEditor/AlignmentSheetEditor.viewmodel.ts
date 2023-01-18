import { useState } from 'react'
import slugify from 'react-slugify'

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

const languages = listLanguages.map(el => ({
  value: slugify(el),
  label: el
}))

export const useAlignmentSheetEditor = () => {
  const [pickerItems, setPickerItems] = useState(languages)
  const [selectedItems, setSelectedItems] = useState([])

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item])
    setSelectedItems((curr) => [...curr, item])
  }

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedItems(selectedItems)
    }
  }

  return { handleCreateItem, handleSelectedItemsChange, pickerItems, selectedItems }
}
