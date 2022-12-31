import { useCharacter } from 'src/stores/SheetCharacter/SheetCharacter'
import { actions, useEquipments } from 'src/stores/SheetEquipments'
import { DecreaseAmmoProps } from 'src/stores/SheetEquipments/SheetEquipments.types'

export const useCombatSectionAside = () => {
  const { character } = useCharacter()
  const { equipments, dispatch } = useEquipments()
  const tac0 = character.combat.tac0 + character.combat.tac0Extra
  const getListAmmo = equipments.filter(
    (el) => el && el.type === 'ammo' && Boolean(el.equippedOn)
  )

  const ac = () => {
    const baseValue = 9
    const extraValue = character.combat.ACBonus
    const armorList = equipments.filter(
      (el) =>
        el &&
        (el.type === 'armor' || el.type === 'helmet' || el.type === 'shield') &&
        el.ACBonus &&
        Boolean(el.equippedOn)
    )
    if (armorList?.length || 0 > 0) {
      const armorACList = armorList?.map((el) => el.ACBonus || 0)
      const sumAllArmor = armorACList.reduce(
        (accumulator, current) => (accumulator) - (current)
      )
      return Math.abs(sumAllArmor) - extraValue
    }
    return baseValue - extraValue
  }

  const decreaseAmmo = (values: DecreaseAmmoProps) => {
    const ammoElement = equipments.find((el) => el.id === values.id)
    const actualAmount = ammoElement?.amount
    if (actualAmount && actualAmount > 0) {
      dispatch(actions.decreaseAmmo(values))
    }
  }

  return { ac: ac(), tac0, getListAmmo, decreaseAmmo }
}
