import { useCharacter } from 'src/stores/SheetCharacter'

export const useMainContent = () => {
  const { character } = useCharacter()
  const attr = character.attr
  const saves = character.saves
  return {
    ...attr,
    ...saves
  }
}
