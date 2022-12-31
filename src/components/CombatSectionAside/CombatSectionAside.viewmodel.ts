import { actions } from 'src/stores/SheetCharacter'
import { useCharacter } from 'src/stores/SheetCharacter/SheetCharacter'
import { DecreaseAmmoProps } from 'src/stores/SheetCharacter/SheetCharacter.types'

export const useCombatSectionAside = () => {
  const { character, dispatch } = useCharacter()
  const tac0 = character.combat.tac0 + character.combat.tac0Extra
  const listEquipment = character.itens.itemList
  const getListAmmo = listEquipment.filter(
    (el) => el && el.type === 'ammo' && Boolean(el.equippedOn)
  )

  const ac = () => {
    const baseValue = 9
    const extraValue = character.combat.ACBonus
    const armorList = character.itens.itemList.filter(
      (el) => el && el.type === 'armor' && Boolean(el.equippedOn)
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

  const decreaseAmmo = (values: DecreaseAmmoProps) => {
    const ammoElement = listEquipment.find((el) => el.id === values.id)
    const actualAmount = ammoElement?.amount
    if(actualAmount && actualAmount > 0) {
      dispatch(actions.decreaseAmmo(values))
    }
  }

  return { ac: ac(), tac0, getListAmmo, decreaseAmmo }
}
