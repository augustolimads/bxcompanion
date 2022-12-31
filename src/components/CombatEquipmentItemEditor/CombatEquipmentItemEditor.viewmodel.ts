import { actions, useCharacter } from 'src/stores/SheetCharacter'

export const useCombatEquipmentItemEditor = (type: string | undefined) => {
  const { character } = useCharacter()

  const equipmentList = character.itens.itemList.filter((el) => {
    if (Boolean(el.equippedOn) && el.equippedOn !== type) {
      return
    }
    if (type === 'misc' || type === 'l-hand' || type === 'r-hand') {
      return el.type === 'weapon' || el.type === 'shield'
    }
    return el.type === type
  })

  const handleWearEquipment = (equippedOn: string, equipId: string) => {
    if (equippedOn === type) {
      actions.unequipEquipment({ equipId })
    } else {
      actions.wearEquipment({ equipId, equippedOn: type || '' })
    }
  }

  return { equipmentList, handleWearEquipment }
}
