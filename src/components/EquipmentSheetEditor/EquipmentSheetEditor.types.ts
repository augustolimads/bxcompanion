import { EquipmentProps } from "src/stores/SheetCharacter/SheetCharacter.types"

export type EquipmentSheetEditorProps = {
    id?: string
    isItem?: boolean
}

export type EditEquipmentLocalProps = {
    label: EquipmentProps['label']
    type: EquipmentProps['type']
    TAC0Bonus?: EquipmentProps['TAC0Bonus']
    ACBonus?: EquipmentProps['ACBonus']
    damage?: EquipmentProps['damage']
    description?: EquipmentProps['description']
    amount?: EquipmentProps['amount']
    weight?: EquipmentProps['weight']
}
