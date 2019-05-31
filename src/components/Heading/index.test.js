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

  it('should render an <h2> tag when the `large` prop is set', () => {
    const { container } = render(<Heading large>Big heading</Heading>);

    expect(container.firstChild.tagName).toEqual('H2');
  });

  it('should render an <h3> tag when the `medium` prop is set', () => {
    const { container } = render(<Heading medium>Regular heading</Heading>);

    expect(container.firstChild.tagName).toEqual('H3');
  });

  it('should render an <h4> tag when the `small` prop is set', () => {
    const { container } = render(<Heading small>Tiny heading</Heading>);

    expect(container.firstChild.tagName).toEqual('H4');
  });

  it('should output large CSS when the `large` prop is set', () => {
    const { container } = render(<Heading large>Big heading</Heading>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should output medium CSS when the `medium` prop is set', () => {
    const { container } = render(<Heading medium>So-so heading</Heading>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should output small CSS when the `small` prop is set', () => {
    const { container } = render(<Heading small>Tiny heading</Heading>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should only allow one of large/medium/small props', () => {
    const errorText =
      '<Heading> can only be one of large/medium/small. Please only set one.';

    expect(() => {
      render(
        <Heading large medium small>
          Big and small
        </Heading>,
      );
    }).toThrow(errorText);

    expect(() => {
      render(
        <Heading large small>
          Big and small
        </Heading>,
      );
    }).toThrow(errorText);

    expect(() => {
      render(
        <Heading medium small>
          Big and small
        </Heading>,
      );
    }).toThrow(errorText);

    expect(() => {
      render(
        <Heading large medium>
          Big and small
        </Heading>,
      );
    }).toThrow(errorText);
  });
});
