import { actions, useCharacter } from 'src/stores/SheetCharacter'

export const useHitpoint = () => {
  const { character, dispatch } = useCharacter()
  const currentHPRaw = character.hp.current
  const maxHP = character.hp.max
  const operation = currentHPRaw - maxHP
  const isExceded = operation > 0

  const excededHP = isExceded ? `+${operation}` : ''

  const currentHP = isExceded ? maxHP : currentHPRaw

  const fullCurrentHP = isExceded ? currentHP + operation : currentHP

  const increaseHitpoint = () => {
    dispatch(actions.increaseHitpoint())
  }

  const decreaseHitpoint = () => {
    dispatch(actions.decreaseHitpoint())
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
