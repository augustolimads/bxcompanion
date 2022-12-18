import { useEffect, useState } from 'react'
import { useCharacter } from 'src/store/useCharacter/useCharacter'
import { editHpProps, formProps } from './HitpointEditor.types'

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
  const { character, setCharacter } = useCharacter()
  const [formState, setFormState] = useState(forms)

  const editHpSheet = ({hd, current, max}: editHpProps) => {
    setCharacter({
        ...character,
        hp: {
          hd,
          current,
          max
        }
    })
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
