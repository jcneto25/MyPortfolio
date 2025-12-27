# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 12.3.1 and React 17.0.2. The site uses styled-components for styling and integrates with Baserow as a headless CMS for dynamic content management. The application is designed to be statically exported for production deployment.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build application and generate static export (runs `next build && next export`)
- `npm start` - Start production server

## Architecture

### Directory Structure
```
src/
├── components/       # Feature components (each with own styles)
│   ├── Acomplishments/
│   ├── BackgrooundAnimation/  # Note: typo in original directory name
│   ├── Hero/
│   ├── Projects/
│   ├── Technologies/
│   └── TimeLine/
├── constants/
│   └── constants.js  # Static project data
├── layout/
│   ├── Layout.js     # Main layout wrapper (Header + Footer)
│   └── LayoutStyles.js
├── pages/
│   ├── _app.js       # App wrapper with Theme provider
│   ├── _document.js  # Custom document with styled-components SSR
│   └── index.js      # Home page with getStaticProps
├── styles/
│   ├── globals.js    # Global styles
│   ├── theme.js      # Theme provider component
│   └── GlobalComponents/  # Reusable styled components (Section, Button, etc.)
└── themes/
    └── default.js    # Theme tokens (colors, fonts, breakpoints)
```

### Styling System
- **Theme tokens**: Centralized in `src/themes/default.js` with colors, fonts, and breakpoints
- **Styled-components**: Component-scoped styling using theme props via `props.theme`
- **Global components**: Reusable styled components in `src/styles/GlobalComponents/`:
  - `Section` - Main container with grid/flex support (accepts `grid`, `row`, `nopadding` props)
  - `SectionTitle`, `SectionText`, `SectionSubText` - Typography components
  - `SectionDivider` - Gradient dividers
  - `ButtonBack`, `ButtonFront`, `SecondaryBtn` - Button variants
  - `LinkContainer`, `LinkIconImg` - Social link styling
- **Responsive design**: Mobile-first with breakpoint media queries using theme tokens
- **Styled-normalize**: Cross-browser consistency via `styled-normalize`

### Data Management

#### Static Data (Projects)
Projects stored in `src/constants/constants.js` as array with structure:
```javascript
{ title, description, image, tags[], source, visit, id }
```

#### Dynamic Data (Timeline)
Timeline data fetched from Baserow via `getStaticProps` in `src/pages/index.js`:
- Uses native `fetch` (not baserow-client library despite being in dependencies)
- Environment variables:
  - `NEXT_PUBLIC_BASEROW_API_TOKEN` - Authorization token
  - `NEXT_PUBLIC_BASEROW_HOST` - API URL (default: `https://api.baserow.io`)
  - `NEXT_PUBLIC_BASEROW_TABLE_ID` - Timeline table ID
- Graceful fallback: Returns empty array on fetch failure
- ISR revalidation: 60 seconds

### App Structure

**Page Flow**: `_app.js` → `Layout` → Component Sections
- `_app.js` wraps app with `Theme` provider from `src/styles/theme.js`
- `Layout.js` wraps pages with Header and Footer
- `index.js` composes sections: Hero, Projects, Technologies, Timeline, Acomplishments

**Styled-Components SSR**: `_document.js` implements server-side rendering:
- Uses `ServerStyleSheet` to collect styles during SSR
- Prevents flash of unstyled content

### Component Patterns
1. **Feature Components**: Each in own directory with component + co-located styles
2. **Props for Layout**: `Section` component accepts `grid`, `row`, `nopadding` props
3. **Theme Access**: Styled components access theme via `props.theme.breakpoints` etc.
4. **Gradient Styling**: Heavy use of linear gradients for text and buttons

### Build Output
- Static export to `/out` directory via `next export`
- No server-side rendering in production
- Deployment-ready for static hosting (Vercel, Netlify, etc.)

### Environment Setup

Create `.env.local` with:
```
NEXT_PUBLIC_BASEROW_API_TOKEN=your_token_here
NEXT_PUBLIC_BASEROW_HOST=https://api.baserow.io
NEXT_PUBLIC_BASEROW_TABLE_ID=your_table_id
```

### Content Language
Site content is in Portuguese (Brazilian audience). Timeline data from Baserow uses field names "Ano" (year) and "conquista" (achievement).

<!-- BACKLOG.MD MCP GUIDELINES START -->

<CRITICAL_INSTRUCTION>

## BACKLOG WORKFLOW INSTRUCTIONS

This project uses Backlog.md MCP for all task and project management activities.

**CRITICAL GUIDANCE**

- If your client supports MCP resources, read `backlog://workflow/overview` to understand when and how to use Backlog for this project.
- If your client only supports tools or the above request fails, call `backlog.get_workflow_overview()` tool to load the tool-oriented overview (it lists the matching guide tools).

- **First time working here?** Read the overview resource IMMEDIATELY to learn the workflow
- **Already familiar?** You should have the overview cached ("## Backlog.md Overview (MCP)")
- **When to read it**: BEFORE creating tasks, or when you're unsure whether to track work

These guides cover:
- Decision framework for when to create tasks
- Search-first workflow to avoid duplicates
- Links to detailed guides for task creation, execution, and completion
- MCP tools reference

You MUST read the overview resource to understand the complete workflow. The information is NOT summarized here.

</CRITICAL_INSTRUCTION>

<!-- BACKLOG.MD MCP GUIDELINES END -->
