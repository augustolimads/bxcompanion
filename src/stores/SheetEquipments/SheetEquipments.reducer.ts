import { sheetEquipmentsMock } from 'src/mocks/sheetEquipmentsMock'
import { Actions } from './SheetEquipments.enums'
import { EquipmentProps, EquipmentsReducerProps } from './SheetEquipments.types'

export const initialEquipmentState = sheetEquipmentsMock

export const sheetEquipmentsReducer = (
  state: EquipmentProps[],
  action: EquipmentsReducerProps
) => {
  switch (action.type) {
    case Actions.DECREASE_AMMO:
      const ammoIndex = state.findIndex((el) => el.id === action.payload.id)
      const newAmount = (state[ammoIndex].amount || 0) - 1
      const ammoElement = {
        ...state[ammoIndex],
        amount: newAmount
      }
      const newState = state.filter((el) => el.id !== action.payload.id)
      return [...newState, (state[ammoIndex] = ammoElement)]
    case Actions.CREATE_ITEM:
      const newItem = action.payload.newEquipment
      return [...state, newItem]
    case Actions.EDIT_ITEM:
      const editEquipIndex = state.findIndex(
        (el) => el.id === action.payload.values.equipId
      )
      const filteredEditedItemList = state.filter(
        (el, index) => index !== editEquipIndex
      )
      const amount = Number(action.payload.values?.amount) || 1
      const newEditedEquipment = {
        ...state[editEquipIndex],
        ...action.payload.values,
        amount,
        id: action.payload.values.equipmentSlug
      }

      return [...filteredEditedItemList, newEditedEquipment]
    case Actions.WEAR_EQUIPMENT:
      const wearIndex = state.findIndex(
        (el) => el.id === action.payload.equipId
      )
      const filteredWearItemList = state.filter(
        (el, index) => index !== wearIndex
      )
      const newWearEquipment = {
        ...state[wearIndex],
        equippedOn: action.payload.equippedOn
      }

      return [...filteredWearItemList, newWearEquipment]
    case Actions.UNEQUIP_EQUIPMENT:
      const unequipIndex = state.findIndex(
        (el) => el.id === action.payload.equipId
      )
      const filteredUnequipItemList = state.filter(
        (el, index) => index !== unequipIndex
      )
      const newUnequipEquipment = {
        ...state[unequipIndex],
        equippedOn: action.payload.equippedOn
      }

      return [...filteredUnequipItemList, newUnequipEquipment]
    default:
      return state
  }
}
