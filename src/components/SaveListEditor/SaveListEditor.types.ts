export type SaveListEditorProps = {
    id?: string
}

export type EditSaveProps = {
    vsMagic: number
    death: number
    wand: number
    paralysis: number
    breath: number
    spells: number
}

export type saveId = 'vsMagic' | 'death' | 'wand' | 'paralysis' | 'breath' | 'spells'

export type saveListProps = {
    id: saveId
    label: string
    abbreviate: string
    value: number
}