import { useEffect, useState } from 'react'
import { actions, useCharacter } from 'src/stores/SheetCharacter'
import { HitpointProps } from 'src/stores/SheetCharacter/SheetCharacter.types'
import { formProps } from './HitpointEditor.types'

const forms:formProps[] = [
  {
    id: '2',
    label: 'PV atual',
    ref: 'current',
    value: 0
  },
  {
    id: '3',
    label: 'PV máximo',
    ref: 'max',
    value: 0
  }
]

const hdOptions = [
  {
    id: 'd4',
    value: 4
  },
  {
    id: 'd6',
    value: 6
  },
  {
    id: 'd8',
    value: 8
  },
  {
    id: 'd10',
    value: 10
  },
  {
    id: 'd12',
    value: 12
  },
]

export const useHitpointEditor = () => {
  const { character, dispatch } = useCharacter()
  const [formState, setFormState] = useState(forms)

  const editHpSheet = (props: HitpointProps) => {
    const numberConverted = {
      hd: Number(props.hd) || 0,
      current: Number(props.current) || 0,
      max: Number(props.max) || 0,
    }
    dispatch(actions.editHP(numberConverted))
}

useEffect(() => {
  setFormState([
    ...formState,
    {...forms[0], value: character.hp.hd},
   {...forms[1], value: character.hp.current},
   {...forms[2], value: character.hp.max}
  ])
},[character.hp.current, character.hp.max])

  return { forms, character, editHpSheet, hdOptions }
}
