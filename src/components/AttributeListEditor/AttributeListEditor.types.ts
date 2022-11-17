export type AttributeListEditorProps = {
    id?: string
    attrRef: "str" | "dex" | "con" | "int" | "wis" | "cha"
    label: string
}


export type EditAttributeProps = {
    str: number
    dex: number
    con: number
    int: number
    wis: number
    cha: number
}