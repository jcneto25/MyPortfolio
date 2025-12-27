import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { useLanguage } from '../../contexts/LanguageContext';

const Projects = () => {
  const { t, language } = useLanguage();
  const currentProjects = projects[language] || projects.en;

  return (
    <Section nopadding id='projects'>
      <SectionDivider/>
      <SectionTitle main>{t('projects.title')}</SectionTitle>
      <GridContainer>
        {currentProjects.map(({id, image, title, description, tags, source, visit}) => (
          <BlogCard key={id}>
            <Img src={image}/>
            <TitleContent>
              <HeaderThree main>{title}</HeaderThree>
              <Hr/>
            </TitleContent>
            <CardInfo>
              {description}
            </CardInfo>
            <div>
              <span><br></br></span>
              <TitleContent>
                {t('projects.stack')}
              </TitleContent>
              <TagList>
                {tags.map((tag, i)=> (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}>{t('projects.visit')}</ExternalLinks>
              <ExternalLinks href={source}>{t('projects.source')}</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>

    </Section>
  );
};

export default Projects;