import React from 'react';

import { muteConsole, render } from 'utils/testing';

import { Paragraph } from 'components';
import Tab from './Tab';

describe('Tabs.Tab', () => {
  it('should render nothing when no children are provided', () => {
    muteConsole({ times: 1, type: 'error' });
    const { container } = render(<Tab />);

    expect(container.firstChild).toBeNull();
  });

  it('should render a <section> tag', () => {
    const { container } = render(
      <Tab label="About">
        <Paragraph>Puppies are cute.</Paragraph>
      </Tab>,
    );

    expect(container.firstChild.tagName).toEqual('SECTION');
  });

  it('should render the label inside an h4', () => {
    const { container } = render(
      <Tab label="About">
        <Paragraph>Puppies are cute.</Paragraph>
      </Tab>,
    );

    expect(container.firstChild.children[0].tagName).toEqual('H4');
  });

  it('should render the children as-provided', () => {
    const { container } = render(
      <Tab label="About">
        <Paragraph>Puppies are cute.</Paragraph>
      </Tab>,
    );

    expect(container.firstChild.children[1].tagName).toEqual('P');
  });

  it('should render styles for a Tab', () => {
    const { container } = render(
      <Tab label="About">
        <Paragraph>Puppies are cute.</Paragraph>
      </Tab>,
    );

    expect(container).toMatchSnapshot();
  });
});
