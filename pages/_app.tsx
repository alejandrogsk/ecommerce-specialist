import '../styles/main.scss'
import { useEffect } from 'react';
import type { AppProps } from 'next/app'
import TagManager, {TagManagerArgs} from "react-gtm-module";

const tagManagerArgs: TagManagerArgs = {
  gtmId: process.env.GTM_ID || "",
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => { TagManager.initialize(tagManagerArgs); });
  return <Component {...pageProps} />
}

export default MyApp
