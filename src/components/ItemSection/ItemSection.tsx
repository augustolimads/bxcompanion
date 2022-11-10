import { SheetList } from '../SheetList'
import { SimpleNote } from '../SimpleNote'
import { ItemSectionProps, useItemSection } from './index'

export const ItemSection = (props: ItemSectionProps) => {
  const { result } = useItemSection()

  return (
    <SheetList buttonLabel='Novo Item'>
      <SimpleNote
        title="Ataque Básico à Distância"
        content="Padrão / à distância 20, Padrão / à distância 20, Padrão / à "
      />
      <SimpleNote
        title="Ataque Básico à Distância"
        content="Padrão / à distância 20, Padrão / à distância 20, Padrão / à "
      />
      <SimpleNote
        title="Ataque Básico à Distância"
        content="Padrão / à distância 20, Padrão / à distância 20, Padrão / à "
      />
      <SimpleNote
        title="Ataque Básico à Distância"
        content="Padrão / à distância 20, Padrão / à distância 20, Padrão / à "
      />
      <SimpleNote
        title="Ataque Básico à Distância"
        content="Padrão / à distância 20, Padrão / à distância 20, Padrão / à "
      />
      <SimpleNote
        title="Ataque Básico à Distância"
        content="Padrão / à distância 20, Padrão / à distância 20, Padrão / à "
      />
      <SimpleNote
        title="Ataque Básico à Distância"
        content="Padrão / à distância 20, Padrão / à distância 20, Padrão / à "
      />
      <SimpleNote
        title="Ataque Básico à Distância"
        content="Padrão / à distância 20, Padrão / à distância 20, Padrão / à "
      />
    </SheetList>
  )
}
