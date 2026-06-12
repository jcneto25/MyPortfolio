import React from "react";
import { DiTerminal, DiReact, DiAws, DiDatabase, DiGit, DiLinux, DiDocker, DiNodejs } from "react-icons/di";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { TechGroup, TechGroupTitle, TechList, TechItem, TechIcon, TechContent, TechItemTitle, TechItemDesc } from "./TechnologiesStyles";
import { useLanguage } from "../../contexts/LanguageContext";

const Technologies = () => {
  const { t } = useLanguage();

  const coreTechs = [
    { icon: <DiTerminal size="2.5rem" />, key: 'agentFrameworks' },
    { icon: <DiTerminal size="2.5rem" />, key: 'llmTerminals' },
    { icon: <DiDatabase size="2.5rem" />, key: 'vectorDBs' },
    { icon: <DiTerminal size="2.5rem" />, key: 'multimodal' },
  ];

  const methods = [
    { icon: <DiTerminal size="2rem" />, key: 'specDriven' },
    { icon: <DiTerminal size="2rem" />, key: 'testDriven' },
    { icon: <DiTerminal size="2rem" />, key: 'codeReview' },
    { icon: <DiTerminal size="2rem" />, key: 'contextMgmt' },
    { icon: <DiTerminal size="2rem" />, key: 'refinementLoops' },
  ];

  const foundation = [
    { icon: <DiReact size="2rem" />, key: 'frontend' },
    { icon: <DiNodejs size="2rem" />, key: 'backend' },
    { icon: <DiDatabase size="2rem" />, key: 'databases' },
    { icon: <DiAws size="2rem" />, key: 'cloud' },
    { icon: <DiGit size="2rem" />, key: 'tools' },
    { icon: <DiLinux size="2rem" />, key: 'linux' },
    { icon: <DiDocker size="2rem" />, key: 'devops' },
  ];

  return (
    <Section id="tech">
      <SectionDivider />
      <SectionTitle>
        <br />
        {t('technologies.title')}
      </SectionTitle>
      <SectionText>{t('technologies.subtitle')}</SectionText>

      <TechGroup $isPrimary>
        <TechGroupTitle>{t('technologies.coreTitle')}</TechGroupTitle>
        <TechList>
          {coreTechs.map(({ icon, key }) => (
            <TechItem key={key}>
              <TechIcon>{icon}</TechIcon>
              <TechContent>
                <TechItemTitle>{t(`technologies.core.${key}.title`)}</TechItemTitle>
                <TechItemDesc>{t(`technologies.core.${key}.description`)}</TechItemDesc>
              </TechContent>
            </TechItem>
          ))}
        </TechList>
      </TechGroup>

      <TechGroup $isSecondary>
        <TechGroupTitle>{t('technologies.methodsTitle')}</TechGroupTitle>
        <TechList>
          {methods.map(({ icon, key }) => (
            <TechItem key={key}>
              <TechIcon>{icon}</TechIcon>
              <TechContent>
                <TechItemTitle>{t(`technologies.methods.${key}.title`)}</TechItemTitle>
                <TechItemDesc>{t(`technologies.methods.${key}.description`)}</TechItemDesc>
              </TechContent>
            </TechItem>
          ))}
        </TechList>
      </TechGroup>

      <TechGroup $isFoundation>
        <TechGroupTitle>{t('technologies.foundationTitle')}</TechGroupTitle>
        <TechList>
          {foundation.map(({ icon, key }) => (
            <TechItem key={key}>
              <TechIcon $muted>{icon}</TechIcon>
              <TechContent>
                <TechItemTitle $muted>{t(`technologies.foundation.${key}.title`)}</TechItemTitle>
                <TechItemDesc $muted>{t(`technologies.foundation.${key}.description`)}</TechItemDesc>
              </TechContent>
            </TechItem>
          ))}
        </TechList>
      </TechGroup>

      <SectionDivider />
    </Section>
  );
};

export default Technologies;
