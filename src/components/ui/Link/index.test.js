import React from 'react';

import { renderWithRouter } from 'utils/testing';

import Link from '.';

describe('Link', () => {
  it('should render an <a> tag', () => {
    const { container } = renderWithRouter(<Link to="/nowhere/">Hello</Link>);

    expect(container.firstChild.tagName).toEqual('A');
  });

  it('should output its children', () => {
    const { getByTestId } = renderWithRouter(
      <Link to="/nowhere/">
        <span data-testid="child" />
      </Link>,
    );

    expect(getByTestId('child')).toBeDefined();
  });

  it('should accept and pass through other props', () => {
    const { getByTestId } = renderWithRouter(
      <Link className="custom-class" data-testid="myText" to="/nowhere/">
        hello
      </Link>,
    );

    expect(getByTestId('myText').classList).toContain('custom-class');
  });
});
