import { useCharacter } from "src/hooks/useCharacter/useCharacter"
import { attributeModifier } from "src/utils/attributeModifier"

export const useCombatSectionAside = () => {
    const {character} = useCharacter()
    const ac = character.combat.AC
    const strMod = attributeModifier(character.attr[0].value)
    const dexMod = attributeModifier(character.attr[1].value)
    const tac0 = character.combat.tac0
    const meelee = tac0 - strMod
    const range = tac0 - dexMod
    return {ac, tac0, meelee, range}
}