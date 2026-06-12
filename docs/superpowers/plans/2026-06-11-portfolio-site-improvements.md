# Portfolio Site Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Elevar o portfólio para um nível mais profissional e convincente, corrigindo navegação, acessibilidade, SEO, clareza de posicionamento e capacidade de conversão para oportunidades em desenvolvimento agentico com IA.

**Architecture:** A implementação preserva a estrutura atual em Next.js + styled-components, priorizando melhorias cirúrgicas em componentes existentes em vez de reescrever a home. O trabalho começa pela base técnica e semântica, depois fortalece hero e projetos como prova de autoridade, e termina com refinamento visual, responsividade e QA manual.

**Tech Stack:** Next.js 12, React 17, styled-components, react-icons, i18n custom via `LanguageContext`

---

## Estrutura De Arquivos

### Arquivos a modificar

- `src/pages/index.js`
  Responsável por ordenar as seções da home e aplicar a estrutura principal da landing page.
- `src/pages/_app.js`
  Responsável por wrappers globais; pode receber um componente de SEO base ou um ponto único para metadados globais.
- `src/pages/_document.js`
  Responsável por `lang`, fontes, `theme-color`, `color-scheme` e estrutura HTML base.
- `src/layout/Layout.js`
  Responsável por skip link, landmarks e estrutura semântica global.
- `src/styles/globals.js`
  Responsável por foco visível, comportamento global, `scroll-margin-top`, `color-scheme` e ajustes globais de acessibilidade.
- `src/styles/GlobalComponents/index.js`
  Responsável por `SectionTitle`, botões e estilos globais reutilizados; precisa corrigir `outline: none`, heading principal e foco.
- `src/components/Header/Header.js`
  Responsável pela navegação, links sociais e consistência das âncoras.
- `src/components/Header/HeaderStyles.js`
  Responsável pelos estilos de navegação e estados interativos.
- `src/components/LanguageSwitcher/LanguageSwitcher.js`
  Responsável pela troca de idioma; precisa ganhar rótulos acessíveis e possivelmente semântica de grupo.
- `src/components/LanguageSwitcher/LanguageSwitcherStyles.js`
  Responsável pelos estados visuais e foco do seletor de idioma.
- `src/components/Hero/Hero.js`
  Responsável pela proposta de valor principal, CTAs e prova rápida de autoridade.
- `src/components/Hero/HeroStyles.js`
  Responsável pela hierarquia visual do hero, layout de CTA e bloco de proof points.
- `src/components/Methodology/Methodology.js`
  Responsável pela seção de metodologia; precisa melhorar escaneabilidade e consistência semântica.
- `src/components/Methodology/MethodologyStyles.js`
  Responsável pelos cards e animações; precisa remover `transition: all` e ajustar foco/hover.
- `src/components/Projects/Projects.js`
  Responsável pelo agrupamento entre projetos agentic e tradicionais.
- `src/components/Projects/ProjectCard.js`
  Responsável pelos cards, imagens, links e estrutura de prova por projeto.
- `src/components/Projects/ProjectsStyles.js`
  Responsável por cards, imagens, badge e estados interativos.
- `src/components/Technologies/Technologies.js`
  Responsável pela apresentação das competências; precisa corrigir prop de hidratação e refinar copy.
- `src/components/Technologies/TechnologiesStyles.js`
  Responsável pela visualização dos grupos técnicos; precisa trocar props públicas por transitórias.
- `src/components/TimeLine/TimeLine.js`
  Responsável pela narrativa de carreira; precisa destacar a transição para Agentic Engineering.
- `src/components/TimeLine/TimeLineStyles.js`
  Responsável por legibilidade, foco e transições.
- `src/components/Footer/Footer.js`
  Responsável pelos contatos e CTA final.
- `src/components/Footer/FooterStyles.js`
  Responsável por responsividade e legibilidade do footer.
- `src/constants/constants.js`
  Responsável pelos dados dos projetos; deve suportar campos mais estratégicos para projetos agentic.
- `src/i18n/translations/pt.json`
  Responsável pelo conteúdo em PT-BR.
- `src/i18n/translations/en.json`
  Responsável pelo conteúdo em inglês.
- `src/contexts/LanguageContext.js`
  Responsável pela linguagem atual; pode sincronizar `document.documentElement.lang` e melhorar experiência multilíngue.

### Arquivos a criar

- `src/components/Seo/Seo.js`
  Componente simples para título, descrição, OG e canonical da home.

### Estratégia de validação

