import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  ButtonAsLink,
  ButtonContainer,
  LeftSection,
  ProofItem,
  ProofList,
  SecondaryActions,
  SecondaryLink,
  SupportingText,
} from "./HeroStyles";
import { useLanguage } from "../../contexts/LanguageContext";

const Hero = (props) => {
  const { t } = useLanguage();

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle as="h1" main center>
          {t("hero.title")} <br />
          {t("hero.titleHighlight")}
        </SectionTitle>
        <SectionText>
          {t("hero.description")}
        </SectionText>
        <SupportingText>{t("hero.supportingText")}</SupportingText>
        <ButtonContainer>
          <ButtonAsLink
            href="https://jcneto25.github.io/MyResume/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("hero.buttonResume")}
          </ButtonAsLink>
          <SecondaryActions>
            <SecondaryLink href="#methodology">
              {t("hero.buttonMethodology")}
            </SecondaryLink>
            <SecondaryLink href="#projects">
              {t("hero.buttonProjects")}
            </SecondaryLink>
          </SecondaryActions>
        </ButtonContainer>
        <ProofList aria-label={t("hero.proofListLabel")}>
          <ProofItem>{t("hero.proofExperience")}</ProofItem>
          <ProofItem>{t("hero.proofFramework")}</ProofItem>
          <ProofItem>{t("hero.proofProjects")}</ProofItem>
        </ProofList>
      </LeftSection>
    </Section>
  );
};

export default Hero;
