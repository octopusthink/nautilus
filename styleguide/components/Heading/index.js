import React, { Children } from 'react';

import Heading from '../../../src/components/ui/Heading';
import PageTitle from '../../../src/components/ui/PageTitle';

export function HeadingRenderer({ children, level, ...otherProps }) {
  if (level === 1) {
    const documentTitle = Children.toArray(children)
      .map((child) => {
        return child.props.children;
      })
      .reduce((acc, child) => {
        return `${acc}${child}`;
      }, '');

    return (
      <PageTitle documentTitle={documentTitle} {...otherProps}>
        {children}
      </PageTitle>
    );
  }

  return (
    <Heading level={level} {...otherProps}>
      {children}
    </Heading>
  );
}

export default HeadingRenderer;
