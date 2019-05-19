import React from 'react';

import { render } from 'utils/testing';

import Button from '.';

describe('Button', () => {
  it('should render a <button> by default', () => {
    const { container } = render(<Button>Hello</Button>);

    expect(container.firstChild.tagName).toEqual('BUTTON');
  });

  it('should render an <a> tag when `navigation` is set', () => {
    const { container } = render(<Button navigation>Follow link</Button>);

    expect(container.firstChild.tagName).toEqual('A');
  });
});
