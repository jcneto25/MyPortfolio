import Theme from '../styles/theme';
import { LanguageProvider } from '../contexts/LanguageContext';

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </LanguageProvider>
  );
}
 