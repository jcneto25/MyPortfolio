import Head from 'next/head';
import Theme from '../styles/theme';
import Seo from '../components/Seo/Seo';
import { LanguageProvider } from '../contexts/LanguageContext';

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <Theme>
        <Seo />
        <Component {...pageProps} />
      </Theme>
    </LanguageProvider>
  );
}

