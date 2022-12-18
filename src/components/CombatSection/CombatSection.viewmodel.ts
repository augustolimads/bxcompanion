import { useCharacter } from 'src/store/useCharacter/useCharacter'
import { setSlug } from 'src/utils/setSlug'

export const useCombatSection = () => {
  const { character, setCharacter } = useCharacter()
  const equipmentList = character.itens.itemList.filter((el) => el.type !== 'item')

  function createEquipment() {
    const itemList = character.itens.itemList
    const equipmentSlug = setSlug(itemList, 'item')
    itemList.push({ id: equipmentSlug, label: 'Item', type: 'weapon' })

    setCharacter({
      ...character,
      ...(character.itens.itemList = itemList)
    })
    // console.log(character.itens.itemList)
  }

  function duplicateEquipment() {}

  function deleteEquipment() {}

  return { equipmentList, createEquipment }
}
