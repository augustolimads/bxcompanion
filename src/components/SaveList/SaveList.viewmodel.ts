import { useEffect, useState } from "react"
import { useCharacter } from "src/hooks/useCharacter/useCharacter"
import { attributeModifier } from "src/utils/attributeModifier"

export const useSaveList = () => {
    const {character} = useCharacter()
    const wisValue = character.attr[4].value
    const [vsMagicMod, setVsMagicMod] = useState<number>(0)


    useEffect(() => {
        setVsMagicMod(attributeModifier(wisValue || 0))
    },[wisValue])

    return {vsMagicMod}
}