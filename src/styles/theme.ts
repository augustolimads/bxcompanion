import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    neutral: {
        900: "#2C3038",
        700: "#3F444F",
        500: "#535A67",
        300: "#747D8E",
        100: "#CACACA",
    },
    primary: {
        900: "#4B3C4C",
        500: "#692D3D"
    },
    secondary: {
        500: "#0AEFC6",
        100: "#DDF5ED"
    },
    yellow: "#FFCD1E",
    green: "#74A634",
    blue: "#3294CB"
  },
})