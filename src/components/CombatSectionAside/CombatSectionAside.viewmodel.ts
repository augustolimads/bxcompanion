import { useCharacter } from 'src/stores/SheetCharacter/SheetCharacter'
import { actions, useEquipments } from 'src/stores/SheetEquipments'
import { DecreaseAmmoProps } from 'src/stores/SheetEquipments/SheetEquipments.types'
import { attributeModifier } from 'src/utils/attributeModifier'

export const useCombatSectionAside = () => {
  const { character } = useCharacter()
  const { equipments, dispatch } = useEquipments()
  const tac0 = character.combat.tac0 + character.combat.tac0Extra
  const getListAmmo = equipments.filter(
    (el) => el && el.type === 'ammo' && Boolean(el.equippedOn)
  )

  const ACValue = () => {
    const baseValue = 9
    const extraValue = character.combat.ACBonus
    const mainArmor = equipments.find((el) => el?.equippedOn === 'armor')
    const newBaseValue = mainArmor ? mainArmor.ACBonus : baseValue
    const dexterityValue = attributeModifier(character.attr.dex)
    const DefensiveAccessories = equipments.filter(
      (el) =>
        el &&
        el.ACBonus &&
        el.equippedOn !== 'armor' &&
        el.equippedOn !== 'misc' &&
        Boolean(el?.equippedOn?.length > 2 || false)
    )
    const armorACList = DefensiveAccessories?.map((el) => el.ACBonus || 0)
    const sumAllDefensiveAcc =
      DefensiveAccessories.length > 0
        ? armorACList.reduce((accumulator, current) => accumulator - current)
        : 0
    return Number(newBaseValue) - Math.abs(sumAllDefensiveAcc) - extraValue - dexterityValue
  }

  const decreaseAmmo = (values: DecreaseAmmoProps) => {
    const ammoElement = equipments.find((el) => el.id === values.id)
    const actualAmount = ammoElement?.amount
    if (actualAmount && actualAmount > 0) {
      dispatch(actions.decreaseAmmo(values))
    }
  }

  return { ac: ACValue(), tac0, getListAmmo, decreaseAmmo }
}
