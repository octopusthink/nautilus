import { ThemeContext } from '@emotion/react';
import { useContext } from 'react';

export const useTheme = () => useContext(ThemeContext);

export * from './propTypes';

export { default as nautilus } from './nautilus';

export default useTheme;
