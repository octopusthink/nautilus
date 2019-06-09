import React from 'react';

import { render } from 'utils/testing';

import Paragraph from '.';

describe('Paragraph', () => {
  it('should render a <p> by default', () => {
    const { container } = render(<Paragraph>Hello</Paragraph>);

    expect(container.firstChild.tagName).toEqual('P');
  });

  it('should output its children', () => {
    const { getByTestId } = render(
      <Paragraph>
        <span data-testid="child" />
      </Paragraph>,
    );

    expect(getByTestId('child')).toBeDefined();
  });

  it('should output large CSS the `large` prop is set', () => {
    const { container } = render(
      <Paragraph large>I&apos;m an important body of text.</Paragraph>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should output regular CSS when neither `large` nor `small` props are set', () => {
    const { container } = render(<Paragraph>Lorem ipsum.</Paragraph>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should output small CSS the `small` prop is set', () => {
    const { container } = render(
      <Paragraph small>I&apos;m a tiny body of text.</Paragraph>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should accept and pass through other props', () => {
    const { getByTestId } = render(
      <Paragraph className="custom-class" data-testid="myText">
        hello
      </Paragraph>,
    );

    expect(getByTestId('myText').classList).toContain('custom-class');
  });
});
