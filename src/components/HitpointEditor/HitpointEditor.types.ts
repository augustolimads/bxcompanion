export type HitpointEditorProps = {
    id?: string
}

export type formProps = {
    id: string
    label: string
    ref: 'hd' | 'current' | 'max'
    value: number
  } 

export type editHpProps = {
    hd: number
    current: number
    max: number
}