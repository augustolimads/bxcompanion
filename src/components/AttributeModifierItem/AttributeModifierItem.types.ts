import { AttrRef } from "../AttributeModifiers/AttributeModifiers.types"

export type AttributeModifierItemProps = {
    id?: string
    attrData: AttrData[]
    attrRef: AttrRef
}

export type AttrData = {
    id: string
    label: string
    value: string
}

export type AttrMod = {
    attrValue?: number
    attrMod?: number | string
}