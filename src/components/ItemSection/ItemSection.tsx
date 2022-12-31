import { Equipment } from '../Equipment'
import { SheetList } from '../SheetList'
import { ItemSectionProps, useItemSection } from './index'

export const ItemSection = (props: ItemSectionProps) => {
  const { itens, createItem } = useItemSection()

  return (
    <SheetList buttonLabel="Novo Item" pb={12} onClick={createItem}>
      {itens &&
        itens.map((el) => (
          <Equipment
            isItem
            key={el.id}
            label={el.label}
            amount={el.amount}
            weight={el.weight}
            id={el.id}
            type={el.type}
            isEquipped={Boolean(el.equippedOn)}
          />
        ))}
    </SheetList>
  )
}
