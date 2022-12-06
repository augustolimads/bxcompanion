import { useEffect, useState } from 'react'
import { useCharacter } from 'src/hooks/useCharacter/useCharacter'
import { attributeModifier } from 'src/utils/attributeModifier'

export const useSaveList = () => {
  const { character } = useCharacter()
  const wisValue = character.attr.wis
  const [vsMagicMod, setVsMagicMod] = useState<number>(0)

  const saveList = [
    {
      id: 'vsMagic',
      label: 'Vs Magia',
      abbreviate: 'vs magia',
      value: character.saves.vsMagic
    },
    {
      id: 'death',
      label: 'Morte e veneno',
      abbreviate: 'morte',
      value: character.saves.death
    },
    {
      id: 'wand',
      label: 'Varinhas',
      abbreviate: 'varinhas',
      value: character.saves.wand
    },
    {
      id: 'paralysis',
      label: 'Paralisia',
      abbreviate: 'paralisia',
      value: character.saves.paralysis
    },
    {
      id: 'breath',
      label: 'Baforada',
      abbreviate: 'sopro',
      value: character.saves.breath
    },
    {
      id: 'spells',
      label: 'Feitiços',
      abbreviate: 'feitiços',
      value: character.saves.spells
    }
  ]

  useEffect(() => {
    setVsMagicMod(attributeModifier(wisValue || 0))
  }, [wisValue])

  return { vsMagicMod, saveList }
}
