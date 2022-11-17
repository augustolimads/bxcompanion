import { useEffect, useState } from 'react'
import { useCharacter } from 'src/hooks/useCharacter/useCharacter'
import { attributeModifier } from 'src/utils/attributeModifier'
import { formatBonus } from 'src/utils/formatBonus'
import { AttrRef } from '../AttributeModifiers/AttributeModifiers.types'
import { AttrMod } from './AttributeModifierItem.types'

export const useAttributeModifierItem = (attrRef: AttrRef) => {
  const { character } = useCharacter()
  const [attrMod, setAttrMod] = useState<AttrMod>()
  const attr = character.attr.find((el) => el.ref === attrRef)
  const attrValue = attr?.value || 0
  useEffect(() => {
    const attrMod = formatBonus(attributeModifier(attrValue))
    setAttrMod({
        attrValue, attrMod
    })
  }, [attrRef, attr])
  return { ...attrMod }
}
