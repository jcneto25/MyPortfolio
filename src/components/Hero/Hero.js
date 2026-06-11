import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, ButtonContainer } from "./HeroStyles";
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
        <ButtonContainer>
          <Button onClick={() => window.open("https://jcneto25.github.io/MyResume/")}>
            {t('hero.buttonResume')}
          </Button>
          <Button
            onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
            alt
          >
            {t('hero.buttonMethodology')}
          </Button>
          <Button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            alt
          >
            {t('hero.buttonProjects')}
          </Button>
        </ButtonContainer>
      </LeftSection>
    </Section>
  );
};

export default Hero;
