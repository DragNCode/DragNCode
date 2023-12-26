import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from "recoil";
import Head from 'next/head';
export default function App({ Component, pageProps }: AppProps) {
  return (
      <RecoilRoot>
          <Component {...pageProps} />
      </RecoilRoot>
  )
}
