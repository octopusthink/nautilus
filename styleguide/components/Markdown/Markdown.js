import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';
import { compiler } from 'markdown-to-jsx';
import stripHtmlComments from 'strip-html-comments';
import Link from 'rsg-components/Link';
import Text from 'rsg-components/Text';
import Code from 'rsg-components/Code';
import Hr from 'rsg-components/Markdown/Hr';
import { Details, DetailsSummary } from 'rsg-components/Markdown/Details';
import { Table, TableHead, TableBody, TableRow, TableCell } from 'rsg-components/Markdown/Table';
import Checkbox from './Checkbox';
import PreBase from './Pre';
import Blockquote from './Blockquote';

import Heading from '../../../src/components/ui/Heading';
import PageTitle from '../../../src/components/ui/PageTitle';
import Paragraph from '../../../src/components/ui/Paragraph';
import List from '../List';

const Pre = (props) => {
  const { children } = props;
  if (isValidElement(children)) {
    // Avoid rendering <Code> inside <Pre>
    return <PreBase {...children.props} />;
  }
  return <PreBase {...props} />;
};
Pre.propTypes = {
  children: PropTypes.node,
};

export const baseOverrides = {
  a: {
    component: Link,
  },
  h1: {
    component: PageTitle,
  },
  h2: {
    component: Heading,
    props: {
      className: 'markdown-h2',
      level: 2,
    },
  },
  h3: {
    component: Heading,
    props: {
      className: 'markdown-h3',
      level: 3,
    },
  },
  h4: {
    component: Heading,
    props: {
      level: 4,
    },
  },
  h5: {
    component: Heading,
    props: {
      level: 5,
    },
  },
  h6: {
    component: Heading,
    props: {
      level: 6,
    },
  },
  p: {
    component: Paragraph,
  },
  em: {
    component: Text,
    props: {
      semantic: 'em',
    },
  },
  strong: {
    component: Text,
    props: {
      semantic: 'strong',
    },
  },
  ul: {
    component: List,
  },
  ol: {
    component: List,
    props: {
      ordered: true,
    },
  },
  blockquote: {
    component: Blockquote,
  },
  code: {
    component: Code,
  },
  pre: {
    component: Pre,
  },
  input: {
    component: Checkbox,
  },
  hr: {
    component: Hr,
  },
  table: {
    component: Table,
  },
  thead: {
    component: TableHead,
  },
  th: {
    component: TableCell,
    props: {
      header: true,
    },
  },
  tbody: {
    component: TableBody,
  },
  tr: {
    component: TableRow,
  },
  td: {
    component: TableCell,
  },
  details: {
    component: Details,
  },
  summary: {
    component: DetailsSummary,
  },
};

export const inlineOverrides = {
  ...baseOverrides,
  p: {
    component: Text,
  },
};

function Markdown({ text, inline }) {
  const overrides = inline ? inlineOverrides : baseOverrides;
  return compiler(stripHtmlComments(text), { overrides, forceBlock: true });
}

Markdown.propTypes = {
  text: PropTypes.string.isRequired,
  inline: PropTypes.bool,
};

export default Markdown;
