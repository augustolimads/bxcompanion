import { EquipTypeProps } from "src/stores/useCharacter/useCharacter.types"

export type EquipmentSheetEditorProps = {
    id?: string
    isItem?: boolean
}

export type EditEquipmentProps = {
    label: string
    type: EquipTypeProps
    TAC0Bonus?: number
    ACBonus?: number
    damage?: string
    description?: string
    equipped?: boolean
    amount?: number
}
