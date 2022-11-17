export function attributeOtherMod(value: number, options: string[]) {
    if (value <= 3) {
        return options[0]
      }
      if (value >= 4 && value <= 5) {
        return options[1]
      }
      if (value >= 6 && value <= 8) {
        return options[2]
      }
      if (value >= 9 && value <= 12) {
        return options[3]
      }
      if (value >= 13 && value <= 15) {
        return options[4]
      }
      if (value >= 16 && value <= 17) {
        return options[5]
      }
      if (value >= 18) {
        return options[6]
      }
      return options[7]
}