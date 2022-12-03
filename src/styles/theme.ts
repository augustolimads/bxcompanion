import { extendTheme } from "@chakra-ui/react"
import { colors } from './colors'

export const theme = extendTheme({
  colors,
  styles:{
    global:{
      option: {
          background: colors.neutral[900]
      }
    }
  },
})