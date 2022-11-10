import { useSheetMenu } from 'src/hooks/useSheetMenu/useSheetMenu'
import { CombatSection } from '../CombatSection'
import { CombatSectionAside } from '../CombatSectionAside'
import { ItemSection } from '../ItemSection'
import { ItemSectionAside } from '../ItemSectionAside'
import { NoteSection } from '../NoteSection'
import { NoteSectionAside } from '../NoteSectionAside'
import { SheetContentContainer } from '../SheetContentContainer'
import { SpellSection } from '../SpellSection'
import { SpellSectionAside } from '../SpellSectionAside'
import { SheetContentDisplayProps, useSheetContentDisplay } from './index'

export const SheetContentDisplay = (props: SheetContentDisplayProps) => {
  const { result } = useSheetContentDisplay()
  const { menuActive } = useSheetMenu()

  switch (menuActive) {
    case 0:
      return (
        <SheetContentContainer aside={<CombatSectionAside />}>
          <CombatSection />
        </SheetContentContainer>
      )
    case 1:
      return (
        <SheetContentContainer aside={<ItemSectionAside />}>
          <ItemSection />
        </SheetContentContainer>
      )
    case 2:
      return (
        <SheetContentContainer aside={<SpellSectionAside />}>
          <SpellSection />
        </SheetContentContainer>
      )
    case 3:
      return (
        <SheetContentContainer aside={<NoteSectionAside />}>
          <NoteSection />
        </SheetContentContainer>
      )
    default:
      return (
        <SheetContentContainer>
          <CombatSection />
        </SheetContentContainer>
      )
  }
}
