import { useState } from 'react'
import { actions, useEquipments } from 'src/stores/SheetEquipments'
import { EquipTypeProps } from 'src/stores/SheetEquipments/SheetEquipments.types'
import { setSlug } from 'src/utils/setSlug'
import { EditEquipmentLocalProps } from './EquipmentSheetEditor.types'

export const useEquipmentSheetEditor = (equipId?: string) => {
  const { equipments, dispatch } = useEquipments()
  const [equipType, setEquipType] = useState(
    equipments?.find((el) => el.id === equipId)?.type
  )

  function editEquipmentSheet(values: EditEquipmentLocalProps) {
    const label = values.label || ''
    const formattedValues = {
      ...values,
      TAC0BOnus: Number(values.TAC0Bonus) || 0,
      equipmentSlug: setSlug(equipments || [], label),
      equipId
    }

    dispatch(actions.editEquipment(formattedValues))
  }

  const getEquipmentStats = () => {
    const result = equipments.find((el) => el.id === equipId)
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
