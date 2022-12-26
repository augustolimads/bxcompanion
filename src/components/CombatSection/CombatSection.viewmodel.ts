import { actions, useCharacter } from 'src/stores/SheetCharacter'
import { CreateEquipmentProps } from 'src/stores/SheetCharacter/SheetCharacter.types'
import { setSlug } from 'src/utils/setSlug'

export const useCombatSection = () => {
  const { character, dispatch } = useCharacter()
  const equipmentList = character.itens.itemList.filter((el) => el && el.type !== 'item')

  function createEquipment() {
    const itemList = character.itens.itemList
    const equipmentSlug = setSlug(itemList, 'item')
    const newItem = { id: equipmentSlug, label: 'Item', type: 'weapon' } as CreateEquipmentProps
    dispatch(actions.createEquipment(newItem))
  }

  function duplicateEquipment() {}

  function deleteEquipment() {}

  return { equipmentList, createEquipment }
}
