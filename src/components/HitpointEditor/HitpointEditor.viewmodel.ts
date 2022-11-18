import { useCharacter } from 'src/hooks/useCharacter/useCharacter'
import { editHpProps, formProps } from './HitpointEditor.types'

export const useHitpointEditor = () => {
  const { character, setCharacter } = useCharacter()

  const forms:formProps[] = [
    {
      id: '1',
      label: 'DV',
      ref: 'hd',
      value: character.hp.hd
    },
    {
      id: '2',
      label: 'PV atual',
      ref: 'current',
      value: character.hp.current
    },
    {
      id: '3',
      label: 'PV máximo',
      ref: 'max',
      value: character.hp.max
    }
  ]

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

  return { forms, character, editHpSheet }
}
