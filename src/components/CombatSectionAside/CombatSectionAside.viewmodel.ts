import { useCharacter } from 'src/hooks/useCharacter/useCharacter'

export const useCombatSectionAside = () => {
  const { character, setCharacter } = useCharacter()
  const ac = character.combat.AC + character.combat.ACExtra
  const tac0 = character.combat.tac0 + character.combat.tac0Extra
  const listEquipment = character.itens.itemList
  const getListAmmo = listEquipment.filter((el) => el.type === 'ammo')

  const decreaseAmmo = (id?: string) => {
    const ammoElement = getListAmmo.find((el) => el.id === id)
    const ammoIndex = listEquipment.findIndex((el) => el.id === id)
    const actualAmount = ammoElement?.amount
    if (actualAmount && actualAmount > 0) {
      setCharacter({
        ...character,
        ...(listEquipment[ammoIndex] = {
          ...listEquipment[ammoIndex],
          amount: (actualAmount || 0) - 1
        })
      })
    }
  }

  return { ac, tac0, getListAmmo, decreaseAmmo }
}
