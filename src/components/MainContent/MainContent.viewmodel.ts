import { useCharacter } from 'src/stores/useCharacter/useCharacter'

export const useMainContent = () => {
  const { character } = useCharacter()
  const attr = character.attr
  const saves = character.saves
  return {
    ...attr,
    ...saves
  }
}
