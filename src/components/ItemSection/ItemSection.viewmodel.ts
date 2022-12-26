import { useCharacter } from "src/stores/SheetCharacter"

export const useItemSection = () => {
    const {character} = useCharacter()
    const itens = character.itens.itemList.filter(el => el.type === 'item')
    return {itens}
}
