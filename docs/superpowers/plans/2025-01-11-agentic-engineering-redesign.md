# Agentic Engineering Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform portfolio from "full-stack who also knows AI" to "Agentic Software Engineering Specialist" positioning with dark mode design, Live and Let Code methodology showcase, and reorganized projects/technologies.

**Architecture:** Single-page Next.js app with styled-components, Baserow CMS integration, bilingual PT/EN support. Changes: Hero repositioning, new Methodology section, Projects reorganization, Technologies restructuring, Timeline content update, visual design system overhaul.

**Tech Stack:** Next.js 12.3.1, React 17.0.2, styled-components 5.3.0, react-icons, Baserow API, styled-normalize

---

## File Structure

### New Files
- `src/components/Methodology/Methodology.js` — Live and Let Code methodology showcase component
- `src/components/Methodology/MethodologyStyles.js` — Styled components for Methodology section

### Modified Files
- `src/themes/default.js` — Color palette (dark mode + purple/green accents), typography (Inter)
- `src/components/Hero/Hero.js` — Title/description/buttons (3 buttons instead of 1)
- `src/components/Hero/HeroStyles.js` — Hero styling updates
- `src/components/Projects/Projects.js` — Split into Agent Projects + Traditional Projects
- `src/components/Projects/ProjectsStyles.js` — Badge support, card size differentiation
- `src/components/Technologies/Technologies.js` — Restructure into 3 groups (Core/Methods/Foundation)
- `src/components/Technologies/TechnologiesStyles.js` — Group-specific styling
- `src/pages/index.js` — Add Methodology section, remove BgAnimation, reorganize sections
- `src/i18n/translations/pt.json` — All content strings (Hero, Timeline, Technologies, Projects)
- `src/i18n/translations/en.json` — All content strings (Hero, Timeline, Technologies, Projects)
- `src/constants/constants.js` — Add Agent Projects (Live and Let Code, social-story, neuroHub)

---

## Task 1: Theme Setup — Update Color Palette & Typography

**Files:**
- Modify: `src/themes/default.js`

- [ ] **Step 1: Update theme with dark mode colors and Inter typography**

```javascript
export default {
  // Typography
  fonts: {
    title: "'Inter', 'Roboto', sans-serif",
    main: "'Inter', 'Roboto', sans-serif"
  },
  // Dark mode color palette
  colors: {
    // Backgrounds
    primary: "#0D0D0D",        // Near black (main background)
    secondary: "#1A1A1A",      // Dark gray (sections)
    cards: "#252525",          // Medium gray (cards)
    
    // Accents for Agent-Powered content
    agentPurple: "#8B5CF6",    // Vibrant purple (primary accent)
    agentGreen: "#10B981",     // Green (secondary accent, success)
    purpleDark: "#6D28D9",     // Dark purple (gradient end)
    
    // Text colors
    textPrimary: "#FFFFFF",    // White (primary text)
    textSecondary: "#B4B4B4",  // Light gray (secondary text)
    textMuted: "#6B6B6B",      // Medium gray (muted text)
    
    // Borders
    borderAgent: "rgba(139, 92, 246, 0.5)",    // Purple 50% opacity
    borderAgentHover: "#8B5CF6",               // Purple 100% opacity
    borderTraditional: "#404040",             // Gray (traditional projects)
    
    // Legacy colors (keep for compatibility)
    primary1: "hsl(204,23.8%,95.9%)",
    background1: "#0F1624",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)",
  },
  // Gradients
  gradients: {
    hero: "linear-gradient(121.57deg, #8B5CF6 0%, #6D28D9 100%)",
    button: "linear-gradient(270deg, #8B5CF6 0%, #10B981 100%)",
    agentCard: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(16, 155, 129, 0.1) 100%)"
  },
  // Breakpoints (unchanged)
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  },
}
```

- [ ] **Step 2: Add Google Fonts link to _document.js for Inter font**

**Modify:** `src/pages/_document.js`

```javascript
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

- [ ] **Step 3: Commit theme changes**

```bash
git add src/themes/default.js src/pages/_document.js
git commit -m "feat: update theme with dark mode palette and Inter typography"
```

---

## Task 2: Hero Component — Content Update

**Files:**
- Modify: `src/components/Hero/Hero.js`

- [ ] **Step 1: Update Hero with new Agentic Engineering positioning**

```javascript
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
```

- [ ] **Step 2: Update HeroStyles with button container**

```javascript
import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  margin-top: 32px;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    gap: 12px;
  }
`;
```

- [ ] **Step 3: Commit Hero component changes**

```bash
git add src/components/Hero/Hero.js src/components/Hero/HeroStyles.js
git commit -m "feat: update Hero with Agentic Engineering positioning and 3 buttons"
```

---

## Task 3: Translation Files — Hero Content

**Files:**
- Modify: `src/i18n/translations/pt.json`
- Modify: `src/i18n/translations/en.json`

- [ ] **Step 1: Update Portuguese translations for Hero**

