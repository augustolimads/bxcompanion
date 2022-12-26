import { actions, useCharacter } from "src/stores/SheetCharacter"
import { CreateEquipmentProps } from "src/stores/SheetCharacter/SheetCharacter.types"
import { setSlug } from "src/utils/setSlug"

export const useItemSection = () => {
    const {character, dispatch} = useCharacter()
    const itens = character.itens.itemList.filter(el => el.type === 'item')

    function createItem() {
        const itemList = character.itens.itemList
        const equipmentSlug = setSlug(itemList, 'item')
        const newItem = { id: equipmentSlug, label: 'Item', type: 'item' } as CreateEquipmentProps
        dispatch(actions.createItem(newItem))
      }

    return {itens, createItem}
}
