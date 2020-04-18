// import { useTheme } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import { default as nautilus } from './nautilus';
import { default as styleguide } from './styleguide';
import './types';

const nautilusDefaultTheme = nautilus;

export const themes = { nautilus, styleguide };
export { nautilusDefaultTheme, useTheme };
