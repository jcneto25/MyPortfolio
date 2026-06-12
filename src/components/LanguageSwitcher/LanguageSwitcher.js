import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { LanguageButton, LanguageContainer } from './LanguageSwitcherStyles';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();
  const languageSwitcherLabel =
    language === 'pt' ? 'Selecionar idioma' : 'Select language';

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContainer role="group" aria-label={languageSwitcherLabel}>
      <LanguageButton
        type="button"
        aria-pressed={language === 'pt'}
        $active={language === 'pt'}
        onClick={() => handleLanguageChange('pt')}
      >
        {t('header.languageSwitcher.portuguese')}
      </LanguageButton>
      <span aria-hidden="true">/</span>
      <LanguageButton
        type="button"
        aria-pressed={language === 'en'}
        $active={language === 'en'}
        onClick={() => handleLanguageChange('en')}
      >
        {t('header.languageSwitcher.english')}
      </LanguageButton>
    </LanguageContainer>
  );
};

export default LanguageSwitcher;
