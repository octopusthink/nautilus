import React from 'react';

import { axe, render } from '../../../../utils/testing';
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
    const { container } = render(<Paragraph large>I&apos;m an important body of text.</Paragraph>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should output regular CSS when neither `large` nor `small` props are set', () => {
    const { container } = render(<Paragraph>Lorem ipsum.</Paragraph>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should output small CSS the `small` prop is set', () => {
    const { container } = render(<Paragraph small>I&apos;m a tiny body of text.</Paragraph>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not output styles when unstyled is set', () => {
    const { container } = render(<Paragraph unstyled>I&apos;m a body of unstyled text.</Paragraph>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("shouldn't have a margin when `noMargin` is true", () => {
    const { container } = render(
      <Paragraph noMargin>I&apos;m a paragraph with no margin.</Paragraph>,
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

  describe('accessibility', () => {
    it('should pass aXe tests', async () => {
      const { container } = render(<Paragraph>I&apos;m some text in a paragraph.</Paragraph>);

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });
  });
});
