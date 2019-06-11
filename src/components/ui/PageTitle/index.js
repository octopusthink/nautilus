import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

import { pageTitle } from 'styles';

export const PageTitle = ({ children, documentTitle, ...otherProps }) => {
  // const documentTitleToUse = documentTitle || children;

  return <h1 {...otherProps}>{children}</h1>;
};

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

export default styled(PageTitle)(styles);