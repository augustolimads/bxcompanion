import { Equipment } from '../Equipment'
import { SheetList } from '../SheetList'
import { CombatSectionProps, useCombatSection } from './index'

export const CombatSection = (props: CombatSectionProps) => {
  const { character, createEquipment } = useCombatSection()

  return (
    <SheetList buttonLabel="Novo Equipamento" onClick={createEquipment}>
      {character.itens.equipments.map((equipment) => (
        <Equipment
          id={equipment.id}
          type={equipment.type}
          isEquipped={equipment.equipped}
          label={equipment.label}
          TAC0Bonus={equipment.TAC0Bonus}
          ACBonus={equipment.ACBonus}
          damage={equipment.damage}
          amount={equipment.amount}
        />
      ))}
    </SheetList>
  )
}
