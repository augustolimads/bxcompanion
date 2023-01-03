import { useEquipments } from 'src/stores/SheetEquipments'
import { EquipmentProps } from 'src/stores/SheetEquipments/SheetEquipments.types'
import { CombatEquipmentItemProps } from '../CombatEquipmentItem'

export const useCombatSection = () => {
  const { equipments } = useEquipments()
  const misc = equipments.find((el) => el.equippedOn === 'misc')
  const helmet = equipments.find((el) => el.equippedOn === 'helmet')
  const ammo = equipments.find((el) => el.equippedOn === 'ammo')
  const armor = equipments.find((el) => el.equippedOn === 'armor')
  const lHand = equipments.find((el) => el.equippedOn === 'l-hand')
  const rHand = equipments.find((el) => el.equippedOn === 'r-hand')
  const magicItems = equipments.filter((el) => el.equippedOn?.includes('magic'))

  const convertedEquipment = (object?: EquipmentProps) => {
    if (object?.type === 'weapon') {
      return {
        primary: `+${object?.TAC0Bonus}`,
        secondary: object?.damage,
        imageRef: object?.imageRef
      }
    }
    if (object?.type === 'shield' || object?.type === 'armor') {
      return {
        secondary: object?.ACBonus,
        imageRef: object?.imageRef
      }
    }
    if (object?.type === 'ammo') {
      return {
        primary: object?.amount,
        imageRef: object?.imageRef
      }
    }
    return {
      primary: '',
      secondary: '',
      imageRef: object?.imageRef
    }
  }

  const mainEquipmentList = [
    {
      id: 'misc',
      imageRef: convertedEquipment(misc)?.imageRef,
      size: 'lg',
      primaryInfo: convertedEquipment(misc)?.primary,
      secondaryInfo: convertedEquipment(misc)?.secondary
    },
    {
      id: 'helmet',
      imageRef: convertedEquipment(helmet)?.imageRef,
      size: 'lg',
      primaryInfo: convertedEquipment(helmet)?.primary,
      secondaryInfo: convertedEquipment(helmet)?.secondary
    },
    {
      id: 'ammo',
      imageRef: convertedEquipment(ammo)?.imageRef,
      size: 'lg',
      primaryInfo: convertedEquipment(ammo).primary,
      secondaryInfo: convertedEquipment(ammo).secondary
    },
    {
      id: 'l-hand',
      imageRef: convertedEquipment(lHand)?.imageRef,
      size: 'lg',
      primaryInfo: convertedEquipment(lHand).primary,
      secondaryInfo: convertedEquipment(lHand).secondary
    },
    {
      id: 'armor',
      imageRef: convertedEquipment(armor)?.imageRef,
      size: 'lg',
      primaryInfo: convertedEquipment(armor).primary,
      secondaryInfo: convertedEquipment(armor).secondary
    },
    {
      id: 'r-hand',
      imageRef: convertedEquipment(rHand)?.imageRef,
      size: 'lg',
      primaryInfo: convertedEquipment(rHand).primary,
      secondaryInfo: convertedEquipment(rHand).secondary
    }
  ] as CombatEquipmentItemProps[]

  const emptyFilledMagicList = new Array(12).fill({})

  const magicItemsList = emptyFilledMagicList.map((el, index) => {
    const itemMagic = magicItems.find((item) => item.equippedOn.substring(5) === String(index))
    if (itemMagic) {
      return {
        id: itemMagic.equippedOn,
        imageRef: itemMagic.imageRef,
        size: 'md',
        primaryInfo: '',
        secondaryInfo: ''
      }
    }
    return {
      id: 'magic' + index,
      imageRef: '',
      size: 'md',
      primaryInfo: '',
      secondaryInfo: ''
    }
  }) 

  return { mainEquipmentList, magicItemsList }
}
