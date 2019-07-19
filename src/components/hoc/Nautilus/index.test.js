import { Link as ReachRouterLink } from '@reach/router';
import React from 'react';

import { Heading, Link, Paragraph } from 'components';
import { render } from 'utils/testing';

import Nautilus from '.';

describe('Nautilus', () => {
  it('should render nothing by default', () => {
    const { container } = render(<Nautilus />);

    expect(container.firstChild).toBeNull();
  });

  it('should render children', () => {
    const { getByText } = render(
      <Nautilus>
        <Heading>I&#39;m Important</Heading>
        <Paragraph>Here I am, rock you like a paragraph.</Paragraph>
      </Nautilus>,
    );

    expect(getByText("I'm Important").tagName).toEqual('H2');
    expect(getByText('Here I am, rock you like a paragraph.').tagName).toEqual(
      'P',
    );
  });

  it('provide context from config', () => {
    const { getByText } = render(
      <Nautilus config={{ LinkComponent: ReachRouterLink }}>
        <Link to="/somewhere/">I am a custom-config link.</Link>
      </Nautilus>,
    );

    const link = getByText('I am a custom-config link.');

    expect(link.tagName).toEqual('A');
    expect(link.getAttribute('href')).toEqual('/somewhere/');
  });
});
