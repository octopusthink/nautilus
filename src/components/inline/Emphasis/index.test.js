import React from 'react';

import { axe, render } from 'utils/testing';

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

  describe('accessibility', () => {
    it('should pass aXe tests', async () => {
      const { container } = render(<Emphasis>hello</Emphasis>);

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });
  });
});
