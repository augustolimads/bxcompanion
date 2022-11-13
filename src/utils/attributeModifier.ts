export const attributeModifier = (value: number) => {
  if (value <= 3) {
    return -3
  }
  if (value >= 4 && value <= 5) {
    return -2
  }
  if (value >= 6 && value <= 8) {
    return -1
  }
  if (value >= 9 && value <= 12) {
    return 0
  }
  if (value >= 13 && value <= 15) {
    return 1
  }
  if (value >= 16 && value <= 17) {
    return 2
  }
  if (value >= 18) {
    return 3
  }
  return 3
}
