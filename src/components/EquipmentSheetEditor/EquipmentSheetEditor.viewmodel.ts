import { useState } from 'react'
import { actions, useCharacter } from 'src/stores/SheetCharacter'
import { EquipTypeProps } from 'src/stores/SheetCharacter/SheetCharacter.types'
import { setSlug } from 'src/utils/setSlug'
import { EditEquipmentLocalProps } from './EquipmentSheetEditor.types'

export const useEquipmentSheetEditor = (equipId?: string) => {
  const { character, dispatch } = useCharacter()
  const [equipType, setEquipType] = useState(
    character.itens.itemList.find((el) => el.id === equipId)?.type
  )

  function editEquipmentSheet(values: EditEquipmentLocalProps) {
    const equipmentList = character.itens.itemList
    const label = values.label || ''
    const formattedValues = {
      ...values,
      TAC0BOnus: Number(values.TAC0Bonus) || 0,
      equipmentSlug: setSlug(equipmentList, label),
      equipId
    }

    dispatch(actions.editEquipment(formattedValues))
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
