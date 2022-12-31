import { useCharacter } from 'src/stores/SheetCharacter'

export const useCombatEquipmentItemEditor = (type: string | undefined) => {
  const { character } = useCharacter()

  const equipmentList = character.itens.itemList.filter((el) => {
    if (type === 'misc' || type === 'weapon') {
      return el.type === 'weapon' || el.type === 'shield'
    }
    return el.type === type
  })

  console.log(type, equipmentList)
  return { equipmentList }
}