```json
{
  "header": {
    "portfolio": "Portfolio",
    "nav": {
      "projects": "Projetos",
      "technologies": "Tecnologias",
      "about": "Sobre",
      "methodology": "Metodologia"
    },
    "languageSwitcher": {
      "portuguese": "PT",
      "english": "EN"
    }
  },
  "hero": {
    "title": "Especialista em",
    "titleHighlight": "Agentic Software Engineering",
    "description": "Desenvolvo software com agentes usando Claude CLI, OpenCode, Cursor, Antigravity CLI e Aider. Especialista em Spec-Driven Development com gestão eficiente de contexto para otimização de tokens. Aplico TDD com agentes, code review agentico automatizado, refinement loops human-agent e multi-agent orquestração. Autor do framework Live and Let Code — metodologia production-ready para desenvolvimento agentico com agents-first design.",
    "buttonResume": "Conheça meu CV",
    "buttonMethodology": "Ver Metodologia",
    "buttonProjects": "Ver Projetos Agent"
  }
}
```

- [ ] **Step 2: Update English translations for Hero**

```json
{
  "header": {
    "portfolio": "Portfolio",
    "nav": {
      "projects": "Projects",
      "technologies": "Technologies",
      "about": "About",
      "methodology": "Methodology"
    },
    "languageSwitcher": {
      "portuguese": "PT",
      "english": "EN"
    }
  },
  "hero": {
    "title": "Agentic Software Engineering",
    "titleHighlight": "Specialist",
    "description": "I build agent-powered software using Claude CLI, OpenCode, Cursor, Antigravity CLI, and Aider. Specialist in Spec-Driven Development with efficient context management for token optimization. I apply TDD with agents, automated agent code review, human-agent refinement loops, and multi-agent orchestration. Author of Live and Let Code framework — production-ready agentic development methodology with agents-first design.",
    "buttonResume": "See my Resume",
    "buttonMethodology": "See Methodology",
    "buttonProjects": "See Agent Projects"
  }
}
```

- [ ] **Step 3: Commit translation updates**

```bash
git add src/i18n/translations/pt.json src/i18n/translations/en.json
git commit -m "feat: update Hero translations for Agentic Engineering positioning"
```

---

## Task 4: Create Methodology Component

**Files:**
- Create: `src/components/Methodology/Methodology.js`
- Create: `src/components/Methodology/MethodologyStyles.js`

- [ ] **Step 1: Create Methodology component**

```javascript
import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionSubText,
} from "../../styles/GlobalComponents";
import {
  MethodologyContainer,
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
```

- [ ] **Step 2: Create Methodology styles**

```javascript
import styled from 'styled-components';

export const MethodologyContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
`;

export const PhaseCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin: 32px 0;
  
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

export const PhaseCard = styled.div`
  background: ${props => props.theme.colors.cards};
  border: 2px solid ${props => props.theme.colors.agentPurple};
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.3);
  }
`;

export const PhaseNumber = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: ${props => props.theme.colors.agentPurple};
  margin-bottom: 12px;
`;

export const PhaseTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 12px;
`;

export const PhaseDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${props => props.theme.colors.textSecondary};
`;

export const BenefitsContainer = styled.div`
  margin: 32px 0;
  padding: 0 48px;
`;

export const BenefitItem = styled.div`
  font-size: 18px;
  line-height: 1.8;
  color: ${props => props.theme.colors.textSecondary};
  margin: 12px 0;
  
  &:before {
    content: "✓ ";
    color: ${props => props.theme.colors.agentGreen};
    font-weight: 700;
    margin-right: 8px;
  }
`;

export const CTAContainer = styled.div`
  text-align: center;
  margin: 48px 0 24px;
`;

export const CTALink = styled.a`
  display: inline-block;
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.colors.textPrimary};
  background: ${props => props.theme.gradients.button};
  padding: 16px 32px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.5);
  }
`;
```

- [ ] **Step 3: Commit Methodology component**

```bash
git add src/components/Methodology/
git commit -m "feat: create Methodology component for Live and Let Code showcase"
```

---

## Task 5: Translation Files — Methodology Content

**Files:**
- Modify: `src/i18n/translations/pt.json`
- Modify: `src/i18n/translations/en.json`

- [ ] **Step 1: Add Portuguese methodology translations**

```json
{
  "methodology": {
    "title": "Metodologia de Desenvolvimento Agentico",
    "subtitle": "Framework open-source para Spec-Driven Development com agentes. Transforma especificações funcionais em código production-ready através de orquestração multi-agentes.",
    "benefitsTitle": "Benefícios",
    "cta": "📖 Ver no GitHub",
    "phases": {
      "phase1": {
        "title": "Spec Definition",
        "description": "Especificação funcional clara com critérios de aceitação"
      },
      "phase2": {
        "title": "Agent Orchestration",
        "description": "Múltiplos agentes especializados (architect, developer, reviewer)"
      },
      "phase3": {
        "title": "Code Generation + Review",
        "description": "Implementação agentica com code review automatizado"
      },
      "phase4": {
        "title": "Human Refinement",
        "description": "Refinement loop human-agent para otimização"
      }
    },
    "benefits": {
      "benefit1": "Consistência: Specs como fonte de verdade",
      "benefit2": "Velocidade: Agents aceleram implementação",
      "benefit3": "Qualidade: Code review agentico automatizado",
      "benefit4": "Flexibilidade: Human no loop para decisões complexas"
    }
  }
}
```

