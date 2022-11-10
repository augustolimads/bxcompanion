import { useSheetMenu } from 'src/hooks/useSheetMenu/useSheetMenu'
import { AbilitySection } from '../AbilitySection'
import { AbilitySectionAside } from '../AbilitySectionAside'
import { CombatSection } from '../CombatSection'
import { ItemSection } from '../ItemSection'
import { ItemSectionAside } from '../ItemSectionAside'
import { NoteSection } from '../NoteSection'
import { SheetContentContainer } from '../SheetContentContainer'
import { SpellSection } from '../SpellSection'
import { SheetContentDisplayProps, useSheetContentDisplay } from './index'

export const SheetContentDisplay = (props: SheetContentDisplayProps) => {
  const { result } = useSheetContentDisplay()
  const { menuActive } = useSheetMenu()

  switch (menuActive) {
    case 0:
      return (
        <SheetContentContainer>
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
        <SheetContentContainer aside={<AbilitySectionAside />}>
          <AbilitySection />
        </SheetContentContainer>
      )
    case 3:
      return (
        <SheetContentContainer>
          <SpellSection />
        </SheetContentContainer>
      )
    default:
      return (
        <SheetContentContainer>
          <NoteSection />
        </SheetContentContainer>
      )
  }
}
