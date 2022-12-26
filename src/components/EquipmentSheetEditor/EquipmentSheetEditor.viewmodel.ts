import { useState } from 'react'
import { actions, useCharacter } from 'src/stores/SheetCharacter'
import { EditEquipmentProps, EquipTypeProps } from 'src/stores/SheetCharacter/SheetCharacter.types'
import { setSlug } from 'src/utils/setSlug'

export const useEquipmentSheetEditor = (equipId?: string) => {
  const { character, dispatch } = useCharacter()
  const [equipType, setEquipType] = useState(
    character.itens.itemList.find((el) => el.id === equipId)?.type
  )

  function editEquipmentSheet(values: EditEquipmentProps) {
    const equipmentList = character.itens.itemList
    const label = values.label || ''
    const formattedValues = {
      ...values,
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
