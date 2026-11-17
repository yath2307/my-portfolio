import { css } from 'styled-components';

// Latin subsets of Space Grotesk and JetBrains Mono from Fontsource, both under the
// SIL Open Font License (see OFL.txt next to each font).
import SpaceGroteskRegular from '@fonts/SpaceGrotesk/SpaceGrotesk-Regular.woff2';
import SpaceGroteskMedium from '@fonts/SpaceGrotesk/SpaceGrotesk-Medium.woff2';
import SpaceGroteskSemibold from '@fonts/SpaceGrotesk/SpaceGrotesk-Semibold.woff2';

import JetBrainsMonoRegular from '@fonts/JetBrainsMono/JetBrainsMono-Regular.woff2';
import JetBrainsMonoSemibold from '@fonts/JetBrainsMono/JetBrainsMono-Semibold.woff2';
import JetBrainsMonoRegularItalic from '@fonts/JetBrainsMono/JetBrainsMono-RegularItalic.woff2';
import JetBrainsMonoSemiboldItalic from '@fonts/JetBrainsMono/JetBrainsMono-SemiboldItalic.woff2';

// Space Grotesk has no italic styles.
const spaceGrotesk = {
  name: 'Space Grotesk',
  normal: {
    400: SpaceGroteskRegular,
    500: SpaceGroteskMedium,
    600: SpaceGroteskSemibold,
  },
  italic: {},
};

const jetBrainsMono = {
  name: 'JetBrains Mono',
  normal: {
    400: JetBrainsMonoRegular,
    600: JetBrainsMonoSemibold,
  },
  italic: {
    400: JetBrainsMonoRegularItalic,
    600: JetBrainsMonoSemiboldItalic,
  },
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, woff2] of Object.entries(family[style])) {
    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const spaceGroteskNormal = createFontFaces(spaceGrotesk);

const jetBrainsMonoNormal = createFontFaces(jetBrainsMono);
const jetBrainsMonoItalic = createFontFaces(jetBrainsMono, 'italic');

const Fonts = css`
  ${spaceGroteskNormal + jetBrainsMonoNormal + jetBrainsMonoItalic}
`;

export default Fonts;
