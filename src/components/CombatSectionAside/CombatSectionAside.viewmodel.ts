import { useCharacter } from "src/hooks/useCharacter/useCharacter"

export const useCombatSectionAside = () => {
    const {character} = useCharacter()
    const ac = character.combat.AC + character.combat.ACExtra
    const tac0 = character.combat.tac0 + character.combat.tac0Extra
    // const strMod = attributeModifier(character.attr[0].value)
    // const dexMod = attributeModifier(character.attr[1].value)
    // const meelee = tac0 - strMod
    // const range = tac0 - dexMod
    return {ac, tac0}
}