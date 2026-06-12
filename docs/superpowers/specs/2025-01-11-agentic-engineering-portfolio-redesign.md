# Agentic Engineering Portfolio Redesign — Design Specification

**Date:** 2026-06-11  
**Author:** Jaime Correia Neto  
**Status:** Approved  
**Type:** Portfolio Redesign — Reposicionamento para Especialista em Agentic Engineering

---

## 1. Overview

### 1.1 Objective

Reposition portfolio from "full-stack developer who also knows AI" to "Agentic Software Engineering Specialist" with focus on:
- Agent orchestration (Claude CLI, OpenCode, Cursor, Antigravity, Aider)
- Spec-Driven Development with Live and Let Code framework
- Production-ready agent projects (neuroHub, social-story)
- 25+ years foundational experience supporting current specialization

### 1.2 Target Audience

HR headhunters looking for:
- Specialists in agentic development (not generalists)
- Practitioners with real agent projects in production
- Thought leaders with methodology/frameworks
- Senior developers with solid foundation

### 1.3 Key Changes

1. **Hero**: Complete repositioning to Agentic Engineering
2. **New Section**: Live and Let Code methodology showcase
3. **Projects**: Reorganized into Agent Projects (primary) + Traditional Projects (secondary)
4. **Technologies**: Restructured with AI/Agents as core layer
5. **Timeline**: Updated content to reflect specialization journey
6. **Visual Design**: Dark mode with purple/green accents, Inter font, Agent-Powered badges

---

## 2. Content Structure

### 2.1 Hero

**Position**: First section, replaces current Hero

**Title**:
- PT: "Especialista em Agentic Software Engineering"
- EN: "Agentic Software Engineering Specialist"

**Description**:
- PT: "Desenvolvo software com agentes usando Claude CLI, OpenCode, Cursor, Antigravity CLI e Aider. Especialista em Spec-Driven Development com gestão eficiente de contexto para otimização de tokens. Aplico TDD com agentes, code review agentico automatizado, refinement loops human-agent e multi-agent orquestration. Autor do framework Live and Let Code — metodologia production-ready para desenvolvimento agentico com agents-first design."
- EN: "I build agent-powered software using Claude CLI, OpenCode, Cursor, Antigravity CLI, and Aider. Specialist in Spec-Driven Development with efficient context management for token optimization. I apply TDD with agents, automated agent code review, human-agent refinement loops, and multi-agent orchestration. Author of Live and Let Code framework — production-ready agentic development methodology with agents-first design."

