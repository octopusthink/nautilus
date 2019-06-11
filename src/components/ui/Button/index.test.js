import React from 'react';

import { render } from 'utils/testing';

import Button from '.';

describe('Button', () => {
  it('should render a <button> by default', () => {
    const { container } = render(<Button>Hello</Button>);

    expect(container.firstChild.tagName).toEqual('BUTTON');
  });

  it('should not render a disabled <button> when `disabled` prop is false', () => {
    const { container } = render(<Button disabled={false}>Hello</Button>);

    expect(container.firstChild.getAttribute('disabled')).toEqual(null);
  });

  it('should not render a disabled attribute when `disabled` prop is set on a navigation button', () => {
    const { container } = render(
      <Button disabled navigation>
        Hello
      </Button>,
    );

    expect(container.firstChild.getAttribute('disabled')).toEqual(null);
  });

  it('should render a disabled <button> when `disabled` prop is set', () => {
    const { container } = render(<Button disabled>Hello</Button>);

    expect(container.firstChild.getAttribute('disabled')).toEqual('');
  });

  it('should render an <a> tag when `navigation` is set', () => {
    const { container } = render(<Button navigation>Follow link</Button>);

    expect(container.firstChild.tagName).toEqual('A');
  });

  it('should only allow one of minimal/primary props', () => {
    expect(() => {
      render(
        <Button minimal primary>
          Important but not
        </Button>,
      );
    }).toThrow(
      '<Button> should not be both `minimal` and `primary`, so which is it?',
    );
  });

  it('should only allow one of danger/success/warning props', () => {
    const errorText =
      '<Button> should only use one of `danger`, `warning`, or `success`. Pick a lane!';

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

  it('should accept and pass through other props', () => {
    const { getByTestId } = render(
      <Button className="custom-class" data-testid="myButton">
        hello
      </Button>,
    );

    expect(getByTestId('myButton').classList).toContain('custom-class');
  });
});