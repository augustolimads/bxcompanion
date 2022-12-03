import { useCharacter } from 'src/hooks/useCharacter/useCharacter'

export const useCombatSection = () => {
  const { character, setCharacter } = useCharacter()

  function createEquipment() {
    const equipmentList = character.itens.equipments
    equipmentList.push({id: '123', label: 'teste', type: 'weapon'})

    setCharacter({
      ...character,
      ...character.itens.equipments = equipmentList
      }
    )
  }

  function duplicateEquipment() {}

  function deleteEquipment() {}

  return { character, createEquipment }
}
