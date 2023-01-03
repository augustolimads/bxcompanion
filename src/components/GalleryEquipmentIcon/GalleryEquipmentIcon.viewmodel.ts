import { useState } from "react"
import { GalleryEquipmentIconProps } from "./GalleryEquipmentIcon.types"

export const useGalleryEquipmentIcon = (props: GalleryEquipmentIconProps) => {
    const [selectedIcon, setSelectedIcon] = useState('')
    const getName = (id: string) => setSelectedIcon(id)

    const handleSubmit = () => {
        if(selectedIcon.length > 0) {
            props.getEquipmentIconName(selectedIcon)
            props.onClose()
        }
    }
    return {selectedIcon, getName, handleSubmit}
}