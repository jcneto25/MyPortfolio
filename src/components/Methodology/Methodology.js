import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionSubText,
} from "../../styles/GlobalComponents";
import {
  PhaseCardsContainer,
  PhaseCard,
  PhaseNumber,
  PhaseTitle,
  PhaseDescription,
  BenefitsContainer,
  BenefitItem,
  CTAContainer,
  CTALink
} from "./MethodologyStyles";
import { useLanguage } from "../../contexts/LanguageContext";

const Methodology = () => {
  const { t } = useLanguage();

  const phases = [
    { number: '1', key: 'phase1' },
    { number: '2', key: 'phase2' },
    { number: '3', key: 'phase3' },
    { number: '4', key: 'phase4' },
  ];

  const benefits = [
    { key: 'benefit1' },
    { key: 'benefit2' },
    { key: 'benefit3' },
    { key: 'benefit4' },
  ];

  return (
    <Section id="methodology">
      <SectionDivider />
      <SectionTitle main>{t('methodology.title')}</SectionTitle>
      <SectionSubText>{t('methodology.subtitle')}</SectionSubText>

      <PhaseCardsContainer>
        {phases.map((phase) => (
          <PhaseCard key={phase.key}>
            <PhaseNumber>{phase.number}</PhaseNumber>
            <PhaseTitle>{t(`methodology.phases.${phase.key}.title`)}</PhaseTitle>
            <PhaseDescription>{t(`methodology.phases.${phase.key}.description`)}</PhaseDescription>
          </PhaseCard>
        ))}
      </PhaseCardsContainer>

      <SectionTitle style={{ marginTop: '48px', fontSize: '32px' }}>
        {t('methodology.benefitsTitle')}
      </SectionTitle>
      <BenefitsContainer>
        {benefits.map((benefit) => (
          <BenefitItem key={benefit.key}>• {t(`methodology.benefits.${benefit.key}`)}</BenefitItem>
        ))}
      </BenefitsContainer>

      <CTAContainer>
        <CTALink
          href="https://github.com/jcneto25/Live-and-Let-Code/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('methodology.cta')}
        </CTALink>
      </CTAContainer>

      <SectionDivider />
    </Section>
  );
};

export default Methodology;
