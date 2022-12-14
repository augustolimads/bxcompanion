import { useCharacter } from 'src/stores/SheetCharacter/SheetCharacter'

export const useProgressHp = () => {
  const { character } = useCharacter()
  const current = character.hp.current
  const max = character.hp.max
  const operationPercentage = (current * 100) / max
  const extraPercent = ((current - max) * 100) / max
  const currentExibition = operationPercentage < 100 ? operationPercentage : 100
  const barColor = () => {
    const isYellow = currentExibition >= 10 && currentExibition <= 50
    const isRed = currentExibition < 10 || current === 1
    if (isRed) {
      return 'primary.500'
    }
    if (isYellow) {
      return 'yellow'
    }

    return 'green'
  }

  return { currentPercent: currentExibition, extraPercent, barColor }
}
