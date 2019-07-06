import React from 'react';

import { render } from 'utils/testing';

import { Paragraph } from 'components';
import Tabs from '.';

describe('Tabs', () => {
  it('should render nothing when no children are provided', () => {
    const { container } = render(<Tabs />);

    expect(container.firstChild).toBeNull();
  });

  it('should render a <ul> with an <li> for each tab', () => {
    const { container } = render(
      <Tabs>
        <Tabs.Tab label="About">
          <Paragraph>Puppies are cute.</Paragraph>
        </Tabs.Tab>
        <Tabs.Tab label="History">
          <Paragraph>Puppies have already been cute.</Paragraph>
        </Tabs.Tab>
      </Tabs>,
    );

    expect(container.firstChild.tagName).toEqual('UL');
    expect(container.firstChild.children[0].tagName).toEqual('LI');
    expect(container.firstChild.children[1].tagName).toEqual('LI');
  });

  it('should render a <section> for each tab', () => {
    const { container } = render(
      <Tabs>
        <Tabs.Tab label="About">
          <Paragraph>Puppies are cute.</Paragraph>
        </Tabs.Tab>
        <Tabs.Tab label="History">
          <Paragraph>Puppies have already been cute.</Paragraph>
        </Tabs.Tab>
      </Tabs>,
    );

    expect(container.children[1].tagName).toEqual('SECTION');
    expect(container.children[2].tagName).toEqual('SECTION');
  });
});
