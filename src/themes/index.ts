import { ThemeContext, Theme, useTheme } from '@emotion/react';
import { createContext, useContext } from 'react';

import { default as nautilus } from './nautilus';
import { default as styleguide } from './styleguide';
import './types';

const nautilusDefaultTheme = nautilus;

export const themes = { nautilus, styleguide };
export { nautilusDefaultTheme, useTheme };
