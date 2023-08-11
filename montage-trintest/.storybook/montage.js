// .storybook/YourTheme.js

import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  // Typography
  fontBase: '"Space Mono", monospace',
  fontCode: 'monospace',

  brandTitle: 'Montage Design System',
  brandUrl: 'https://sequence.film',
  brandImage: './public/logo-montage-dark.svg',
  brandTarget: '_self',

  //
  colorPrimary: '#D45453',
  colorSecondary: '#3E8EF7',

  // UI
  appBg: '#26292B',
  appContentBg: '#26292B',
  appBorderColor: '#4C5155',
  appBorderRadius: 2,

  // Text colors
  textColor: '#ECEDEE',
  textInverseColor: '#171717',

  // Toolbar default and active colors
  barTextColor: '#ECEDEE',
  barSelectedColor: '#D45453',
  barBg: '#151718',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});