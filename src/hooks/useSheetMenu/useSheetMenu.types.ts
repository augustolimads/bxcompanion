export type MenuActiveStateProps = number

export type SheetMenuProps = {
    id?: string
    children: JSX.Element | JSX.Element[]
}

export type SheetMenuContextProps = {
    handleMenuActive: (index: number) => void
    menuActive: MenuActiveStateProps
}