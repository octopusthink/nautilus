import React, { createRef } from 'react';

import { muteConsole, render } from 'utils/testing';

import { Paragraph } from 'components';
import Tabs from '.';

describe('Tabs.Tab', () => {
  it('should render nothing when no children are provided', () => {
    muteConsole({ times: 1, type: 'error' });
    const { container } = render(<Tabs.Tab />);

    expect(container.firstChild).toBeNull();
  });

  it('should render a <section> tag', () => {
    const { container } = render(
      <Tabs.Tab label="About">
        <Paragraph>Puppies are cute.</Paragraph>
      </Tabs.Tab>,
    );

    expect(container.firstChild.tagName).toEqual('SECTION');
  });

  it('should render the label inside an h4', () => {
    const { container } = render(
      <Tabs.Tab label="About">
        <Paragraph>Puppies are cute.</Paragraph>
      </Tabs.Tab>,
    );

    expect(container.firstChild.children[0].tagName).toEqual('H4');
  });

  it('should render the children as-provided', () => {
    const { container } = render(
      <Tabs.Tab label="About">
        <Paragraph>Puppies are cute.</Paragraph>
      </Tabs.Tab>,
    );

    expect(container.firstChild.children[1].tagName).toEqual('P');
  });

  it('should render styles for a Tabs.Tab', () => {
    const { container } = render(
      <Tabs.Tab label="About">
        <Paragraph>Puppies are cute.</Paragraph>
      </Tabs.Tab>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should not render styles when unstyled prop is set', () => {
    const { container } = render(
      <Tabs.Tab label="About" unstyled>
        <Paragraph>Puppies are cute.</Paragraph>
      </Tabs.Tab>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should forward refs', () => {
    const ref = createRef();

    render(
      <Tabs.Tab label="About" ref={ref}>
        <Paragraph>Puppies are cute.</Paragraph>
      </Tabs.Tab>,
    );

    expect(ref.current).not.toBeNull();
    expect(ref.current.tagName).toEqual('SECTION');
  });
});
