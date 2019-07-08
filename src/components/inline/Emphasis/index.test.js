import React, { createRef } from 'react';

import { render } from 'utils/testing';

import Emphasis from '.';

describe('Emphasis', () => {
  it('should render an <em> tag', () => {
    const { container } = render(<Emphasis>Hello</Emphasis>);

    expect(container.firstChild.tagName).toEqual('EM');
  });

  it('should output its children', () => {
    const { getByTestId } = render(
      <Emphasis>
        <span data-testid="child" />
      </Emphasis>,
    );

    expect(getByTestId('child')).toBeDefined();
  });

  it('should accept and pass through other props', () => {
    const { getByTestId } = render(
      <Emphasis className="custom-class" data-testid="myText">
        hello
      </Emphasis>,
    );

    expect(getByTestId('myText').classList).toContain('custom-class');
  });

  it('should match styles', () => {
    const { container } = render(<Emphasis>hello</Emphasis>);

    expect(container).toMatchSnapshot();
  });

  it('should forward refs', () => {
    const ref = createRef();

    render(<Emphasis ref={ref}>Italicised text</Emphasis>);

    expect(ref.current).not.toBeNull();
    expect(ref.current.tagName).toEqual('EM');
  });
});
