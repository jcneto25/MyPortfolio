import React from "react";
import {
  DiAws,
  DiDatabase,
  DiDocker,
  DiFirebase,
  DiGit,
  DiLinux,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact,
  DiTerminal,
  DiWindows,
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import { useLanguage } from "../../contexts/LanguageContext";

const Technologies = () => {
  const { t } = useLanguage();

  const techItems = [
    { icon: <DiTerminal size="3rem" />, key: 'ai' },
    { icon: <DiWindows size="3rem" />, key: 'lowcode' },
    { icon: <DiPython size="3rem" />, key: 'datascience' },
    { icon: <DiReact size="3rem" />, key: 'frontend' },
    { icon: <DiAws size="3rem" />, key: 'cloud' },
    { icon: <DiDatabase size="3rem" />, key: 'sql' },
    { icon: <DiMongodb size="3rem" />, key: 'nosql' },
    { icon: <DiGit size="3rem" />, key: 'tools' },
    { icon: <DiLinux size="3rem" />, key: 'linux' },
    { icon: <DiDocker size="3rem" />, key: 'devops' },
    { icon: <DiNodejs size="3rem" />, key: 'backend' },
  ];

  return (
    <Section id="tech">
      <SectionDivider />
      <SectionTitle>
        <br />
        {t('technologies.title')}
      </SectionTitle>
      <SectionText>{t('technologies.subtitle')}</SectionText>
      <List>
        {techItems.map(({ icon, key }) => (
          <ListItem key={key}>
            {icon}
            <ListContainer>
              <ListTitle>{t(`technologies.items.${key}.title`)}</ListTitle>
              <ListParagraph>
                {t(`technologies.items.${key}.description`)}
              </ListParagraph>
            </ListContainer>
          </ListItem>
        ))}
      </List>
      <SectionDivider />
    </Section>
  );
};

export default Technologies;
