export type EquipTypeProps = 'weapon' | 'armor' | 'ammo' | 'item' | 'shield' | 'helmet' | 'magic'

export type EquipmentProps = {
    equippedOn: string
    id: string
    type: EquipTypeProps
    label: string
    TAC0Bonus?: number
    ACBonus?: number
    damage?: string
    amount?: number
    description?: string
    weight?: number
    imageRef?: string
  }

export type DecreaseAmmoProps = {
    id: EquipmentProps['id']
  }
  
  export type CreateEquipmentProps = {
    id: EquipmentProps['id']
    label: EquipmentProps['label']
    type: EquipmentProps['type']
  }
  
  export type EditEquipmentProps = {
    equipId?: EquipmentProps['id']
    equipmentSlug: EquipmentProps['id']
    equippedOn?: string
    type?: EquipTypeProps
    label: string
    TAC0Bonus?: number
    ACBonus?: number
    damage?: string
    amount?: number
    description?: string
    weight?: number
  }
  
  export type WearEquipmentProps = {
    equipId: string
    equippedOn: string
  }

  export type EquipmentsProviderProps = {
    children: JSX.Element
  }
  
  export type EquipmentsContextProps = {
    equipments: EquipmentProps[]
    dispatch: any
  }

  export type EquipmentsReducerProps = {
  type: string
  payload: any
}
