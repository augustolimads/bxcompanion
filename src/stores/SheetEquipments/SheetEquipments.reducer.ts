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
      const newState = state.filter(el => el.id !== action.payload.id)

      return [...newState, (state[ammoIndex] = ammoElement)]
    case Actions.CREATE_ITEM:
      const itemList = state
      itemList.push(action.payload.newEquipment)
      return {
        ...state,
        ...(state = itemList)
      }
    case Actions.EDIT_ITEM:
      const equipmentList = state
      const equipIndex = equipmentList.findIndex(
        (el) => el.id === action.payload.values.equipId
      )
      const amount = Number(action.payload.values?.amount) || 1
      return {
        ...state,
        ...(equipmentList[equipIndex] = {
          ...action.payload.values,
          amount,
          id: action.payload.values.equipmentSlug
        })
      }
    case Actions.WEAR_EQUIPMENT:
      console.log('reducer wear')
      const wearEquipmentList = state
      const wearEquipIndex = wearEquipmentList.findIndex(
        (el) => el.id === action.payload.equipId
      )
      return {
        ...state,
        ...(wearEquipmentList[wearEquipIndex] = {
          ...wearEquipmentList[wearEquipIndex],
          equippedOn: action.payload.equippedOn
        })
      }
    case Actions.UNEQUIP_EQUIPMENT:
      console.log('reducer unequip')
      const unequipEquipmentList = state
      const unequipEquipIndex = unequipEquipmentList.findIndex(
        (el) => el.id === action.payload.equipId
      )
      return {
        ...state,
        ...(unequipEquipmentList[unequipEquipIndex] = {
          ...unequipEquipmentList[unequipEquipIndex],
          equippedOn: ''
        })
      }
    default:
      return state
  }
}