**Buttons**:
1. "Conheça meu CV / See my Resume" (existing)
2. "Ver Metodologia / See Methodology" (NEW — anchor to #methodology)
3. "Ver Projetos Agent / See Agent Projects" (NEW — anchor to #projects)

**Removal**: BackgroundAnimation component (distraction)

---

### 2.2 Metodologia Live and Let Code (NEW SECTION)

**Position**: After Hero, before Projects

**Title**:
- PT: "Metodologia de Desenvolvimento Agentico"
- EN: "Agentic Development Methodology"

**Subsections**:

**2.2.1 O que é**
- PT: "Framework open-source para Spec-Driven Development com agentes. Transforma especificações funcionais em código production-ready através de orquestração multi-agentes."
- EN: "Open-source framework for Spec-Driven Development with agents. Transforms functional specifications into production-ready code through multi-agent orchestration."

**2.2.2 Como funciona (4 phases)**
1. **Spec Definition** — Clear functional spec with acceptance criteria
2. **Agent Orchestration** — Multiple specialized agents (architect, developer, reviewer)
3. **Code Generation + Review** — Agent implementation with automated code review
4. **Human Refinement** — Human-agent refinement loop for optimization

**2.2.3 Benefícios**
- Consistency: Specs as single source of truth
- Speed: Agents accelerate implementation
- Quality: Automated agent code review
- Flexibility: Human in the loop for complex decisions

**2.2.4 Call-to-Action**
- PT: "📖 [Ver no GitHub](https://github.com/jcneto25/Live-and-Let-Code/)"
- EN: "📖 [View on GitHub](https://github.com/jcneto25/Live-and-Let-Code/)"

**Visual**: Cards for each phase, icons, simple flow (1→2→3→4)

---

### 2.3 Projects

**Restructure into 2 subsections**

#### 2.3.1 Agent Projects (PRIMARY)

**Subtitle**:
- PT: "Soluções desenvolvidas com arquiteturas multi-agentes"
- EN: "Solutions built with multi-agent architectures"

**Projects**:

**1. Live and Let Code**
- PT: "Framework para Spec-Driven Development agentico"
- EN: "Framework for agent Spec-Driven Development"
- Image: Placeholder (workflow/methodology icon)
- Tags: Agents, Spec-Driven, Open-Source
- Source: https://github.com/jcneto25/Live-and-Let-Code/
- Visit: (same URL)

**2. social-story**
- PT: "SaaS generative AI para histórias sociais TEA. LLMs multi-modais (texto + imagem) para criar conteúdo personalizado."
- EN: "Generative AI SaaS for TEA social stories. Multi-modal LLMs (text + image) for personalized content."
- Image: /images/social-story.png (ADD)
- Tags: Agents, Generative AI, LLM, SaaS
- Source: https://github.com/jcneto25/social-story
- Visit: (demo link if available)

**3. neuroHub**
- PT: "Plataforma TEA multi-stakeholder com PEI estruturado (LP/MP/CP). Conecta terapeutas, pais, escolas e clínicas."
- EN: "TEA multi-stakeholder platform with structured IEP (LP/MP/CP). Connects therapists, parents, schools, and clinics."
- Image: /images/neurohub.png (ADD)
- Tags: Agents, Healthcare, Education, Platform
- Source: https://github.com/jcneto25/neuroHub
- Visit: (demo link if available)

#### 2.3.2 Traditional Projects (SECONDARY)

**Subtitle**:
- PT: "Fundação Full-Stack (projetos anteriores)"
- EN: "Full-Stack Foundation (prior work)"

**Projects**: Keep existing (SmartFix, Hotel, Gym, E-Commerce, Mobile, Low-Code, Workflow Automation)

**Visual**:
- Agent Projects: Large cards, visual prominence, "Agent-Powered" badge
- Traditional Projects: Smaller cards, collapse/expand (optional)

---

### 2.4 Technologies

**Restructure into 3 groups**

#### 2.4.1 Core: Agent & AI (PRIMARY)

**Title**: "🤖 Agent Orchestration & LLMs"

**Items**:
- **Agent Frameworks**: LangChain, CrewAI, Flowise
- **LLM Terminals**: Claude CLI, OpenCode, Cursor, Antigravity, Aider
- **Vector DBs**: ChromaDB, Pinecone
- **Multi-modal**: GPT-4V (Vision), DALL-E, Stable Diffusion

#### 2.4.2 Methods: Agentic Practices (SECONDARY)

**Title**: "⚡ Agentic Development Methods"

**Items**:
- **Spec-Driven Development**: Live and Let Code framework
- **Test-Driven**: TDD with agents
- **Code Review**: Automated agent review
- **Context Management**: Token optimization
- **Refinement Loops**: Human-agent iteration

#### 2.4.3 Foundation: Full-Stack (SUPPORT)

**Title**: "🛠️ Full-Stack Foundation"

**Items** (condensed from current):
- Frontend: React, Next.js, Material UI
- Backend: Node.js, Express
- Database: SQL (SQLServer, Oracle, MySQL) + NoSQL (MongoDB, Cassandra)
- Cloud: Oracle Cloud Certified
- DevOps: Docker, Git/GitHub
- Other: Python, Power Platform, Linux

**Visual**:
- Core: Large cards, colorful icons
- Methods: Medium cards, practice highlights
- Foundation: Smaller cards, monochrome icons

---

### 2.5 Timeline (About Me)

**Title**: "Sobre Mim / About Me"

**Subtitle** (NEW):
- PT: "Jornada de 25+ anos em tecnologia — de full-stack tradicional à especialização em Agentic Engineering"
- EN: "25+ year journey in technology — from traditional full-stack to Agentic Engineering specialization"

**Content (UPDATED)**:

PT:
"Profissional de tecnologia atuando no mercado desde 1996. Iniciei com desenvolvimento full-stack tradicional (web, mobile, backend) e ao longo de 2 décadas evolui para especialização em Agentic Software Engineering.

Atualmente gerencio a unidade de desenvolvimento dinâmico do Tribunal de Justiça do Ceará, onde lidero a transição de low-code/no-code para soluções agent-powered. Minha expertise combina:

- **Fundação Sólida:** 25+ anos em full-stack (React, Next.js, Node.js, SQL/NoSQL, Cloud)
- **Especialização Atual:** Foco em arquiteturas multi-agentes, Spec-Driven Development, orquestração com LangChain/CrewAI/Flowise
- **Prática Real:** Framework open-source (Live and Let Code), projetos production-ready (neuroHub, social-story)
- **Liderança:** Gestão de equipes de desenvolvimento em ambiente corporativo

Minha abordagem: agents-first design para resolver problemas complexos com qualidade e velocidade."

EN:
"Technology professional working in the market since 1996. I started with traditional full-stack development (web, mobile, backend) and over 2 decades evolved to specialize in Agentic Software Engineering.

Currently I manage the dynamic development unit of the Court of Justice of Ceará, where I lead the transition from low-code/no-code to agent-powered solutions. My expertise combines:

- **Solid Foundation:** 25+ years in full-stack (React, Next.js, Node.js, SQL/NoSQL, Cloud)
- **Current Specialization:** Focus on multi-agent architectures, Spec-Driven Development, orchestration with LangChain/CrewAI/Flowise
- **Real Practice:** Open-source framework (Live and Let Code), production-ready projects (neuroHub, social-story)
- **Leadership:** Development team management in corporate environment

My approach: agents-first design to solve complex problems with quality and speed."

---

### 2.6 Accomplishments

**No structural changes.** Keep Baserow integration.

**Suggested additions to Baserow**:
- 2024: Live and Let Code (open-source framework)
- 2024: neuroHub (TEA platform production-ready)
- 2024: social-story (generative AI SaaS)

---

## 3. Visual Design System

### 3.1 Color Palette: Dark Mode + Accents

**Backgrounds**:
- Primary: `#0D0D0D` (near black)
- Secondary: `#1A1A1A` (dark gray)
- Cards: `#252525` (medium gray)

**Accents for Agent-Powered**:
- Primary Accent: `#8B5CF6` (vibrant purple) — Agent Projects, badges, CTAs
- Secondary Accent: `#10B981` (green) — Success, confirmations, active links

**Text**:
- Primary: `#FFFFFF` (white)
- Secondary: `#B4B4B4` (light gray)
- Muted: `#6B6B6B` (medium gray)

**Gradients**:
- Hero gradient: `#8B5CF6 → #6D28D9` (purple to dark purple)
- Button gradient: `#8B5CF6 → #10B981` (purple to green)

---

### 3.2 Typography: Tech Sans-serif

**Primary Font**: Inter (Roboto fallback)

**Weights**:
- Regular: 400
- Semibold: 600
- Bold: 700

**Line Heights**:
- Body: 1.5
- Headings: 1.2

**Sizes**:
- Hero Title: 48px (mobile) / 64px (desktop)
- Section Titles: 32px / 40px
- Body: 16px / 18px
- Captions: 14px

---

### 3.3 Agent Projects Highlights

**Badge "Agent-Powered"**:
- Position: Top-right corner of cards
- Background: `#8B5CF6`, white text
- Padding: 4px 12px, border-radius: 4px
- Font: 12px, weight 600, uppercase
- Shadow: Subtle glow `#8B5CF6` 20% opacity

**Agent Project Cards**:
- Border: 1px solid `#8B5CF6` (50% opacity)
- Hover: Border 100% opacity + soft shadow
- Background: `#252525` → `#2A2A2A` (hover)

**Traditional Project Cards**:
- Border: 1px solid `#404040` (gray)
- No badge
- Smaller visual height

---

## 4. Implementation Plan

### 4.1 Files to Modify

**Content**:
- `src/pages/index.js` — Add Methodology section, reorganize sections
- `src/i18n/translations/pt.json` — Update all content strings
- `src/i18n/translations/en.json` — Update all content strings
- `src/constants/constants.js` — Add Agent Projects (Live and Let Code, social-story, neuroHub)

**Components**:
- `src/components/Hero/Hero.js` — Update title, description, add 2 buttons
- `src/components/Hero/HeroStyles.js` — Update styling for new design
- `src/components/Projects/Projects.js` — Reorganize into 2 subsections
- `src/components/Projects/ProjectsStyles.js` — Update styling for Agent vs Traditional
- `src/components/Technologies/Technologies.js` — Restructure into 3 groups
- `src/components/Technologies/TechnologiesStyles.js` — Update styling

**New Components**:
- `src/components/Methodology/Methodology.js` — NEW component
- `src/components/Methodology/MethodologyStyles.js` — NEW styles

**Theme**:
- `src/themes/default.js` — Add color palette, update typography

**Removal**:
- Remove `BgAnimation` from `src/pages/index.js`

### 4.2 Assets to Add

**Images**:
- `/images/social-story.png` — Screenshot/logo for social-story
- `/images/neurohub.png` — Screenshot/logo for neuroHub
- `/images/live-and-let-code-icon.png` — Icon for Live and Let Code (or use generic methodology icon)

### 4.3 Baserow Updates

**Add to Accomplishments table**:
- 2024: Live and Let Code (open-source framework)
- 2024: neuroHub (TEA platform production-ready)
- 2024: social-story (generative AI SaaS)

### 4.4 Dependencies

**No new dependencies required.** All changes use existing:
- styled-components
- react-icons
- Existing Baserow integration

---

## 5. Implementation Order

1. **Theme Setup** — Update `default.js` with new colors/typography
2. **Hero** — Update content and buttons
3. **Methodology** — Create new component
4. **Projects** — Reorganize structure + add Agent Projects
5. **Technologies** — Restructure into 3 groups
6. **Timeline** — Update content
7. **Accomplishments** — Add entries to Baserow
8. **Assets** — Add project screenshots/logos
9. **Testing** — Verify responsive, bilingual, all sections render
10. **Deployment** — Build, export, deploy

---

## 6. Success Criteria

**Content**:
- ✅ Hero mentions only Agentic Engineering (no "web, data science, etc")
- ✅ Methodology section clearly explains Live and Let Code
- ✅ Agent Projects prominently displayed with badges
- ✅ Technologies shows AI/Agents as core layer
- ✅ Timeline reflects specialization journey

**Visual**:
- ✅ Dark mode with purple/green accents
- ✅ Inter font (or Roboto)
- ✅ Agent-Powered badges on agent projects
- ✅ Clear visual hierarchy (Agent > Traditional)

**Functional**:
- ✅ All sections render correctly
- ✅ Bilingual (PT/EN) works
- ✅ Responsive on mobile/desktop
- ✅ Baserow integration intact
- ✅ Links work (GitHub, demo, CV)

---

## 7. Notes

**Future Enhancements** (out of scope for this redesign):
- Add case studies showing Live and Let Code in action
- Interactive demos of agent projects
- Blog section showcasing Agentic Engineering thought leadership
- Testimonials from neuroHub/social-story users

**Maintenance**:
- Keep Agent Projects updated as new projects added
- Regularly update Live and Let Code section as framework evolves
- Consider adding analytics to track which sections get most engagement

---

**End of Specification**
