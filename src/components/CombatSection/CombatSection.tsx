import { Equipment } from '../Equipment'
import { SheetList } from '../SheetList'
import { CombatSectionProps, useCombatSection } from './index'

export const CombatSection = (props: CombatSectionProps) => {
  const { result } = useCombatSection()

  return (
    <SheetList buttonLabel="Novo Equipamento">
      <Equipment label="Espada longa" bonus={5} damage="d8" />
      <Equipment label="Armadura de couro" bonus={1} />
      <Equipment label="Shield" bonus={1} />
      <Equipment label='flechas' amount={10} />
    </SheetList>
  )
}