- [ ] **Step 2: Add English methodology translations**

```json
{
  "methodology": {
    "title": "Agentic Development Methodology",
    "subtitle": "Open-source framework for Spec-Driven Development with agents. Transforms functional specifications into production-ready code through multi-agent orchestration.",
    "benefitsTitle": "Benefits",
    "cta": "📖 View on GitHub",
    "phases": {
      "phase1": {
        "title": "Spec Definition",
        "description": "Clear functional specification with acceptance criteria"
      },
      "phase2": {
        "title": "Agent Orchestration",
        "description": "Multiple specialized agents (architect, developer, reviewer)"
      },
      "phase3": {
        "title": "Code Generation + Review",
        "description": "Agent implementation with automated code review"
      },
      "phase4": {
        "title": "Human Refinement",
        "description": "Human-agent refinement loop for optimization"
      }
    },
    "benefits": {
      "benefit1": "Consistency: Specs as single source of truth",
      "benefit2": "Speed: Agents accelerate implementation",
      "benefit3": "Quality: Automated agent code review",
      "benefit4": "Flexibility: Human in the loop for complex decisions"
    }
  }
}
```

- [ ] **Step 3: Commit methodology translations**

```bash
git add src/i18n/translations/pt.json src/i18n/translations/en.json
git commit -m "feat: add methodology translations for Live and Let Code section"
```

---

## Task 6: Constants — Add Agent Projects

**Files:**
- Modify: `src/constants/constants.js`

- [ ] **Step 1: Add Agent Projects to constants**

Add to both `en` and `pt` arrays in `constants.js`:

```javascript
export const projects = {
  en: [
    // ... existing projects (keep all)
    
    // NEW: Agent Projects (add at end of array)
    {
      title: 'Live and Let Code',
      description: "Framework for agent Spec-Driven Development. Production-ready methodology for agentic development with agents-first design.",
      image: '/images/live-and-let-code-icon.png',
      tags: ['Agents', 'Spec-Driven', 'Open-Source'],
      source: 'https://github.com/jcneto25/Live-and-Let-Code/',
      visit: 'https://github.com/jcneto25/Live-and-Let-Code/',
      id: 10,
      isAgentProject: true,
    },
    {
      title: 'social-story',
      description: "Generative AI SaaS for TEA social stories. Multi-modal LLMs (text + image) for personalized content creation.",
      image: '/images/social-story.png',
      tags: ['Agents', 'Generative AI', 'LLM', 'SaaS'],
      source: 'https://github.com/jcneto25/social-story',
      visit: '',
      id: 11,
      isAgentProject: true,
    },
    {
      title: 'neuroHub',
      description: "TEA multi-stakeholder platform with structured IEP (LP/MP/CP). Connects therapists, parents, schools, and clinics.",
      image: '/images/neurohub.png',
      tags: ['Agents', 'Healthcare', 'Education', 'Platform'],
      source: 'https://github.com/jcneto25/neuroHub',
      visit: '',
      id: 12,
      isAgentProject: true,
    },
  ],
  pt: [
    // ... existing projects (keep all)
    
    // NEW: Agent Projects (add at end of array)
    {
      title: 'Live and Let Code',
      description: "Framework para Spec-Driven Development agentico. Metodologia production-ready para desenvolvimento agentico com agents-first design.",
      image: '/images/live-and-let-code-icon.png',
      tags: ['Agents', 'Spec-Driven', 'Open-Source'],
      source: 'https://github.com/jcneto25/Live-and-Let-Code/',
      visit: 'https://github.com/jcneto25/Live-and-Let-Code/',
      id: 10,
      isAgentProject: true,
    },
    {
      title: 'social-story',
      description: "SaaS generative AI para histórias sociais TEA. LLMs multi-modais (texto + imagem) para criar conteúdo personalizado.",
      image: '/images/social-story.png',
      tags: ['Agents', 'Generative AI', 'LLM', 'SaaS'],
      source: 'https://github.com/jcneto25/social-story',
      visit: '',
      id: 11,
      isAgentProject: true,
    },
    {
      title: 'neuroHub',
      description: "Plataforma TEA multi-stakeholder com PEI estruturado (LP/MP/CP). Conecta terapeutas, pais, escolas e clínicas.",
      image: '/images/neurohub.png',
      tags: ['Agents', 'Healthcare', 'Education', 'Platform'],
      source: 'https://github.com/jcneto25/neuroHub',
      visit: '',
      id: 12,
      isAgentProject: true,
    },
  ],
};
```

- [ ] **Step 2: Commit constants update**

```bash
git add src/constants/constants.js
git commit -m "feat: add Agent Projects (Live and Let Code, social-story, neuroHub)"
```

---

## Task 7: Projects Component — Reorganize Structure

**Files:**
- Modify: `src/components/Projects/Projects.js`
- Modify: `src/components/Projects/ProjectsStyles.js`
- Create: `src/components/Projects/ProjectCard.js`

- [ ] **Step 1: Update Projects component to split Agent vs Traditional**

