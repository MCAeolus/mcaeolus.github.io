import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { Processor } from '@/lib';
import {Theme} from "@/lib/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Theme>
          <Processor>
            <Component {...pageProps} />
          </Processor>
      </Theme>
  );
}
