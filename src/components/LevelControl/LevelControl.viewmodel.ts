import { useCharacter } from 'src/store/useCharacter/useCharacter'

export const useLevelControl = () => {
  const { character } = useCharacter()
  return {
    charClass: character.class,
    level: character.level.value,
    currentXP: character.level.currentXP,
    maxXP: character.level.maxXP
   }
}
