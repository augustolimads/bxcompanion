import { AttributeModifierItem } from '../AttributeModifierItem'
import { AttributeModifiersProps, useAttributeModifiers } from './index'

export const AttributeModifiers = (props: AttributeModifiersProps) => {
  const { attrData } = useAttributeModifiers(props.attrRef)

  return <AttributeModifierItem attrData={attrData} attrRef={props.attrRef} />  
}
