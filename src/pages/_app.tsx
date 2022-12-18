import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { CharacterProvider } from 'src/store/useCharacter/useCharacter'
import { theme } from 'src/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CharacterProvider>
        <Component {...pageProps} />
      </CharacterProvider>
    </ChakraProvider>
  )
}

export default MyApp
