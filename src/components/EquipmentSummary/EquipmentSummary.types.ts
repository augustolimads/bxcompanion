import { EquipmentProps } from "src/stores/SheetEquipments/SheetEquipments.types"

export type EquipmentSummaryProps = {
    id?: string
    equippedItem: Partial<EquipmentProps>
}