```javascript
import React from 'react';
import { Section, SectionDivider, SectionTitle, SectionSubText } from '../../styles/GlobalComponents';
import { ProjectGrid, ProjectSection } from './ProjectsStyles';
import { projects } from '../../constants/constants';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../../contexts/LanguageContext';

const Projects = () => {
  const { t, language } = useLanguage();
  const currentProjects = projects[language] || projects.en;

  // Split projects into Agent and Traditional
  const agentProjects = currentProjects.filter(p => p.isAgentProject);
  const traditionalProjects = currentProjects.filter(p => !p.isAgentProject);

  return (
    <Section nopadding id='projects'>
      <SectionDivider />
      <SectionTitle main>{t('projects.title')}</SectionTitle>
      
      {/* Agent Projects Section */}
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

      {/* Traditional Projects Section */}
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
```

- [ ] **Step 2: Create ProjectCard component**

Create new file: `src/components/Projects/ProjectCard.js`

```javascript
import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, HeaderThree, Hr, Tag, TagList, TitleContent } from './ProjectsStyles';
import { AgentBadge, Img } from './ProjectsStyles';

const ProjectCard = ({ project, isAgent, t }) => {
  return (
    <BlogCard isAgent={isAgent}>
      {isAgent && <AgentBadge>Agent-Powered</AgentBadge>}
      <Img src={project.image} alt={project.title} />
      <TitleContent>
        <HeaderThree main={isAgent}>{project.title}</HeaderThree>
        <Hr />
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
      <ExternalLinks href={project.source} target="_blank" rel="noopener noreferrer">
        {t('projects.source')}
      </ExternalLinks>
      {project.visit && (
        <ExternalLinks href={project.visit} target="_blank" rel="noopener noreferrer">
          {t('projects.visit')}
        </ExternalLinks>
      )}
    </BlogCard>
  );
};

export default ProjectCard;
```

- [ ] **Step 3: Update ProjectsStyles**

```javascript
import styled from 'styled-components';

// Existing components
export const Img = styled.img`
  width: 100%;
  height: ${props => props.isAgent ? '200px' : '100%'};
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	padding: 3rem;
	place-items: center;
	column-gap: 2rem;
	row-gap: 3rem;
	@media ${(props) => props.theme.breakpoints.sm} {
	  display: flex;
	  flex-direction: column;
	  padding: 2rem;
	  padding-bottom: 0;
	}
`;

export const BlogCard = styled.div`
  position: relative;
  border-radius: ${props => props.isAgent ? '12px' : '10px'};
  border: ${props => props.isAgent 
    ? `2px solid ${props.theme.colors.borderAgent}`
    : `1px solid ${props.theme.colors.borderTraditional}`
  };
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: ${props => props.isAgent ? '400px' : '350px'};
  background: ${props => props.theme.colors.cards};
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    ${props => props.isAgent && 'transform: translateY(-4px);'};
    ${props => props.isAgent && 'box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);'};
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: ${props => props.isAgent ? props.theme.colors.agentPurple : '#9cc9e3'};
  padding: .5rem 0;
  font-size: ${props => props.main ? '2rem' : (props.isAgent ? '1.5rem' : '1.8rem')};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: ${props => props.isAgent ? props.theme.colors.agentPurple : '#d0bb57'};
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: ${props => props.isAgent ? '0 24px' : '0 50px'};
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.isAgent ? '14px' : '16px'};
  line-height: 1.5;
  text-align: justify;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: .3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: ${props => props.theme.colors.textPrimary};
  font-size: 16px;
  padding: 8px 16px;
  background: ${props => props.isAgent 
    ? props.theme.gradients.button 
    : '#6b3030'};
  border-radius: 8px;
  transition: 0.3s;
  text-decoration: none;
  
  &:hover {
    transform: scale(1.05);
    ${props => props.isAgent && 'box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);'}
  }
`;

export const TagList = styled.ul`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 8px;
	padding: 1rem;
`;

export const Tag = styled.li`
	color: ${props => props.isAgent ? props.theme.colors.agentGreen : '#d8bfbf'};
	font-size: ${props => props.isAgent ? '13px' : '15px'};
	font-weight: ${props => props.isAgent ? '600' : '400'};
`;

// NEW components
export const ProjectSection = styled.div`
  margin: 32px 0;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${props => props.isCompact ? '300px' : '400px'}, 1fr));
  gap: ${props => props.isCompact ? '16px' : '24px'};
  padding: ${props => props.isCompact ? '16px' : '24px'};
  place-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    padding: 16px;
  }
