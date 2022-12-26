import {
  AttributeProps, CreateEquipmentProps, HitpointProps
} from 'src/stores/SheetCharacter/SheetCharacter.types'
import { Actions } from './SheetCharacter.enums'
import {
  CharacterProps,
  DecreaseAmmoProps,
  EditACProps,
  EditEquipment,
  EditLevelSheetProps,
  EditTAC0Props,
  SaveProps
} from './SheetCharacter.types'

export const editNameSheet = (props: Partial<CharacterProps>) => {
  return {
    type: Actions.EDIT_NAME,
    payload: { ...props }
  }
}

export const editLevelSheet = (props: EditLevelSheetProps) => {
  return {
    type: Actions.EDIT_LEVEL,
    payload: { ...props }
  }
}

export const editAttribute = (props: AttributeProps) => {
  return {
    type: Actions.EDIT_ATTRIBUTE,
    payload: { ...props }
  }
}

export const editSaves = (props: SaveProps) => {
  return {
    type: Actions.EDIT_SAVES,
    payload: { ...props }
  }
}

export const editHP = (props: HitpointProps) => {
  return {
    type: Actions.EDIT_HP,
    payload: { ...props }
  }
}

export const increaseHitpoint = () => {
  return {
    type: Actions.INCREASE_HITPOINT
  }
}

export const decreaseHitpoint = () => {
  return {
    type: Actions.DECREASE_HITPOINT
  }
}

export const editAC = (props: EditACProps) => {
  return {
    type: Actions.EDIT_AC,
    payload: { ...props }
  }
}

export const editTAC0 = (props: EditTAC0Props) => {
  return {
    type: Actions.EDIT_TAC0,
    payload: { ...props }
  }
}

export const decreaseAmmo = (props: DecreaseAmmoProps) => {
  return {
    type: Actions.DECREASE_AMMO,
    payload: { ...props }
  }
}

export const createEquipment = (props: CreateEquipmentProps) => {
  return {
    type: Actions.CREATE_EQUIPMENT,
    payload: { ...props }
  }
}

export const editEquipment = (props: EditEquipment) => {
  return {
    type: Actions.EDIT_EQUIPMENT,
    payload: { ...props }
  }
}
