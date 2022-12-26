import { useCharacter } from "src/stores/SheetCharacter"

export const useItemSectionAside = () => {
    const {character} = useCharacter()

    const distances = character.itens.distance
    const coins = character.itens.coins

    return {distances, coins}
}