import { actions, useEquipments } from "src/stores/SheetEquipments"

export const useCombatEquipmentItemEditor = (type: string | undefined) => {
  const { equipments, dispatch } = useEquipments()

  const equipmentList = equipments.filter((el) => {
    if (Boolean(el.equippedOn) && el.equippedOn !== type) {
      return
    }
    if (type === 'misc' || type === 'l-hand' || type === 'r-hand') {
      return el.type === 'weapon' || el.type === 'shield'
    }
    if(el.type === 'magic') {
      return el.type
    }
    return el.type === type
  })

  const equippedItem = equipmentList.find(el => Boolean(el.equippedOn))


  const handleWearEquipment = (equippedOn: string, equipId: string) => {
    if (equippedOn === type) {
      dispatch(actions.unequipEquipment({ equipId }))
    } else {
      equipmentList.forEach(el => dispatch(actions.unequipEquipment({equipId: el.id})))
      dispatch(actions.wearEquipment({ equipId, equippedOn: type || '' }))
    }
  }

  return { equipmentList, handleWearEquipment, equippedItem }
}
