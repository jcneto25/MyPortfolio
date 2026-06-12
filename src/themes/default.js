export default {
  // Typography
  fonts: {
    title: "'Space Grotesk', 'Inter', 'Roboto', sans-serif",
    main: "'Inter', 'Roboto', sans-serif"
  },
  // Typographic scale (1rem = 10px via 62.5% base)
  type: {
    scale: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      md: "18px",
      lg: "20px",
      xl: "24px",
      xxl: "32px",
      xxxl: "48px",
      display: "56px",
      hero: "65px",
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    leading: {
      tight: 1.1,
      snug: 1.25,
      normal: 1.5,
      relaxed: 1.7,
    },
    tracking: {
      darkSurface: "0.01em",
      uppercaseLabel: "0.08em",
    },
    measure: {
      body: "720px",
      wide: "800px",
      narrow: "560px",
    },
  },
  // Dark mode color palette
  colors: {
    // Backgrounds
    primary: "#0D0D0D",
    secondary: "#1A1A1A",
    cards: "#252525",

    // Accents for Agent-Powered content
    agentPurple: "#8B5CF6",
    agentGreen: "#10B981",
    purpleDark: "#6D28D9",
    accentTeal: "#13ADC7",

    // Traditional project section
    traditionalLinkBg: "#6b3030",
    traditionalTitle: "#9cc9e3",
    traditionalTag: "#d8bfbf",
    traditionalDivider: "#d0bb57",

    // Card surfaces
    cardsAlt: "#212D45",

    // Text colors
    textPrimary: "#FFFFFF",
    textSecondary: "#B4B4B4",
    textMuted: "#6B6B6B",

    // Borders
    borderAgent: "rgba(139, 92, 246, 0.5)",
    borderAgentHover: "#8B5CF6",
    borderTraditional: "#404040",

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
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  },
}