- Não existe infraestrutura de testes automatizados no projeto atual.
- Para manter escopo enxuto, esta implementação usa:
  - validação manual guiada no browser;
  - `npm run build` como verificação técnica mínima;
  - checagem de console para hydration warnings;
  - verificação de acessibilidade e navegação por teclado.
- Se houver interesse futuro em regressão automatizada, abrir plano separado para Playwright.

---

### Task 1: Corrigir Base Técnica, SEO E Semântica Global

**Files:**
- Create: `src/components/Seo/Seo.js`
- Modify: `src/pages/_app.js`
- Modify: `src/pages/_document.js`
- Modify: `src/layout/Layout.js`
- Modify: `src/styles/globals.js`
- Modify: `src/styles/GlobalComponents/index.js`
- Modify: `src/contexts/LanguageContext.js`

- [ ] **Step 1: Criar um componente simples de SEO reutilizável**

```jsx
import Head from 'next/head';

const Seo = ({
  title = 'Jaime Correia Neto | Agentic Software Engineering Specialist',
  description = 'Portfolio focado em desenvolvimento agentico com IA, multi-agent orchestration, Spec-Driven Development e projetos production-ready.',
  canonical = 'https://jcneto25.vercel.app/',
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="theme-color" content="#0D0D0D" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonical} />
    <link rel="canonical" href={canonical} />
  </Head>
);

export default Seo;
```

- [ ] **Step 2: Montar o SEO na aplicação**

```jsx
import Seo from '../components/Seo/Seo';

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Theme>
        <Seo />
        <Component {...pageProps} />
      </Theme>
    </LanguageProvider>
  );
}
```

- [ ] **Step 3: Ajustar o documento HTML base**

```jsx
<Html lang="pt-BR">
  <Head>
    <meta name="theme-color" content="#0D0D0D" />
    <meta name="color-scheme" content="dark" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  </Head>
</Html>
```

- [ ] **Step 4: Adicionar skip link e landmark principal no layout**

```jsx
export const Layout = ({ children }) => {
  return (
    <Container>
      <a href="#main-content" className="skip-link">Pular para o conteúdo</a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </Container>
  );
};
```

- [ ] **Step 5: Consolidar regras globais de foco e navegação por âncora**

```css
html {
  scroll-behavior: smooth;
  color-scheme: dark;
}

h1, h2, h3, h4, h5, h6 {
  scroll-margin-top: 96px;
}

.skip-link {
  position: absolute;
  left: 16px;
  top: -48px;
}

.skip-link:focus-visible {
  top: 16px;
  z-index: 999;
}

a:focus-visible,
button:focus-visible {
  outline: 2px solid #10B981;
  outline-offset: 3px;
}
```

- [ ] **Step 6: Corrigir heading principal e remover `outline: none` sem substituição**

```jsx
export const HeroTitle = styled.h1`
  font-weight: 800;
  font-size: 65px;
  line-height: 72px;
`;
```

```jsx
&:focus-visible {
  outline: 2px solid ${props => props.theme.colors.agentGreen};
  outline-offset: 3px;
}
```

- [ ] **Step 7: Sincronizar idioma atual com `document.documentElement.lang`**

```jsx
useEffect(() => {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
}, [language]);
```

- [ ] **Step 8: Validar visualmente a base global**

Run: `npm run dev`
Expected: home carrega com título, skip link focável, foco visível e sem console warnings novos.

- [ ] **Step 9: Validar build**

Run: `npm run build`
Expected: build finaliza sem erro fatal de renderização.

- [ ] **Step 10: Commit**

```bash
git add src/components/Seo/Seo.js src/pages/_app.js src/pages/_document.js src/layout/Layout.js src/styles/globals.js src/styles/GlobalComponents/index.js src/contexts/LanguageContext.js
git commit -m "feat: improve site semantics and seo foundation"
```

---

### Task 2: Corrigir Navegação, Links Externos E Acessibilidade Do Header

**Files:**
- Modify: `src/components/Header/Header.js`
- Modify: `src/components/Header/HeaderStyles.js`
- Modify: `src/components/LanguageSwitcher/LanguageSwitcher.js`
- Modify: `src/components/LanguageSwitcher/LanguageSwitcherStyles.js`
- Modify: `src/components/Projects/Projects.js`

- [ ] **Step 1: Corrigir âncoras da navegação**

```jsx
<Link href="#projects">
  <NavLink>{t('header.nav.projects')}</NavLink>
</Link>
```

```jsx
<Section nopadding id="projects">
```

- [ ] **Step 2: Dar nome acessível aos links sociais**

