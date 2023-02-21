import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import { baseTheme } from 'themes'
import { CoreLayout } from 'layouts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={baseTheme}>
      <ColorModeScript initialColorMode={baseTheme.initialColorMode} />
      <CoreLayout>
        <Component {...pageProps} />
      </CoreLayout>
    </ChakraProvider>
  )
}
