import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    color-scheme: dark;
  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
    letter-spacing: 0.01em;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    scroll-margin-top: 96px;
  }

  a {
    text-decoration: none;
  }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid ${props => props.theme.colors.agentGreen};
    outline-offset: 3px;
  }

  li{
    list-style: none;
  }

  .skip-link {
    position: absolute;
    left: 16px;
    top: -48px;
    z-index: 999;
    padding: 12px 16px;
    border-radius: 8px;
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.textPrimary};
    border: 1px solid ${props => props.theme.colors.agentGreen};
    transition: top 0.2s ease;
  }

  .skip-link:focus-visible {
    top: 16px;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
      scroll-behavior: auto !important;
    }
  }

`;

export default GlobalStyles;
