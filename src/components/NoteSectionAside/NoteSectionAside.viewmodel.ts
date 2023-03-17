import { useState } from 'react'
import { useCharacter } from 'src/stores/SheetCharacter'

export const useNoteSectionAside = () => {
  const [activeModal, setActiveModal] = useState('alignment')
  const { character } = useCharacter()

  const alignment = character.notes.alignment
  const vision = character.notes.vision
  const languages = character.notes.languages
  const armors = character.proficiency.armor
  const weapons = character.proficiency.weapon

  const handleActiveModal = (id: string, callback: any) => {
    setActiveModal(id)
    return callback
  }

  return { activeModal, handleActiveModal, alignment, vision, languages, armors, weapons }
}
