import Theme from '../styles/theme';
import Seo from '../components/Seo/Seo';
import { LanguageProvider } from '../contexts/LanguageContext';

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Theme>
        <Seo />
        <Component {...pageProps} />
      </Theme>
    </LanguageProvider>
  );
}

