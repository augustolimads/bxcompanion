import { useCharacter } from 'src/hooks/useCharacter/useCharacter'

export const useLevelControl = () => {
  const { character } = useCharacter()
  return { 
    charClass: character.class, 
    level: character.level,
    currentXP: character.currentXP,
    maxXP: character.maxXP
   }
}
