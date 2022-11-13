export const useProgressLevel = (current?: number, max?: number) => {
  const currentValue = current || 0
  const maxValue = max || 0
  const operationPercentage = (currentValue * 100) / maxValue
  if (operationPercentage > 0) {
    const excededPercentage = operationPercentage > 100 ? 100: operationPercentage
    return { currentPercent: excededPercentage }
  }
  return { currentPercent: 0 }
}
