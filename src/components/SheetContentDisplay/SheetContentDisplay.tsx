import { useSheetMenu } from 'src/stores/SheetMenu'
import { Areas } from 'src/stores/SheetMenu/SheetMenu.enums'
import { CombatSection } from '../CombatSection'
import { CombatSectionAside } from '../CombatSectionAside'
import { ItemSection } from '../ItemSection'
import { ItemSectionAside } from '../ItemSectionAside'
import { NoteSection } from '../NoteSection'
import { NoteSectionAside } from '../NoteSectionAside'
import { SheetContentContainer } from '../SheetContentContainer'
import { SpellSection } from '../SpellSection'
import { SpellSectionAside } from '../SpellSectionAside'

export const SheetContentDisplay = () => {
  const { sheetMenu } = useSheetMenu()

  switch (sheetMenu) {
    case Areas.COMBAT:
      return (
        <SheetContentContainer aside={<CombatSectionAside />}>
          <CombatSection />
        </SheetContentContainer>
      )
    case Areas.ITENS:
      return (
        <SheetContentContainer aside={<ItemSectionAside />}>
          <ItemSection />
        </SheetContentContainer>
      )
    case Areas.SPELLS:
      return (
        <SheetContentContainer aside={<SpellSectionAside />}>
          <SpellSection />
        </SheetContentContainer>
      )
    case Areas.NOTES:
      return (
        <SheetContentContainer aside={<NoteSectionAside />}>
          <NoteSection />
        </SheetContentContainer>
      )
    default:
      return (
        <SheetContentContainer aside={<CombatSectionAside />}>
          <CombatSection />
        </SheetContentContainer>
      )
  }
}