`;

export const AgentBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: ${props => props.theme.colors.agentPurple};
  color: ${props => props.theme.colors.textPrimary};
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.3);
  z-index: 10;
`;
```

- [ ] **Step 4: Add projects translations**

Update both `pt.json` and `en.json`:

```json
"projects": {
  "title": "Projetos",
  "agentSubtitle": "Soluções desenvolvidas com arquiteturas multi-agentes",
  "traditionalSubtitle": "Fundação Full-Stack (projetos anteriores)",
  "stack": "Stack",
  "visit": "Visit",
  "source": "Source"
}
```

- [ ] **Step 5: Commit Projects reorganization**

```bash
git add src/components/Projects/
git add src/i18n/translations/pt.json src/i18n/translations/en.json
git commit -m "feat: reorganize Projects into Agent vs Traditional with badges"
```

---

## Task 8: Technologies Component — Restructure into 3 Groups

**Files:**
- Modify: `src/components/Technologies/Technologies.js`
- Modify: `src/components/Technologies/TechnologiesStyles.js`

- [ ] **Step 1: Update Technologies component with 3 groups**

```javascript
import React from "react";
import { DiTerminal, DiPython, DiReact, DiAws, DiDatabase, DiGit, DiLinux, DiDocker, DiNodejs } from "react-icons/di";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { TechGroup, TechGroupTitle, TechList, TechItem, TechIcon, TechContent, TechItemTitle, TechItemDesc } from "./TechnologiesStyles";
import { useLanguage } from "../../contexts/LanguageContext";

