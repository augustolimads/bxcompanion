import { useCharacter } from 'src/stores/SheetCharacter'
import { EquipmentProps } from 'src/stores/SheetCharacter/SheetCharacter.types'
import { CombatEquipmentItemProps } from '../CombatEquipmentItem'

export const useCombatSection = () => {
  const { character, dispatch } = useCharacter()
  const equipmentList = character.itens.itemList
  const misc = equipmentList.find(el => el.equippedOn === 'misc')
  const helmet = equipmentList.find(el => el.equippedOn === 'helmet')
  const ammo = equipmentList.find(el => el.equippedOn === 'ammo')
  const armor = equipmentList.find(el => el.equippedOn === 'armor')
  const lHand = equipmentList.find(el => el.equippedOn === 'l-hand')
  const rHand = equipmentList.find(el => el.equippedOn === 'r-hand')

  const convertedEquipment = (object?: EquipmentProps) => {
    if(object?.type === 'weapon') {
      return {
        primary: `+${object?.TAC0Bonus}`,
        secondary: object?.damage,
        imageRef: object?.imageRef
      }
    }
    if(object?.type === 'shield' || object?.type === 'armor' ) {
      return {
        secondary: object?.ACBonus,
        imageRef: object?.imageRef
      }
    }
    if(object?.type === 'ammo') {
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
      secondaryInfo: convertedEquipment(misc)?.secondary,
    },
    {
      id: 'helmet',
      imageRef: convertedEquipment(helmet)?.imageRef,
      size: 'lg',
      primaryInfo: convertedEquipment(helmet)?.primary,
      secondaryInfo: convertedEquipment(helmet)?.secondary,
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
    },
  ] as CombatEquipmentItemProps[]

  const magicItensList = [
    {
      imageRef: '',
      size: 'md',
      primaryInfo: '',
      secondaryInfo: ''
    },
    {
      imageRef: '',
      size: 'md',
      primaryInfo: '',
      secondaryInfo: ''
    },
    {
      imageRef: '',
      size: 'md',
      primaryInfo: '',
      secondaryInfo: ''
    },
    {
      imageRef: '',
      size: 'md',
      primaryInfo: '',
      secondaryInfo: ''
    },
    {
      imageRef: '',
      size: 'md',
      primaryInfo: '',
      secondaryInfo: ''
    },
    {
      imageRef: '',
      size: 'md',
      primaryInfo: '',
      secondaryInfo: ''
    },
    {
      imageRef: '',
      size: 'md',
      primaryInfo: '',
      secondaryInfo: ''
    },
    {
      imageRef: '',
      size: 'md',
      primaryInfo: '',
      secondaryInfo: ''
    },
    {
      imageRef: '',
      size: 'md',
      primaryInfo: '',
      secondaryInfo: ''
    },
    {
      imageRef: '',
      size: 'md',
      primaryInfo: '',
      secondaryInfo: ''
    },
    {
      imageRef: '',
      size: 'md',
      primaryInfo: '',
      secondaryInfo: ''
    },
    {
      imageRef: '',
      size: 'md',
      primaryInfo: '',
      secondaryInfo: ''
    },
  ] as CombatEquipmentItemProps[]

  return { mainEquipmentList, magicItensList }
}
