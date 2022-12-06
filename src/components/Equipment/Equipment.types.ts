import { EquipTypeProps } from 'src/hooks/useCharacter/useCharacter.types'

export type EquipmentProps = {
    id?: string
    type?: EquipTypeProps
    isEquipped?: boolean
    label: string
    TAC0Bonus?: number
    ACBonus?: number
    damage?: string
    amount?: number
    weight?: number
}
