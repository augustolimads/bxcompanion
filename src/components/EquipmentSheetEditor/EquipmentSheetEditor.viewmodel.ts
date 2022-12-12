import { useState } from 'react'
import slugify from 'react-slugify'
import { useCharacter } from 'src/hooks/useCharacter/useCharacter'
import { EquipTypeProps } from 'src/hooks/useCharacter/useCharacter.types'
import { EditEquipmentProps } from './EquipmentSheetEditor.types'

export const useEquipmentSheetEditor = (equipId?: string, isItem: boolean) => {
  const { character, setCharacter } = useCharacter()
  const [equipType, setEquipType] = useState(
    character.itens.itemList.find((el) => el.id === equipId)?.type
  )

  function editEquipmentSheet(values: EditEquipmentProps) {
    const equipmentList = character.itens.itemList

    const equipIndex = equipmentList.findIndex(
      (el) => el.id === equipId
    )
    
    const equipmentListSize = equipmentList.length
    let excedentEquipmentListSize = equipmentListSize
    const slug = slugify(values.label)
    const equipmentSlug = `${slug}-${excedentEquipmentListSize}`
    const hasSlugOnEquipmentList =
      equipmentList.findIndex((el) => el.id === equipmentSlug) === -1
        ? false
        : true
    while (hasSlugOnEquipmentList) {
      excedentEquipmentListSize + 1
    }

    setCharacter({
      ...character,
      ...(equipmentList[equipIndex] = {
        ...values,
        amount: Number(values.amount),
        id: equipmentSlug
      })
    })
  }

  const getEquipmentStats = () => {
    const result = character.itens.itemList.find((el) => el.id === equipId)
    return result
  }

  function onEquipTypeElements(type: EquipTypeProps) {
    setEquipType(type)
  }
  return {
    onEquipTypeElements,
    getEquipmentStats,
    equipType,
    editEquipmentSheet
  }
}
