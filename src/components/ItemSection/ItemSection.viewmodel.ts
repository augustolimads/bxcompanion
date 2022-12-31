import { actions, useEquipments } from 'src/stores/SheetEquipments'
import { CreateEquipmentProps } from 'src/stores/SheetEquipments/SheetEquipments.types'
import { setSlug } from 'src/utils/setSlug'

export const useItemSection = () => {
  const { equipments, dispatch } = useEquipments()
  const itens = equipments?.filter((el) => !Boolean(el.equippedOn)) || []

  function createItem() {
    const equipmentSlug = setSlug(equipments || [], 'item')
    const newItem = {
      id: equipmentSlug,
      label: 'Item',
      type: 'item'
    } as CreateEquipmentProps
    dispatch(actions.createItem(newItem))
  }

  return { itens, createItem }
}
