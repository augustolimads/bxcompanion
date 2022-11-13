import { attributeModifier } from "src/utils/attributeModifier"

export const useAttribute = (value: number) => {
    const modifier = attributeModifier(value)
    const isPositive = modifier > 0 ? '+' : ''
    return {modifier, isPositive}
}