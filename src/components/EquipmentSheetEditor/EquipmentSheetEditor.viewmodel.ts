import { useState } from 'react'
import { useCharacter } from 'src/hooks/useCharacter/useCharacter'
import { EquipTypeProps } from 'src/hooks/useCharacter/useCharacter.types'
import { setSlug } from 'src/utils/setSlug'
import { EditEquipmentProps } from './EquipmentSheetEditor.types'

export const useEquipmentSheetEditor = (equipId?: string) => {
  const { character, setCharacter } = useCharacter()
  const [equipType, setEquipType] = useState(
    character.itens.itemList.find((el) => el.id === equipId)?.type
  )

  function editEquipmentSheet(values: EditEquipmentProps) {
    const equipmentList = character.itens.itemList

    const equipIndex = equipmentList.findIndex(
      (el) => el.id === equipId
    )
    
    const equipmentSlug = setSlug(equipmentList, values.label)
    
    setCharacter({
      ...character,
      ...(equipmentList[equipIndex] = {
        ...values,
        amount: Number(values.amount),
        id: equipmentSlug
      })
    })
  }

  const getEquipmentStats = () => {
    const result = character.itens.itemList.find((el) => el.id === equipId)
    return result
  }

  function onEquipTypeElements(type: EquipTypeProps) {
    setEquipType(type)
  }
  return {
    onEquipTypeElements,
    getEquipmentStats,
    equipType,
    editEquipmentSheet
  }
}
