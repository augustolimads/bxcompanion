import { useCharacter } from 'src/stores/useCharacter/useCharacter'

export const useHitpoint = () => {
  const { character, setCharacter } = useCharacter()
  const currentHPRaw = character.hp.current
  const maxHP = character.hp.max
  const operation = currentHPRaw - maxHP
  const isExceded = operation > 0

  const excededHP = isExceded ? `+${operation}` : ''

  const currentHP = isExceded ? maxHP : currentHPRaw

  const fullCurrentHP = isExceded ? currentHP + operation : currentHP

  const increaseHitpoint = () => {
    setCharacter({
      ...character,
      hp: {
        ...character.hp,
        current: Number(character.hp.current) + 1
      }
    })
  }

  const decreaseHitpoint = () => {
    setCharacter({
      ...character,
      hp: {
        ...character.hp,
        current: Number(character.hp.current) - 1
      }
    })
  }

  return {
    fullCurrentHP,
    currentHP,
    maxHP,
    excededHP,
    isExceded,
    increaseHitpoint,
    decreaseHitpoint
  }
}
