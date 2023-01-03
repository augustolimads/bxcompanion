import { Actions } from "./SheetEquipments.enums"
import { CreateEquipmentProps, DecreaseAmmoProps, EditEquipmentProps, WearEquipmentProps } from "./SheetEquipments.types"

export const decreaseAmmo = (props: DecreaseAmmoProps) => {
    return {
      type: Actions.DECREASE_AMMO,
      payload: { ...props }
    }
  }
  
  export const createEquipment = (props: CreateEquipmentProps) => {
    return {
      type: Actions.CREATE_ITEM,
      payload: { newEquipment: props }
    }
  }
  
  export const editEquipment = (props: EditEquipmentProps) => {
    return {
      type: Actions.EDIT_ITEM,
      payload: { values: props }
    }
  }
  
  export const createItem = (props: CreateEquipmentProps) => {
    return {
      type: Actions.CREATE_ITEM,
      payload: { newEquipment: props }
    }
  }
  
  export const editItem = (props: EditEquipmentProps) => {
    return {
      type: Actions.EDIT_ITEM,
      payload: { values: props }
    }
  }
  
  export const wearEquipment = (props: WearEquipmentProps) => {
    return {
      type: Actions.WEAR_EQUIPMENT,
      payload: { ...props }
    }
  }
  
  export const unequipEquipment = (props: Partial<WearEquipmentProps>) => {
    return {
      type: Actions.WEAR_EQUIPMENT,
      payload: { ...props }
    }
  }
  