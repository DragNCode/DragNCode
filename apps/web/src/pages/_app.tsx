import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from "recoil";
import { SocketContextProvider } from '@/context/SocketProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SocketContextProvider>
      <RecoilRoot>
        <ChakraProvider> 
          <Component {...pageProps} />
        </ChakraProvider>
      </RecoilRoot>
    </SocketContextProvider>
  )
}
