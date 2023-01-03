import { getEquipmentImage } from 'src/utils/getEquipmentImage'
import { useCombatEquipmentItemProps } from './CombatEquipmentItem.types'

export const useCombatEquipmentItem = ({
  imageRef
}: useCombatEquipmentItemProps) => {
  getEquipmentImage(imageRef || '')
  return { getEquipmentImage }
}
