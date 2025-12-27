import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { LanguageButton, LanguageContainer } from './LanguageSwitcherStyles';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContainer>
      <LanguageButton
        active={language === 'pt'}
        onClick={() => handleLanguageChange('pt')}
      >
        {t('header.languageSwitcher.portuguese')}
      </LanguageButton>
      <span>/</span>
      <LanguageButton
        active={language === 'en'}
        onClick={() => handleLanguageChange('en')}
      >
        {t('header.languageSwitcher.english')}
      </LanguageButton>
    </LanguageContainer>
  );
};

export default LanguageSwitcher;
