import React from 'react';

import { axe, muteConsole, render } from '../../../../utils/testing';
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

  it('should invert CSS colour when the `inverse` prop is set', () => {
    const { container } = render(<Heading inverse>Inverted heading</Heading>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should darken text colour when `dark` prop is set', () => {
    const { container } = render(<Heading dark>Inverted heading</Heading>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should only allow one of dark/light props', () => {
    expect(() => {
      muteConsole({ times: 2, type: 'error' });
      render(
        <Heading dark light>
          Black and white
        </Heading>,
      );
    }).toThrow('Heading cannot have both `dark` and `light` props set.');
  });

  it('should only allow one of large/small props', () => {
    expect(() => {
      muteConsole({ times: 2, type: 'error' });
      render(
        <Heading large small>
          Big and little
        </Heading>,
      );
    }).toThrow('Heading cannot have both `large` and `small` props set.');
  });

  it('should accept and pass through other props', () => {
    const { getByTestId } = render(
      <Heading className="custom-class" data-testid="heading" level={3}>
        hello
      </Heading>,
    );

    expect(getByTestId('heading').classList).toContain('custom-class');
  });

  it('should not output styles when unstyled is set', () => {
    const { container } = render(<Heading unstyled>hello</Heading>);

    expect(container).toMatchSnapshot();
  });

  it('should not output styles when unstyled is set, even when style props are set', () => {
    const { container } = render(
      <Heading level={4} unstyled>
        hello
      </Heading>,
    );

    expect(container).toMatchSnapshot();
  });

  it("shouldn't have a margin when `noMargin` is true", () => {
    const { container } = render(<Heading noMargin>Hello</Heading>);

    expect(container.firstChild).toMatchSnapshot();
  });

  describe('accessibility', () => {
    it('should pass aXe tests', async () => {
      const { container } = render(<Heading level={3}>So-so heading</Heading>);

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });
  });
});
