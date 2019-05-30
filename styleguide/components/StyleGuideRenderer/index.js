// This file is largely the same as
// https://github.com/styleguidist/react-styleguidist/blob/0f461ab8f5070d5e91e8911bc2b22d805c07fb98/src/client/rsg-components/StyleGuide/StyleGuideRenderer.js,
// but adds a `<Nautilus />` wrapper so we can use our own components as
// the output components of React Styleguidist's Markdown.
import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'rsg-components/Logo';
import Markdown from 'rsg-components/Markdown';
import Styled from 'rsg-components/Styled';
import cx from 'clsx';
import Version from 'rsg-components/Version';

import Nautilus from 'components/Nautilus';

const styles = ({
  color,
  fontFamily,
  fontSize,
  sidebarWidth,
  mq,
  space,
  maxWidth,
}) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: color.baseBackground,
  },
  hasSidebar: {
    paddingLeft: sidebarWidth,
    [mq.small]: {
      paddingLeft: 0,
    },
  },
  content: {
    maxWidth,
    padding: [[space[2], space[4]]],
    margin: [[0, 'auto']],
    [mq.small]: {
      padding: space[2],
    },
    display: 'block',
  },
  sidebar: {
    backgroundColor: color.sidebarBackground,
    border: [[color.border, 'solid']],
    borderWidth: [[0, 1, 0, 0]],
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: sidebarWidth,
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    [mq.small]: {
      position: 'static',
      width: 'auto',
      borderWidth: [[1, 0, 0, 0]],
      paddingBottom: space[0],
    },
  },
  logo: {
    padding: space[2],
    borderBottom: [[1, color.border, 'solid']],
  },
  footer: {
    display: 'block',
    color: color.light,
    fontFamily: fontFamily.base,
    fontSize: fontSize.small,
  },
});

export const StyleGuideRenderer = ({
  classes,
  title,
  version,
  homepageUrl,
  children,
  toc,
  hasSidebar,
}) => {
  return (
    <Nautilus>
      <div className={cx(classes.root, hasSidebar && classes.hasSidebar)}>
        <main className={classes.content}>
          {children}
          <footer className={classes.footer}>
            <Markdown
              text={`Made with ❤️ by [Octopus Think](https://octopusthink.com/)`}
            />
          </footer>
        </main>
        {hasSidebar && (
          <div className={classes.sidebar}>
            <header className={classes.logo}>
              <Logo>{title}</Logo>
              {version && <Version>{version}</Version>}
            </header>
            {toc}
          </div>
        )}
      </div>
    </Nautilus>
  );
};

StyleGuideRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  version: PropTypes.string,
  homepageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  toc: PropTypes.node.isRequired,
  hasSidebar: PropTypes.bool,
};

export default Styled(styles)(StyleGuideRenderer);
