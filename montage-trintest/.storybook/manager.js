import { addons } from '@storybook/manager-api';
import montage from './montage.js';

addons.setConfig({
  theme: montage,
});