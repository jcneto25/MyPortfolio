# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 12.3.1 and React 17.0.2. The site uses styled-components for styling and integrates with Baserow as a headless CMS for dynamic content management. The application is designed to be statically exported for production deployment.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build the application and generate static export
- `npm start` - Start production server

## Architecture

### Core Structure
- **Next.js Framework**: Uses static generation with `getStaticProps` for server-side data fetching
- **Layout System**: Centralized layout component with Header and Footer components
- **Component Organization**: Modular components organized by feature in `src/components/`
- **Styling**: Styled-components with global styles in `src/styles/`
- **Theme Support**: Theme-based styling system in `src/themes/`

### Data Integration
- **Baserow Integration**: Content is dynamically fetched from Baserow tables using the baserow-client library
- **Environment Variables**: Required Baserow configuration (see `.env` file):
  - `NEXT_PUBLIC_BASEROW_API_TOKEN`
  - `NEXT_PUBLIC_BASEROW_HOST`
  - `NEXT_PUBLIC_BASEROW_TABLE_ID`
- **Static Data Fetching**: Timeline and accomplishment data fetched at build time with 60-second revalidation

### Key Components
- **Home Page** (`src/pages/index.js`): Main entry point with timeline data integration
- **Timeline Component** (`src/components/TimeLine/TimeLine.js`): Interactive carousel for professional timeline
- **Layout Components** (`src/layout/`): Header, Footer, and layout styling
- **Global Styles** (`src/styles/`): Shared styling components and utilities

### Styling System
- Uses styled-components for component-specific styling
- Styled-normalize for consistent cross-browser styling
- Theme-based approach for consistent design tokens
- Global components: `Section`, `SectionDivider`, `SectionTitle`

### Environment Setup
The application requires Baserow credentials in `.env.local`. The current configuration uses:
- Host: `https://api.baserow.io`
- Multiple table IDs for different content sections
- Static export configuration for production deployment

### Content Management
- Dynamic content is managed through Baserow tables
- Timeline data includes fields like "Ano" (year) and "conquista" (achievement)
- Content is fetched during build time with incremental static regeneration

### Build Output
- Static export generates files in `/out` directory
- Ready for deployment to static hosting services
- No server-side rendering in production