import { Equipment } from '../Equipment'
import { SheetList } from '../SheetList'
import { CombatSectionProps, useCombatSection } from './index'

export const CombatSection = (props: CombatSectionProps) => {
  const { equipmentList, createEquipment } = useCombatSection()

  return (
    <SheetList buttonLabel="Novo Equipamento" onClick={createEquipment} pb={12}>
      {equipmentList.map((equipment) => (
        <Equipment
          key={equipment.id}
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
