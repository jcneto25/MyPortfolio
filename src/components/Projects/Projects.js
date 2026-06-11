import React from 'react';
import { Section, SectionDivider, SectionTitle, SectionSubText } from '../../styles/GlobalComponents';
import { ProjectGrid, ProjectSection } from './ProjectsStyles';
import { projects } from '../../constants/constants';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../../contexts/LanguageContext';

const Projects = () => {
  const { t, language } = useLanguage();
  const currentProjects = projects[language] || projects.en;

  const agentProjects = currentProjects.filter(p => p.isAgentProject);
  const traditionalProjects = currentProjects.filter(p => !p.isAgentProject);

  return (
    <Section nopadding id='projects'>
      <SectionDivider />
      <SectionTitle main>{t('projects.title')}</SectionTitle>

      <ProjectSection>
        <SectionSubText style={{ fontSize: '20px', fontWeight: '600', marginTop: '24px' }}>
          {t('projects.agentSubtitle')}
        </SectionSubText>
        <ProjectGrid>
          {agentProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isAgent={true}
              t={t}
            />
          ))}
        </ProjectGrid>
      </ProjectSection>

      <ProjectSection>
        <SectionSubText style={{ fontSize: '18px', fontWeight: '400', marginTop: '48px' }}>
          {t('projects.traditionalSubtitle')}
        </SectionSubText>
        <ProjectGrid isCompact>
          {traditionalProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isAgent={false}
              t={t}
            />
          ))}
        </ProjectGrid>
      </ProjectSection>
    </Section>
  );
};

export default Projects;