const Technologies = () => {
  const { t } = useLanguage();

  // Core: Agent & AI
  const coreTechs = [
    { icon: <DiTerminal size="2.5rem" />, key: 'agentFrameworks' },
    { icon: <DiTerminal size="2.5rem" />, key: 'llmTerminals' },
    { icon: <DiDatabase size="2.5rem" />, key: 'vectorDBs' },
    { icon: <DiTerminal size="2.5rem" />, key: 'multimodal' },
  ];

  // Methods: Agentic Practices
  const methods = [
    { icon: <DiTerminal size="2rem" />, key: 'specDriven' },
    { icon: <DiTerminal size="2rem" />, key: 'testDriven' },
    { icon: <DiTerminal size="2rem" />, key: 'codeReview' },
    { icon: <DiTerminal size="2rem" />, key: 'contextMgmt' },
    { icon: <DiTerminal size="2rem" />, key: 'refinementLoops' },
  ];

  // Foundation: Full-Stack
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

      {/* Core: Agent & AI */}
      <TechGroup isPrimary>
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

      {/* Methods: Agentic Practices */}
      <TechGroup isSecondary>
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

      {/* Foundation: Full-Stack */}
      <TechGroup isFoundation>
        <TechGroupTitle>{t('technologies.foundationTitle')}</TechGroupTitle>
        <TechList>
          {foundation.map(({ icon, key }) => (
            <TechItem key={key}>
              <TechIcon muted>{icon}</TechIcon>
              <TechContent>
                <TechItemTitle muted>{t(`technologies.foundation.${key}.title`)}</TechItemTitle>
                <TechItemDesc muted>{t(`technologies.foundation.${key}.description`)}</TechItemDesc>
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
```

- [ ] **Step 2: Create TechnologiesStyles**

```javascript
import styled from 'styled-components';

export const TechGroup = styled.div`
  margin: ${props => {
    if (props.isPrimary) return '48px 0';
    if (props.isSecondary) return '32px 0';
    return '24px 0';
  }};
  padding: 24px;
  background: ${props => {
    if (props.isPrimary) return props.theme.colors.cards;
    if (props.isSecondary) return 'rgba(37, 37, 37, 0.5)';
    return 'transparent';
  }};
  border-radius: ${props => props.isPrimary ? '12px' : '8px'};
  border: ${props => props.isPrimary 
    ? `1px solid ${props.theme.colors.borderAgent}`
    : 'none'};
`;

export const TechGroupTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TechList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

export const TechItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: ${props => props.theme.colors.secondary};
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.theme.colors.cards};
  }
`;

export const TechIcon = styled.div`
  color: ${props => props.muted 
    ? props.theme.colors.textMuted 
    : props.theme.colors.agentPurple};
  flex-shrink: 0;
`;

export const TechContent = styled.div`
  flex: 1;
`;

export const TechItemTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.muted 
    ? props.theme.colors.textMuted 
    : props.theme.colors.textPrimary};
  margin-bottom: 4px;
`;

export const TechItemDesc = styled.div`
  font-size: 14px;
  line-height: 1.4;
  color: ${props => props.muted 
    ? props.theme.colors.textMuted 
    : props.theme.colors.textSecondary};
`;

// Keep existing components that are still used
export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: ${props => props.theme.colors.secondary};
  border-radius: 8px;
`;

export const ListContainer = styled.div`
  flex: 1;
`;

export const ListParagraph = styled.p`
  font-size: 14px;
  line-height: 1.4;
  color: ${props => props.theme.colors.textSecondary};
`;
```

- [ ] **Step 3: Add Technologies translations**

Update both `pt.json` and `en.json` with new structure:

```json
"technologies": {
  "title": "Stack Tecnológico Agent-First",
  "subtitle": "Tecnologias organizadas por camadas — IA/Agentes como core, full-stack como suporte",
  "coreTitle": "🤖 Agent Orchestration & LLMs",
  "methodsTitle": "⚡ Agentic Development Methods",
  "foundationTitle": "🛠️ Full-Stack Foundation",
  "core": {
    "agentFrameworks": {
      "title": "Agent Frameworks",
      "description": "LangChain, CrewAI, Flowise"
    },
    "llmTerminals": {
      "title": "LLM Terminals",
      "description": "Claude CLI, OpenCode, Cursor, Antigravity, Aider"
    },
    "vectorDBs": {
      "title": "Vector DBs",
      "description": "ChromaDB, Pinecone"
    },
    "multimodal": {
      "title": "Multi-modal",
      "description": "GPT-4V (Vision), DALL-E, Stable Diffusion"
    }
  },
  "methods": {
    "specDriven": {
      "title": "Spec-Driven Development",
      "description": "Live and Let Code framework"
    },
    "testDriven": {
      "title": "Test-Driven",
      "description": "TDD com agentes"
    },
    "codeReview": {
      "title": "Code Review",
      "description": "Automated agent review"
    },
    "contextMgmt": {
      "title": "Context Management",
      "description": "Token optimization"
    },
    "refinementLoops": {
      "title": "Refinement Loops",
      "description": "Human-agent iteration"
    }
  },
  "foundation": {
    "frontend": {
      "title": "Frontend",
      "description": "React, Next.js, Material UI"
    },
    "backend": {
      "title": "Backend",
      "description": "Node.js, Express"
    },
    "databases": {
      "title": "Database",
      "description": "SQL + NoSQL"
    },
    "cloud": {
      "title": "Cloud",
      "description": "Oracle Cloud Certified"
    },
    "tools": {
      "title": "Tools",
      "description": "Git, GitHub, VS Code"
    },
    "linux": {
      "title": "Linux",
      "description": "System administration"
    },
    "devops": {
      "title": "DevOps",
      "description": "Docker containers"
    }
  }
}
```

- [ ] **Step 4: Commit Technologies restructuring**

```bash
git add src/components/Technologies/
git add src/i18n/translations/pt.json src/i18n/translations/en.json
git commit -m "feat: restructure Technologies into Core/Methods/Foundation groups"
```

---

## Task 9: Translation Files — Timeline Update

**Files:**
- Modify: `src/i18n/translations/pt.json`
- Modify: `src/i18n/translations/en.json`
- Modify: `src/components/TimeLine/TimeLine.js`

- [ ] **Step 1: Update Portuguese timeline content**

```json
"timeline": {
  "title": "Sobre Mim",
  "subtitle": "Jornada de 25+ anos em tecnologia — de full-stack tradicional à especialização em Agentic Engineering",
  "about": "Profissional de tecnologia atuando no mercado desde 1996. Iniciei com desenvolvimento full-stack tradicional (web, mobile, backend) e ao longo de 2 décadas evolui para especialização em Agentic Software Engineering.\n\nAtualmente gerencio a unidade de desenvolvimento dinâmico do Tribunal de Justiça do Ceará, onde lidero a transição de low-code/no-code para soluções agent-powered. Minha expertise combina:\n\n- **Fundação Sólida:** 25+ anos em full-stack (React, Next.js, Node.js, SQL/NoSQL, Cloud)\n- **Especialização Atual:** Foco em arquiteturas multi-agentes, Spec-Driven Development, orquestração com LangChain/CrewAI/Flowise\n- **Prática Real:** Framework open-source (Live and Let Code), projetos production-ready (neuroHub, social-story)\n- **Liderança:** Gestão de equipes de desenvolvimento em ambiente corporativo\n\nMinha abordagem: agents-first design para resolver problemas complexos com qualidade e velocidade."
}
```

- [ ] **Step 2: Update English timeline content**

```json
"timeline": {
  "title": "About Me",
  "subtitle": "25+ year journey in technology — from traditional full-stack to Agentic Engineering specialization",
  "about": "Technology professional working in the market since 1996. I started with traditional full-stack development (web, mobile, backend) and over 2 decades evolved to specialize in Agentic Software Engineering.\n\nCurrently I manage the dynamic development unit of the Court of Justice of Ceará, where I lead the transition from low-code/no-code to agent-powered solutions. My expertise combines:\n\n- **Solid Foundation:** 25+ years in full-stack (React, Next.js, Node.js, SQL/NoSQL, Cloud)\n- **Current Specialization:** Focus on multi-agent architectures, Spec-Driven Development, orchestration with LangChain/CrewAI/Flowise\n- **Real Practice:** Open-source framework (Live and Let Code), production-ready projects (neuroHub, social-story)\n- **Leadership:** Development team management in corporate environment\n\nMy approach: agents-first design to solve complex problems with quality and speed."
}
```

- [ ] **Step 3: Update Timeline component to show subtitle**

Modify `src/components/TimeLine/TimeLine.js`:

```javascript
// In the return statement, after SectionTitle, add:
<SectionText style={{ fontSize: '18px', maxWidth: '900px', marginBottom: '24px' }}>
  {t('timeline.subtitle')}
</SectionText>
```

Full updated component:

```javascript
import React, { useEffect, useState } from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./TimeLineStyles";
import { useLanguage } from "../../contexts/LanguageContext";

const Timeline = ({ timelineData }) => {
  const { t, language } = useLanguage();
  const [data, setData] = useState(timelineData[language] || []);

  useEffect(() => {
    setData(timelineData[language] || []);
  }, [language, timelineData]);

  return (
    <Section>
      <SectionDivider />
      <SectionTitle main>{t('timeline.title')}</SectionTitle>
      {t('timeline.subtitle') && (
        <SectionText style={{ fontSize: '18px', maxWidth: '900px', marginBottom: '24px' }}>
          {t('timeline.subtitle')}
        </SectionText>
      )}
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.number}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  );
};

export default Timeline;
```

- [ ] **Step 4: Commit timeline updates**

```bash
git add src/components/TimeLine/TimeLine.js
git add src/i18n/translations/pt.json src/i18n/translations/en.json
git commit -m "feat: update Timeline with specialization journey and new content"
```

---

## Task 10: Main Page Integration — Assemble All Sections

**Files:**
- Modify: `src/pages/index.js`

- [ ] **Step 1: Update index.js to include Methodology and remove BgAnimation**

```javascript
import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import Methodology from '../components/Methodology/Methodology';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = ({ timelineData }) => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Methodology />
      <Projects />
      <Technologies />
      <Timeline timelineData={timelineData} />
      <Acomplishments />
    </Layout>
  );
};

export async function getStaticProps() {
  const {
    NEXT_PUBLIC_BASEROW_API_TOKEN,
    NEXT_PUBLIC_BASEROW_HOST,
    NEXT_PUBLIC_BASEROW_TABLE_ID,
    NEXT_PUBLIC_BASEROW_TABLE_EN_ID,
  } = process.env;

  if (!NEXT_PUBLIC_BASEROW_API_TOKEN) {
    console.error("BASEROW_API_TOKEN is missing in the environment variables.");
    return {
      props: {
        timelineData: { pt: [], en: [] },
      },
    };
  }

  try {
    const [ptResponse, enResponse] = await Promise.all([
      fetch(
        `${NEXT_PUBLIC_BASEROW_HOST}/api/database/rows/table/${NEXT_PUBLIC_BASEROW_TABLE_ID}/?user_field_names=true`,
        {
          headers: {
            Authorization: `Token ${NEXT_PUBLIC_BASEROW_API_TOKEN}`,
          },
        }
      ),
      NEXT_PUBLIC_BASEROW_TABLE_EN_ID ? fetch(
        `${NEXT_PUBLIC_BASEROW_HOST}/api/database/rows/table/${NEXT_PUBLIC_BASEROW_TABLE_EN_ID}/?user_field_names=true`,
        {
          headers: {
            Authorization: `Token ${NEXT_PUBLIC_BASEROW_API_TOKEN}`,
          },
        }
      ) : null
    ]);

    if (!ptResponse.ok) {
      throw new Error(`Failed to fetch Portuguese data from Baserow: ${ptResponse.statusText}`);
    }

    const ptData = await ptResponse.json();
    const enData = enResponse && enResponse.ok ? await enResponse.json() : null;

    return {
      props: {
        timelineData: {
          pt: ptData.results || [],
          en: enData?.results || []
        },
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching data from Baserow:", error);
    return {
      props: {
        timelineData: { pt: [], en: [] },
      },
    };
  }
}

export default Home;
```

- [ ] **Step 2: Commit main page integration**

```bash
git add src/pages/index.js
git commit -m "feat: integrate Methodology section, remove BgAnimation, reorganize sections"
```

---

## Task 11: Global Components — Update Section Styling

**Files:**
- Modify: `src/styles/GlobalComponents/index.js`

- [ ] **Step 1: Update SectionTitle gradient to use purple**

Find and replace SectionTitle gradient:

```javascript
export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "65px" : "56px")};
  line-height: ${(props) => (props.main ? "72px" : "56px")};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(139, 92, 246, 0.8) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? "58px 0 16px" : "0")};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "56px" : "48px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "28px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
`;
```

- [ ] **Step 2: Update SectionDivider gradient**

```javascript
export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background: linear-gradient(270deg, ${props => props.theme.colors.agentPurple} 0%, ${props => props.theme.colors.agentGreen} 100%);
  margin: ${(props) => (props.divider ? "4rem 0" : "")};

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`;
```

- [ ] **Step 3: Update Button component gradients**

Update ButtonBack and ButtonFront:

```javascript
export const ButtonBack = styled.div`
  width: ${({ alt }) => (alt ? "200px" : "280px")};
  height: ${({ alt }) => (alt ? "48px" : "56px")};
  border-radius: 70px;
  font-size: ${({ alt }) => (alt ? "18px" : "20px")};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 32px 0;
  color: #fff;
  background: ${props => props.theme.gradients.button};
  cursor: pointer;
  transition: 0.7s ease;
  position: relative;
  padding-left: 20px;
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => (alt ? "160px" : "220px")};
    height: ${({ alt }) => (alt ? "44px" : "48px")};
    font-size: ${({ alt }) => (alt ? "16px" : "18px")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 40px;
    font-size: 14px;
  }
`;

export const ButtonFront = styled.button`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.gradients.hero};
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};
  transition: 0.4s ease;
  font-size: ${({ alt }) => (alt ? "18px" : "20px")};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) =>
    disabled
      ? "inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)"
      : "none"};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled {
    background: linear-gradient(270deg, #8B5CF6 0%, #6D28D9 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => (alt ? "16px" : "18px")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;
```

- [ ] **Step 4: Update Section background colors**

```javascript
export const Section = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "32px 48px 0")};
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  background: ${props => props.theme.colors.primary};

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;
```

- [ ] **Step 5: Update SectionText colors**

```javascript
export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: ${props => props.theme.colors.textSecondary};

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;
```

- [ ] **Step 6: Commit global components updates**

```bash
git add src/styles/GlobalComponents/index.js
git commit -m "feat: update global components with dark mode and purple gradients"
```

---

## Task 12: Add Project Images

**Files:**
- Create: `/public/images/social-story.png` (placeholder)
- Create: `/public/images/neurohub.png` (placeholder)
- Create: `/public/images/live-and-let-code-icon.png` (placeholder)

- [ ] **Step 1: Create placeholder project images**

```bash
# Copy existing images as placeholders
cp E:/Users/Desktop/javascript/portfolio_website-STARTER/public/images/1.png \
   E:/Users/Desktop/javascript/portfolio_website-STARTER/public/images/social-story.png