```jsx
<SocialIcons
  href="http://github.com/jcneto25"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub de Jaime Correia Neto"
>
  <AiFillGithub size="3rem" aria-hidden="true" />
</SocialIcons>
```

- [ ] **Step 3: Melhorar a semântica do seletor de idioma**

```jsx
<LanguageContainer role="group" aria-label={t('header.languageSwitcher.label')}>
  <LanguageButton
    type="button"
    aria-pressed={language === 'pt'}
    active={language === 'pt'}
  >
    {t('header.languageSwitcher.portuguese')}
  </LanguageButton>
</LanguageContainer>
```

- [ ] **Step 4: Adicionar estados visuais consistentes para hover e foco**

```jsx
export const NavLink = styled.a`
  transition: color 0.2s ease, opacity 0.2s ease;

  &:hover {
    color: #fff;
  }

  &:focus-visible {
    outline: 2px solid #10B981;
    outline-offset: 4px;
    border-radius: 6px;
  }
`;
```

- [ ] **Step 5: Validar navegação por teclado**

Run: abrir a home e usar `Tab` do topo até o footer
Expected: foco sempre visível; `Projetos`, `Tecnologias`, `Sobre`, idioma e ícones sociais são alcançáveis e compreensíveis.

- [ ] **Step 6: Commit**

```bash
git add src/components/Header/Header.js src/components/Header/HeaderStyles.js src/components/LanguageSwitcher/LanguageSwitcher.js src/components/LanguageSwitcher/LanguageSwitcherStyles.js src/components/Projects/Projects.js
git commit -m "fix: improve header navigation and accessibility"
```

---

### Task 3: Reescrever O Hero Para Conversão E Clareza De Posicionamento

**Files:**
- Modify: `src/components/Hero/Hero.js`
- Modify: `src/components/Hero/HeroStyles.js`
- Modify: `src/i18n/translations/pt.json`
- Modify: `src/i18n/translations/en.json`

- [ ] **Step 1: Enxugar a proposta de valor do hero**

```json
{
  "hero": {
    "title": "Especialista em",
    "titleHighlight": "Agentic Software Engineering",
    "description": "Desenvolvo software com agentes, orquestração multi-agent e Spec-Driven Development para transformar requisitos complexos em soluções production-ready.",
    "supportingText": "Framework open-source, projetos reais com IA e 25+ anos de experiência em engenharia de software."
  }
}
```

- [ ] **Step 2: Trocar CTA principal de botão para link semântico**

```jsx
<ButtonAsLink
  href="https://jcneto25.github.io/MyResume/"
  target="_blank"
  rel="noopener noreferrer"
>
  {t('hero.buttonResume')}
</ButtonAsLink>
```

- [ ] **Step 3: Adicionar CTAs secundários orientados à navegação**

```jsx
<SecondaryActions>
  <SecondaryLink href="#methodology">{t('hero.buttonMethodology')}</SecondaryLink>
  <SecondaryLink href="#projects">{t('hero.buttonProjects')}</SecondaryLink>
</SecondaryActions>
```

- [ ] **Step 4: Inserir prova rápida no hero**

```jsx
<ProofList>
  <ProofItem>25+ anos em tecnologia</ProofItem>
  <ProofItem>Framework open-source</ProofItem>
  <ProofItem>Projetos production-ready com IA</ProofItem>
</ProofList>
```

- [ ] **Step 5: Ajustar layout do hero para leitura e escaneabilidade**

```jsx
export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
`;
```

- [ ] **Step 6: Validar a dobra principal**

Run: abrir a home em desktop e mobile
Expected: o visitante entende em menos de 5 segundos quem você é, o que faz e para onde deve clicar.

- [ ] **Step 7: Commit**

```bash
git add src/components/Hero/Hero.js src/components/Hero/HeroStyles.js src/i18n/translations/pt.json src/i18n/translations/en.json
git commit -m "feat: strengthen hero messaging and conversion"
```

---

### Task 4: Transformar Projetos Em Prova De Competência

**Files:**
- Modify: `src/constants/constants.js`
- Modify: `src/components/Projects/Projects.js`
- Modify: `src/components/Projects/ProjectCard.js`
- Modify: `src/components/Projects/ProjectsStyles.js`
- Modify: `src/i18n/translations/pt.json`
- Modify: `src/i18n/translations/en.json`

- [ ] **Step 1: Enriquecer dados dos projetos agentic**

```js
{
  title: 'Live and Let Code',
  description: 'Framework para Spec-Driven Development agentico.',
  outcome: 'Padroniza especificação, implementação e revisão com agentes.',
  architecture: 'Multi-agent workflow com foco em qualidade e contexto.',
  ctaLabel: 'Ver Repositório',
  isAgentProject: true
}
```

- [ ] **Step 2: Separar o texto dos cards em blocos mais fáceis de escanear**

```jsx
<CardInfo isAgent={isAgent}>
  <strong>{project.description}</strong>
