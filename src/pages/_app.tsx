import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { Processor } from '@/lib/index';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Processor>
        <Component {...pageProps} />
      </Processor>
  );
}
