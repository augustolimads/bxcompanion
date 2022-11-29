import { useCharacter } from 'src/hooks/useCharacter/useCharacter'
import { Equipment } from '../Equipment'
import { SheetList } from '../SheetList'
import { CombatSectionProps, useCombatSection } from './index'

export const CombatSection = (props: CombatSectionProps) => {
  const { result } = useCombatSection()
  const { character } = useCharacter()

  return (
    <SheetList buttonLabel="Novo Equipamento">
      {character.itens.equipments.map((equipment) => (
        <Equipment
          id={equipment.id}
          label={equipment.label}
          bonus={equipment.bonus}
          damage={equipment.damage}
          amount={equipment.amount}
        />
      ))}
    </SheetList>
  )
}
