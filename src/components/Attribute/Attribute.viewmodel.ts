import { attributeModifier } from "src/utils/attributeModifier"
import { formatBonus } from "src/utils/formatBonus"

export const useAttribute = (value: number) => {
    const modifier = formatBonus(attributeModifier(value))
    return {modifier}
}