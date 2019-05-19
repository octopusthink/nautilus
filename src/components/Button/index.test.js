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

  it('should only allow one of danger/success/warning props', () => {
    const errorText =
      '<Button> component should only use one of `danger`, `warning`, or `success`. Pick a lane!';

    expect(() => {
      render(
        <Button danger success warning>
          Bad button
        </Button>,
      );
    }).toThrow(errorText);

    expect(() => {
      render(
        <Button danger success>
          Bad button
        </Button>,
      );
    }).toThrow(errorText);

    expect(() => {
      render(
        <Button success warning>
          Bad button
        </Button>,
      );
    }).toThrow(errorText);

    expect(() => {
      render(
        <Button danger warning>
          Bad button
        </Button>,
      );
    }).toThrow(errorText);
  });
});
