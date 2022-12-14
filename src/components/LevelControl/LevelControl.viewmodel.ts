import { useCharacter } from "src/stores/SheetCharacter"

export const useLevelControl = () => {
  const { character } = useCharacter()
  return {
    charClass: character.charClass,
    level: character.level.value,
    currentXP: character.level.currentXP,
    maxXP: character.level.maxXP
   }
}
