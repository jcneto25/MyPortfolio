import React, { useState } from 'react';
import {
  AgentBadge,
  BlogCard,
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr,
  Img,
  ImgWrapper,
  Lightbox,
  LightboxImg,
  LinksGroup,
  MetaLine,
  Tag,
  TagList,
  TitleContent,
} from './ProjectsStyles';

const ProjectCard = ({ project, isAgent, t }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <BlogCard isAgent={isAgent}>
        {isAgent && <AgentBadge>{t('projects.agentBadge')}</AgentBadge>}
        <ImgWrapper
          onClick={() => setLightboxOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setLightboxOpen(true)}
          aria-label={t('projects.expandImage')}
        >
          <Img
            src={project.image}
            alt={project.title}
            width="400"
            height="220"
            loading={isAgent ? 'eager' : 'lazy'}
            isAgent={isAgent}
            containImage={project.containImage}
          />
        </ImgWrapper>
        <TitleContent>
          <HeaderThree main={isAgent} isAgent={isAgent}>{project.title}</HeaderThree>
          <Hr isAgent={isAgent} />
        </TitleContent>
        <CardInfo isAgent={isAgent}>
          <strong>{project.description}</strong>
        </CardInfo>
        {project.architecture && (
          <MetaLine isAgent={isAgent}>
            <strong>{t('projects.architectureLabel')}:</strong> {project.architecture}
          </MetaLine>
        )}
        {project.outcome && (
          <MetaLine isAgent={isAgent}>
            <strong>{t('projects.outcomeLabel')}:</strong> {project.outcome}
          </MetaLine>
        )}
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
        <LinksGroup>
          {project.source && (
            <ExternalLinks
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              isAgent={isAgent}
              aria-label={`${project.ctaLabel || t('projects.source')} - ${project.title}`}
            >
              {project.ctaLabel || t('projects.source')}
            </ExternalLinks>
          )}
          {project.visit && (
            <ExternalLinks
              href={project.visit}
              target="_blank"
              rel="noopener noreferrer"
              isAgent={isAgent}
              aria-label={`${t('projects.visit')} - ${project.title}`}
            >
              {t('projects.visit')}
            </ExternalLinks>
          )}
        </LinksGroup>
      </BlogCard>
      {lightboxOpen && (
        <Lightbox onClick={() => setLightboxOpen(false)} role="dialog" aria-label={t('projects.closeImage')}>
          <LightboxImg src={project.image} alt={project.title} />
        </Lightbox>
      )}
    </>
  );
};

export default ProjectCard;
