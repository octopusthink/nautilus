import React from 'react';

import { render } from 'utils/testing';

import Heading from '.';

describe('Heading', () => {
  it('should render an <h2> by default', () => {
    const { container } = render(<Heading>Hello</Heading>);

    expect(container.firstChild.tagName).toEqual('H2');
  });

  it('should output its children', () => {
    const { getByTestId } = render(
      <Heading>
        <div data-testid="child" />
      </Heading>,
    );

    expect(getByTestId('child')).toBeDefined();
  });

  it('should render an <h2> tag when the `level` prop is 2', () => {
    const { container } = render(<Heading level={2}>Big heading</Heading>);

    expect(container.firstChild.tagName).toEqual('H2');
  });

  it('should render an <h3> tag when the `level` prop is 3', () => {
    const { container } = render(<Heading level={3}>So-so heading</Heading>);

    expect(container.firstChild.tagName).toEqual('H3');
  });

  it('should render an <h4> tag when the `level` prop is 4', () => {
    const { container } = render(<Heading level={4}>Tiny heading</Heading>);

    expect(container.firstChild.tagName).toEqual('H4');
  });

  it('should output large CSS when the `level` prop is 2', () => {
    const { container } = render(<Heading level={2}>Big heading</Heading>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should output medium CSS when the `level` prop is 3', () => {
    const { container } = render(<Heading level={3}>So-so heading</Heading>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should output small CSS when the `level` prop is 4', () => {
    const { container } = render(<Heading level={4}>Tiny heading</Heading>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
