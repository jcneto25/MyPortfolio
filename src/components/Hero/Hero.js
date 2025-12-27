import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { useLanguage } from "../../contexts/LanguageContext";

const Hero = (props) => {
  const { t } = useLanguage();

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          {t('hero.title')} <br />
          {t('hero.titleHighlight')}
        </SectionTitle>
        <SectionText>
          {t('hero.description')}
        </SectionText>
        <Button
          onClick={() => window.open("https://jcneto25.github.io/MyResume/")}
        >
          {t('hero.button')}
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
