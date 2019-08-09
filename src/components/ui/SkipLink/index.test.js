import React from 'react';

import { render } from 'utils/testing';

import SkipLink from '.';

describe('SkipLink', () => {
  it('should render an <a> tag', () => {
    const { container } = render(<SkipLink />);

    expect(container.firstChild.tagName).toEqual('A');
  });

  it('should contain styles, including focus styles that reveal the link', () => {
    const { container } = render(<SkipLink />);

    expect(container).toMatchSnapshot();
  });

  it('should include default text', () => {
    const { getByText } = render(<SkipLink />);

    expect(getByText('Skip to main content')).toBeDefined();
  });

  it('should not require any props', () => {
    const { container, getByText } = render(<SkipLink />);

    expect(container.firstChild.tagName).toEqual('A');
    expect(getByText('Skip to main content')).toBeDefined();
  });

  it('should change the ID used when the `toId` prop is supplied', () => {
    const { container } = render(<SkipLink toId="main" />);

    expect(container.firstChild.getAttribute('href')).toEqual('#main');
  });

  it('should output its children', () => {
    const { getByTestId } = render(
      <SkipLink>
        <span data-testid="child">Skip to content</span>
      </SkipLink>,
    );

    expect(getByTestId('child')).toBeDefined();
  });

  it('should accept and pass through other props', () => {
    const { getByTestId } = render(
      <SkipLink className="custom-class" data-testid="myText">
        hello
      </SkipLink>,
    );

    expect(getByTestId('myText').classList).toContain('custom-class');
  });
});
