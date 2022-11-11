import { Equipment } from '../Equipment'
import { SheetList } from '../SheetList'
import { ItemSectionProps, useItemSection } from './index'

export const ItemSection = (props: ItemSectionProps) => {
  const { result } = useItemSection()

  return (
    <SheetList buttonLabel='Novo Item'>
      <Equipment 
        label='Tocha'
        amount={2}
      />
      <Equipment 
        label='Saco de dormir'
      />
      <Equipment 
        label='Pregos'
        amount={2}
      />
      <Equipment 
        label='corda de 10m'
      />
    </SheetList>
  )
}
