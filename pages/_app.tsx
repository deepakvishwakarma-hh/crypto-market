import theme from '../Theme'

import '../styles/globals.css'

import store from '../redux-store'

import { Provider } from "react-redux"

import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
