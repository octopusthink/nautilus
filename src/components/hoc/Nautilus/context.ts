import { ReactElement, createContext } from 'react';

import LinkComponent from '../../ui/Link';

export const NautilusLinkComponentContext = createContext<ReactElement | any>(LinkComponent);
