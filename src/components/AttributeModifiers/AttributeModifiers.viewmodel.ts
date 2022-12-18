import { useEffect, useState } from 'react'
import { useCharacter } from 'src/store/useCharacter/useCharacter'
import { attributeOtherMod } from 'src/utils/attributeOtherMod'
import { AttrData } from '../AttributeModifierItem/AttributeModifierItem.types'
import { AttrRef } from './AttributeModifiers.types'

const strData = [
  {
    id: '1',
    label: 'Abrir portas',
    value: '',
    options: ['1:6', '1:6', '1:6', '2:6', '3:6', '4:6', '5:6']
  }
]
const dexData = [
  {
    id: '1',
    label: 'CA',
    value: '',
    options: ['-3', '-2', '-1', '0', '+1', '+2', '+3']
  },
  {
    id: '1',
    label: 'Ataque à distância',
    value: '',
    options: ['-3', '-2', '-1', '0', '+1', '+2', '+3']
  },
  {
    id: '1',
    label: 'Iniciativa',
    value: '',
    options: ['-2', '-1', '-1', '0', '+1', '+1', '+2']
  }
]
const conData = [
  {
    id: '1',
    label: 'Pontos de vida',
    value: '',
    options: ['-3', '-2', '-1', '0', '+1', '+2', '+3']
  }
]
const intData = [
  {
    id: 'linguas-conhecidas',
    label: 'Línguas conhecidas',
    value: '',
    options: [
      'Nativa com dificuldade',
      'Nativa',
      'Nativa',
      'Nativa',
      'Nativa + 1 adicional',
      'Nativa + 2 adicionais',
      'Nativa + 3 adicionais'
    ]
  },
  {
    id: 'alfabetizacao',
    label: 'Alfabetização',
    value: '',
    options: [
      'Analfabeto',
      'Analfabeto',
      'Semi-analfabeto',
      'Alfabetizado',
      'Alfabetizado',
      'Alfabetizado',
      'Alfabetizado'
    ]
  }
]
const wisData = [
  {
    id: '1',
    label: 'Resistência à magia',
    value:'' ,
    options: ['-3', '-2', '-1', '0', '+1', '+2', '+3']
  }
]
const chaData = [
  {
    id: '1',
    label: 'Ajuste de reação',
    value: '',
    options: ['-2', '-1', '-1', '0', '+1', '+1', '+2']
  },
  {
    id: '1',
    label: 'Nº máximo de seguidores',
    value: '',
    options: ['1', '2', '3', '4', '5', '6', '7']
  },
  {
    id: '1',
    label: 'lealdade de seguidores',
    value: '',
    options: ['4', '5', '6', '7', '8', '9', '10']
  }
]

export const useAttributeModifiers = (attrRef: AttrRef) => {
  const { character } = useCharacter()
  const attr = character.attr[attrRef]
  const attrValue = attr

  const [attrData, setAttrData] = useState<AttrData[]>(strData)

  const changeAttrData = () => {
    switch (attrRef) {
      case 'str':
        return setAttrData([
          {
            ...strData[0],
            value: attributeOtherMod(attrValue || 0, strData[0].options)
          }
        ])
      case 'dex':
        return setAttrData([
          {...dexData[0], value: attributeOtherMod(attrValue || 0, dexData[0].options)},
          {...dexData[1], value: attributeOtherMod(attrValue || 0, dexData[1].options)},
          {...dexData[2], value: attributeOtherMod(attrValue || 0, dexData[2].options)}
        ])
      case 'con':
        return setAttrData([ {
          ...conData[0],
          value: attributeOtherMod(attrValue || 0, conData[0].options)
        }])
      case 'int':
        return setAttrData([
          {...intData[0], value: attributeOtherMod(attrValue || 0, intData[0].options)},
          {...intData[1], value: attributeOtherMod(attrValue || 0, intData[1].options)},
        ])
      case 'wis':
        return setAttrData([ {
          ...wisData[0],
          value: attributeOtherMod(attrValue || 0, wisData[0].options)
        }])
      case 'cha':
        return setAttrData([
          {...chaData[0], value: attributeOtherMod(attrValue || 0, chaData[0].options)},
          {...chaData[1], value: attributeOtherMod(attrValue || 0, chaData[1].options)},
          {...chaData[2], value: attributeOtherMod(attrValue || 0, chaData[2].options)}
        ])
      default:
        return setAttrData(strData)
    }
  }

  useEffect(() => {
    changeAttrData()
  }, [attrRef, attrValue])

  return { attrData }
}
