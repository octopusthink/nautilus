import React from 'react';

import { Heading, Paragraph } from 'components';
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
        <Heading level={1}>I'm Important</Heading>
        <Paragraph>Here I am, rock you like a paragraph.</Paragraph>
      </Nautilus>,
    );

    expect(getByText("I'm Important").tagName).toEqual('H1');
    expect(getByText('Here I am, rock you like a paragraph.').tagName).toEqual(
      'P',
    );
  });
});
