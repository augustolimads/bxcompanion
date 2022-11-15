import { RefObject } from "react"

export type CharacterSheetEditorProps = {
    id?: string
    label: string
    isOpen: boolean
    onClose: () => void
    btnRef: RefObject<HTMLButtonElement | HTMLDivElement>
    children: JSX.Element
}
