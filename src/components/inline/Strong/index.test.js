import React from 'react';

import { axe, render } from 'utils/testing';

import Strong from '.';

describe('Strong', () => {
  it('should render a <strong> tag', () => {
    const { container } = render(<Strong>Hello</Strong>);

    expect(container.firstChild.tagName).toEqual('STRONG');
  });

  it('should output its children', () => {
    const { getByTestId } = render(
      <Strong>
        <span data-testid="child" />
      </Strong>,
    );

    expect(getByTestId('child')).toBeDefined();
  });

  it('should accept and pass through other props', () => {
    const { getByTestId } = render(
      <Strong className="custom-class" data-testid="myText">
        hello
      </Strong>,
    );

    expect(getByTestId('myText').classList).toContain('custom-class');
  });

  it('should match styles', () => {
    const { container } = render(<Strong>hello</Strong>);

    expect(container).toMatchSnapshot();
  });

  it('should not output styles when unstyled is set', () => {
    const { container } = render(<Strong unstyled>hello</Strong>);

    expect(container).toMatchSnapshot();
  });

  describe('accessibility', () => {
    it('should pass aXe tests', async () => {
      const { container } = render(<Strong>hello</Strong>);

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });
  });
});
