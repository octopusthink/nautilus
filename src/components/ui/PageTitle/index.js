import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';

import { pageTitle } from 'styles';
import { useTheme } from 'themes';

export const PageTitle = (props) => {
  const theme = useTheme();
  const { children, documentTitle, unstyled, ...otherProps } = props;
  // const documentTitleToUse = documentTitle || children;

  return (
    <h1
      css={
        unstyled
          ? undefined
          : css`
              ${pageTitle(theme)}
            `
      }
      {...otherProps}
    >
      {children}
    </h1>
  );
};

PageTitle.defaultProps = {
  children: undefined,
  documentTitle: undefined,
  unstyled: false,
};

PageTitle.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** String to pass to the `<DocumentTitle />` tag if the children of your `<PageTitle />` are more than just text content. */
  documentTitle: PropTypes.string,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

export const { defaultProps, propTypes } = PageTitle;

export default PageTitle;
