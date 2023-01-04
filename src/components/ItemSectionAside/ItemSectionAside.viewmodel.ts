import { useCharacter } from 'src/stores/SheetCharacter'
import { useEquipments } from 'src/stores/SheetEquipments'

export const useItemSectionAside = () => {
  const { character } = useCharacter()
  const { equipments } = useEquipments()
  const listWeight = equipments.map((el) => Number(el.weight || 0))
  const currentWeight = listWeight.reduce((acc, current) => acc + current)
  const getExplorationValue = () => {
      if(currentWeight <= 400 ) {
       return 36
      }
      if(currentWeight <= 600) {
        return 27
      }
      if(currentWeight <= 800) {
        return 18
      }
      if(currentWeight <= 1600) {
        return 9
      }
      if(currentWeight > 1600) {
        return 0
      }
  }
  const exploration = getExplorationValue() || 0
  const encounter = exploration / 3
  const journey = encounter * 2
  
  const coins = character.itens.coins

  return { exploration, journey, encounter, coins }
}
