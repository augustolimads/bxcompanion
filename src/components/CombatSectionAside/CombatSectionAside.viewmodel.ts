import { useCharacter } from 'src/stores/useCharacter/useCharacter'

export const useCombatSectionAside = () => {
  const { character, setCharacter } = useCharacter()
  const tac0 = character.combat.tac0 + character.combat.tac0Extra
  const listEquipment = character.itens.itemList
  const getListAmmo = listEquipment.filter(
    (el) => el.type === 'ammo' && el.equipped
  )

  const ac = () => {
    const baseValue = 9
    const extraValue = character.combat.ACBonus
    const armorList = character.itens.itemList.filter(
      (el) => el.type === 'armor' && el.equipped
    )
    if (armorList.length > 0) {
      const armorACList = armorList.map((el) => el.ACBonus)
      const sumAllArmor = armorACList.reduce(
        (accumulator, current) => (accumulator || 0) - (current || 0)
      )
      return (sumAllArmor || 0) - extraValue
    }
    return baseValue - extraValue
  }

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

  return { ac: ac(), tac0, getListAmmo, decreaseAmmo }
}
