
export type MenuActiveStateProps = number

export type SheetMenuProps = {
  id?: string
  children: JSX.Element | JSX.Element[]
}

export type ReducerProps = {
  type: string
  payload: number
}

export type useSheetMenuProps = {
  sheetMenu: number
  dispatch: ({type, payload}:ReducerProps) => void
}