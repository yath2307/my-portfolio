import { css } from 'styled-components';

const variables = css`
  :root {
    --bg-dark: #0b0c0e;
    --bg: #121316;
    --surface: #1b1d21;
    --surface-light: #2b2e33;
    --shadow: rgba(0, 0, 0, 0.6);
    --dark-slate: #5f6670;
    --slate: #9ba1aa;
    --light-slate: #b9bec6;
    --lightest-slate: #e4e6ea;
    --white: #f3f4f6;
    --accent: #ffb454;
    --accent-tint: rgba(255, 180, 84, 0.1);
    --pink: #f57dff;
    --blue: #57cbff;

    --font-sans: 'Space Grotesk', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'JetBrains Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
