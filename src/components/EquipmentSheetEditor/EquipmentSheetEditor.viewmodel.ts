import { useState } from 'react'
import slugify from 'react-slugify'
import { useCharacter } from 'src/hooks/useCharacter/useCharacter'
import { EquipTypeProps } from 'src/hooks/useCharacter/useCharacter.types'
import { EditEquipmentProps } from './EquipmentSheetEditor.types'

export const useEquipmentSheetEditor = (equipId?: string) => {
  const { character, setCharacter } = useCharacter()
  const [equipType, setEquipType] = useState(
    character.itens.equipments.find((el) => el.id === equipId)?.type
  )

  function editEquipmentSheet(values: EditEquipmentProps) {
    const equipIndex = character.itens.equipments.findIndex(
      (el) => el.id === equipId
    )

    const equipmentList = character.itens.equipments
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
      ...(character.itens.equipments[equipIndex] = {
        ...values,
        amount: Number(values.amount),
        id: equipmentSlug
      })
    })
  }

  const getEquipmentStats = () => {
    const result = character.itens.equipments.find((el) => el.id === equipId)
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
