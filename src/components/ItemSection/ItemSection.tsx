import { Equipment } from '../Equipment'
import { SheetList } from '../SheetList'
import { ItemSectionProps, useItemSection } from './index'

export const ItemSection = (props: ItemSectionProps) => {
  const { itens } = useItemSection()

  return (
    <SheetList buttonLabel="Novo Item" pb={12}>
      {itens &&
        itens.map((el) => (
          <Equipment
            isItem
            label={el.label}
            amount={el.amount}
            weight={el.weight}            
          />
        ))}
    </SheetList>
  )
}
