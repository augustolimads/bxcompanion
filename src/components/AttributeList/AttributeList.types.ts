export type AttributeListProps = {
    id?: string
}

export type AttrListProps = {
    id: 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha'
    label: string
    abbreviate: string
    value: number
}