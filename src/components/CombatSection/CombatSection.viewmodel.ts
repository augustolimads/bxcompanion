import { useCharacter } from 'src/hooks/useCharacter/useCharacter'

export const useCombatSection = () => {
  const { character, setCharacter } = useCharacter()
  const equipmentList = character.itens.itemList.filter(el => el.type !== 'item')

  function createEquipment() {
    const equipmentListSize = equipmentList.length
    let excedentEquipmentListSize = equipmentListSize
    const equipmentSlug = `item-${excedentEquipmentListSize}`
    const hasSlugOnEquipmentList =
      equipmentList.findIndex((el) => el.id === equipmentSlug) === -1
        ? false
        : true
    while (hasSlugOnEquipmentList) {
      excedentEquipmentListSize + 1
    }
    equipmentList.push({ id: equipmentSlug, label: 'Item', type: 'weapon' })

    setCharacter({
      ...character,
      ...(character.itens.itemList = equipmentList)
    })
  }

  function duplicateEquipment() {}

  function deleteEquipment() {}

  return { equipmentList, createEquipment }
}