</CardInfo>
{project.architecture && <MetaLine>{project.architecture}</MetaLine>}
{project.outcome && <MetaLine>{project.outcome}</MetaLine>}
```

- [ ] **Step 3: Melhorar imagens para reduzir CLS**

```jsx
<Img
  src={project.image}
  alt={project.title}
  width="400"
  height="220"
  loading={isAgent ? 'eager' : 'lazy'}
  isAgent={isAgent}
/>
```

- [ ] **Step 4: Tornar os links mais específicos**

```jsx
<ExternalLinks ...>
  {project.ctaLabel || t('projects.source')}
</ExternalLinks>
```

- [ ] **Step 5: Remover `transition: all` dos cards**

```jsx
transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
```

- [ ] **Step 6: Reduzir o peso visual dos projetos tradicionais**

```jsx
<ProjectGrid isCompact>
  {traditionalProjects.map(...)}
</ProjectGrid>
```

```jsx
max-width: ${props => props.isAgent ? '400px' : '320px'};
opacity: ${props => props.isAgent ? 1 : 0.92};
```

- [ ] **Step 7: Validar contraste entre Agent Projects e Foundation Projects**

Run: abrir a seção `Projetos`
Expected: os projetos agentic são claramente a vitrine principal; os tradicionais funcionam como suporte.

- [ ] **Step 8: Commit**

```bash
git add src/constants/constants.js src/components/Projects/Projects.js src/components/Projects/ProjectCard.js src/components/Projects/ProjectsStyles.js src/i18n/translations/pt.json src/i18n/translations/en.json
git commit -m "feat: make project cards support agentic positioning"
```

---

### Task 5: Refinar Metodologia, Tecnologias E Timeline Como Prova De Autoridade

**Files:**
- Modify: `src/components/Methodology/Methodology.js`
- Modify: `src/components/Methodology/MethodologyStyles.js`
- Modify: `src/components/Technologies/Technologies.js`
- Modify: `src/components/Technologies/TechnologiesStyles.js`
- Modify: `src/components/TimeLine/TimeLine.js`
- Modify: `src/components/TimeLine/TimeLineStyles.js`
- Modify: `src/i18n/translations/pt.json`
- Modify: `src/i18n/translations/en.json`

- [ ] **Step 1: Melhorar escaneabilidade da metodologia**

```jsx
<SectionSubText>{t('methodology.subtitle')}</SectionSubText>
<SectionSubText>{t('methodology.whatItIs')}</SectionSubText>
```

```json
{
  "methodology": {
    "whatItIs": "Framework open-source para transformar especificações funcionais em software production-ready com agentes especializados."
  }
}
```

- [ ] **Step 2: Remover `transition: all` e honrar movimento reduzido**

```css
transition: transform 0.3s ease, box-shadow 0.3s ease;

@media (prefers-reduced-motion: reduce) {
  transition: none;
  transform: none;
}
```

- [ ] **Step 3: Corrigir prop de hidratação em tecnologias**

```jsx
<TechIcon $muted>{icon}</TechIcon>
<TechItemTitle $muted>{...}</TechItemTitle>
<TechItemDesc $muted>{...}</TechItemDesc>
```

```jsx
color: ${props => props.$muted
  ? props.theme.colors.textMuted
  : props.theme.colors.agentPurple};
```

- [ ] **Step 4: Reforçar a leitura da timeline como jornada até especialização**

```jsx
<SectionText style={{ fontSize: '18px', maxWidth: '900px', marginBottom: '24px' }}>
  {t('timeline.subtitle')}
