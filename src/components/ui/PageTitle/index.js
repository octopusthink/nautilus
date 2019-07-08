import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { pageTitle } from 'styles';

export const PageTitle = forwardRef((props, ref) => {
  const { children, documentTitle, ...otherProps } = props;
  // const documentTitleToUse = documentTitle || children;

  return (
    <h1 ref={ref} {...otherProps}>
      {children}
    </h1>
  );
});

export const styles = ({ theme }) => {
  return css`
    ${pageTitle(theme)}
  `;
};

PageTitle.defaultProps = {
  children: undefined,
  documentTitle: undefined,
};

PageTitle.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** String to pass to the `<DocumentTitle />` tag if the children of your `<PageTitle />` are more than just text content. */
  documentTitle: PropTypes.string,
};

PageTitle.displayName = 'PageTitle';

export const { defaultProps, propTypes } = PageTitle;

export default styled(PageTitle)(styles);