cp E:/Users/Desktop/javascript/portfolio_website-STARTER/public/images/2.png \
   E:/Users/Desktop/javascript/portfolio_website-STARTER/public/images/neurohub.png

cp E:/Users/Desktop/javascript/portfolio_website-STARTER/public/images/3.png \
   E:/Users/Desktop/javascript/portfolio_website-STARTER/public/images/live-and-let-code-icon.png
```

- [ ] **Step 2: Commit placeholder images**

```bash
git add public/images/
git commit -m "feat: add placeholder images for Agent projects"
```

**Note:** Replace these with actual project screenshots when available.

---

## Task 13: Build and Test Locally

**Files:**
- Run: `npm run build`
- Run: `npm run dev`

- [ ] **Step 1: Install dependencies if needed**

```bash
npm install
```

Expected: All dependencies installed successfully

- [ ] **Step 2: Run development server to test**

```bash
npm run dev
```

Expected: Server starts on http://localhost:3000, no compilation errors

- [ ] **Step 3: Visit site and verify all sections**

Checklist:
- ✅ Hero shows Agentic Engineering title
- ✅ Hero has 3 buttons (Resume, Methodology, Projects)
- ✅ Methodology section displays with 4 phases
- ✅ Projects split into Agent Projects (with badges) + Traditional Projects
- ✅ Technologies show 3 groups with proper hierarchy
- ✅ Timeline shows updated content with subtitle
- ✅ Dark mode colors applied (purple accents on Agent elements)
- ✅ Bilingual toggle works (PT/EN)
- ✅ No console errors

- [ ] **Step 4: Build static export**

```bash
npm run build
```

Expected: Build completes successfully, creates `/out` directory

- [ ] **Step 5: Stop dev server**

Press Ctrl+C to stop the dev server

---

## Task 14: Update Baserow Accomplishments (Manual)

**Files:**
- Baserow table (via web UI)

- [ ] **Step 1: Log into Baserow**

Visit https://baserow.io and log in

- [ ] **Step 2: Navigate to Accomplishments table**

Open the table configured via `NEXT_PUBLIC_BASEROW_TABLE_MARCOS_ID`

- [ ] **Step 3: Add new entries**

Add rows to the table:

| Ano | conquista |
|-----|-----------|
| 2024 | Live and Let Code — Framework open-source para Spec-Driven Development agentico |
|2024 | neuroHub — Plataforma TEA production-ready com PEI estruturado |
|2024 | social-story — SaaS generative AI para histórias sociais |

- [ ] **Step 4: Verify entries appear in portfolio**

Reload portfolio and confirm Accomplishments section shows new entries

**Note:** This is a manual step — no git commit needed

---

## Task 15: Final Testing and Deployment

**Files:**
- Run: `npm run build`
- Deploy: `/out` directory

- [ ] **Step 1: Final build verification**

```bash
npm run build
```

Expected: Clean build with no errors

- [ ] **Step 2: Verify all sections in production build**

Open `out/index.html` in browser and verify:

**Content Checklist:**
- ✅ Hero mentions only Agentic Engineering
- ✅ Methodology section explains Live and Let Code (4 phases, benefits, CTA)
- ✅ Agent Projects prominently displayed with badges
- ✅ Technologies shows 3 groups with proper hierarchy
- ✅ Timeline reflects specialization journey

**Visual Checklist:**
- ✅ Dark mode with purple/green accents
- ✅ Inter font (or Roboto fallback)
- ✅ Agent-Powered badges visible on agent projects
- ✅ Clear visual hierarchy (Agent > Traditional)

**Functional Checklist:**
- ✅ All sections render correctly
- ✅ Bilingual PT/EN works
- ✅ Responsive on mobile/desktop
- ✅ Baserow integration intact
- ✅ Links work (GitHub, CV, anchors)

- [ ] **Step 3: Deploy to production**

Deploy `/out` directory to hosting provider

Example for GitHub Pages:
```bash
cd out
git init
git add .
git commit -m "Deploy portfolio redesign"
git push origin main:gh-pages
```

- [ ] **Step 4: Verify live production site**

Visit deployed URL and verify all checklists

- [ ] **Step 5: Commit any final changes**

```bash
cd ..
git add .
git commit -m "chore: final adjustments after testing"
```

---

**End of Implementation Plan**