</SectionText>
```

```json
{
  "timeline": {
    "subtitle": "Jornada de 25+ anos em tecnologia, da base full-stack à especialização em Agentic Engineering."
  }
}
```

- [ ] **Step 5: Ajustar cards da timeline para melhor leitura**

```jsx
transition: background-color 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
```

- [ ] **Step 6: Validar ausência de hydration warning**

Run: abrir console do browser após refresh
Expected: warning de `muted` não aparece mais.

- [ ] **Step 7: Commit**

```bash
git add src/components/Methodology/Methodology.js src/components/Methodology/MethodologyStyles.js src/components/Technologies/Technologies.js src/components/Technologies/TechnologiesStyles.js src/components/TimeLine/TimeLine.js src/components/TimeLine/TimeLineStyles.js src/i18n/translations/pt.json src/i18n/translations/en.json
git commit -m "fix: refine authority sections and remove hydration warning"
```

---

### Task 6: Melhorar Footer, Contato E Fechamento Da Página

**Files:**
- Modify: `src/components/Footer/Footer.js`
- Modify: `src/components/Footer/FooterStyles.js`
- Modify: `src/i18n/translations/pt.json`
- Modify: `src/i18n/translations/en.json`

- [ ] **Step 1: Transformar o footer em um fechamento mais orientado à conversão**

```jsx
<LinkTitle>{t('footer.contactTitle')}</LinkTitle>
<Slogan>{t('footer.contactDescription')}</Slogan>
```

- [ ] **Step 2: Corrigir legibilidade mobile**

```jsx
@media ${props => props.theme.breakpoints.sm} {
  font-size: 14px;
  line-height: 20px;
}
```

- [ ] **Step 3: Adicionar rótulos acessíveis aos ícones decorativos**

```jsx
<AiOutlineWhatsApp size={50} aria-hidden="true" className="icon" />
<AiFillMail size={50} aria-hidden="true" className="icon" />
```

- [ ] **Step 4: Validar leitura no mobile**

Run: abrir o footer em viewport estreita
Expected: telefone e e-mail permanecem legíveis e clicáveis sem parecerem comprimidos.

- [ ] **Step 5: Commit**

```bash
git add src/components/Footer/Footer.js src/components/Footer/FooterStyles.js src/i18n/translations/pt.json src/i18n/translations/en.json
git commit -m "feat: improve footer clarity and contact conversion"
```

---

### Task 7: QA Final, Build E Checklist De Publicação

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Executar QA manual completo**

Run: `npm run dev`
Expected:
- home abre com título e descrição corretos;
- navegação por âncoras funciona;
- idioma PT/EN troca conteúdo sem quebrar layout;
- hero comunica valor com clareza;
- projetos agentic dominam a percepção da seção;
- footer fecha a jornada com CTA claro.

- [ ] **Step 2: Executar build final**

Run: `npm run build`
Expected: build concluído com sucesso.

- [ ] **Step 3: Registrar checklist de publicação no README**

```md
## Pre-publish checklist

- Verify SEO title and description
- Verify PT and EN content
- Verify keyboard navigation
- Verify anchor navigation
- Verify `npm run build`
```

- [ ] **Step 4: Commit**

```bash
git add README.md
git commit -m "docs: add portfolio qa and release checklist"
```

---

## Sequência Recomendada

1. Task 1: Base técnica, SEO e semântica.
2. Task 2: Header e navegação.
3. Task 3: Hero e proposta de valor.
4. Task 4: Projetos como prova de competência.
5. Task 5: Autoridade nas seções de metodologia, tecnologias e timeline.
6. Task 6: Footer e CTA final.
7. Task 7: QA e preparação para publicação.

## Critérios De Sucesso

- A home passa a ter `title`, descrição, `theme-color`, canonical e OG básicos.
- O hero responde claramente: quem é você, o que faz e por que isso importa.
- O visitante chega aos projetos agentic com um clique e entende que eles são a vitrine principal.
- A navegação por teclado funciona com foco visível em todos os elementos interativos.
- Não há mismatch de hidratação no console.
- O site permanece bilíngue e responsivo em desktop e mobile.
- O footer deixa uma rota clara para contato ou aprofundamento.

## Riscos E Decisões

- Não adicionar automação de testes neste plano evita aumento desnecessário de escopo.
- Não introduzir novas dependências preserva velocidade de implementação.
- Se surgir necessidade de analytics, estudos de caso ou depoimentos, tratar como plano separado.

## Self-Review

- Cobertura do diagnóstico: o plano cobre navegação quebrada, SEO ausente, heading incorreto, foco inacessível, links sem rótulo, warning de hidratação, baixa conversão do hero, fraca diferenciação dos projetos e legibilidade mobile do footer.
- Scan de placeholders: não há `TODO`, `TBD` ou referência circular entre tarefas.
- Consistência: todos os caminhos e componentes referenciados existem no projeto atual, com apenas um novo arquivo proposto para SEO.

**Plan complete and saved to `docs/superpowers/plans/2026-06-11-portfolio-site-improvements.md`. Two execution options:**

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**
