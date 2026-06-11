import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, HeaderThree, Hr, Tag, TagList, TitleContent, AgentBadge, Img } from './ProjectsStyles';

const ProjectCard = ({ project, isAgent, t }) => {
  return (
    <BlogCard isAgent={isAgent}>
      {isAgent && <AgentBadge>Agent-Powered</AgentBadge>}
      <Img src={project.image} alt={project.title} isAgent={isAgent} />
      <TitleContent>
        <HeaderThree main={isAgent} isAgent={isAgent}>{project.title}</HeaderThree>
        <Hr isAgent={isAgent} />
      </TitleContent>
      <CardInfo isAgent={isAgent}>
        {project.description}
      </CardInfo>
      <div>
        <TitleContent>
          {t('projects.stack')}
        </TitleContent>
        <TagList>
          {project.tags.map((tag, i) => (
            <Tag key={i} isAgent={isAgent}>{tag}</Tag>
          ))}
        </TagList>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', margin: '2.5rem 0' }}>
        <ExternalLinks href={project.source} target="_blank" rel="noopener noreferrer" isAgent={isAgent}>
          {t('projects.source')}
        </ExternalLinks>
        {project.visit && (
          <ExternalLinks href={project.visit} target="_blank" rel="noopener noreferrer" isAgent={isAgent}>
            {t('projects.visit')}
          </ExternalLinks>
        )}
      </div>
    </BlogCard>
  );
};

export default ProjectCard;
