import { useCharacter } from "src/store/useCharacter/useCharacter"

export const useItemSection = () => {
    const {character} = useCharacter()
    const itens = character.itens.itemList.filter(el => el.type === 'item')
    return {itens}
}
