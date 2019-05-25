import { ThemeContext } from '@emotion/core';
import { useContext } from 'react';

export const useTheme = () => useContext(ThemeContext);

export * from './propTypes';

export { default as nautilus } from './nautilus';

export default useTheme;
