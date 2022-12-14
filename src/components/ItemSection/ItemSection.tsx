import { Equipment } from '../Equipment'
import { SheetList } from '../SheetList'
import { useItemSection } from './index'

export const ItemSection = () => {
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
            ACBonus={el.ACBonus}
            TAC0Bonus={el.TAC0Bonus}
            damage={el.damage}
          />
        ))}
    </SheetList>
  )
}
