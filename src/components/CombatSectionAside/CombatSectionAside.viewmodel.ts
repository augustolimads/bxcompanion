import { useCharacter } from "src/hooks/useCharacter/useCharacter"

export const useCombatSectionAside = () => {
    const {character} = useCharacter()
    const ac = character.combat.AC + character.combat.ACExtra
    const tac0 = character.combat.tac0 + character.combat.tac0Extra
    return {ac, tac0}
}