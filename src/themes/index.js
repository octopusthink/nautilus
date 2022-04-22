import { createContext, useContext } from 'react';

export const NautilusThemeContext = createContext();

export const ThemeProvider = NautilusThemeContext.Provider;

export const useTheme = () => {
  const theme = useContext(NautilusThemeContext);

  return theme;
};

export * from './propTypes';

export { default as nautilus } from './nautilus';

export default useTheme;
