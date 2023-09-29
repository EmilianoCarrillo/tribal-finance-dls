import { addons } from '@storybook/manager-api';
import tfSbTheme from './tfSbTheme';

addons.setConfig({
  theme: tfSbTheme,
});