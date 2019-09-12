import React from 'react';

import { axe, render } from 'utils/testing';

import VisuallyHidden from '.';

describe('Heading', () => {
  it('should render a <span> by default', () => {
    const { container } = render(<VisuallyHidden>Hello</VisuallyHidden>);

    expect(container.firstChild.tagName).toEqual('SPAN');
  });

  it('should output its children', () => {
    const { getByTestId } = render(
      <VisuallyHidden>
        <span data-testid="child" />
      </VisuallyHidden>,
    );

    expect(getByTestId('child')).toBeDefined();
  });

  it('should be hidden with CSS', () => {
    const { container } = render(<VisuallyHidden>Howdy</VisuallyHidden>);

    expect(container).toMatchSnapshot();
  });

  it('should accept and pass through other props', () => {
    const { getByTestId } = render(
      <VisuallyHidden className="custom-class" data-testid="hidden">
        hello
      </VisuallyHidden>,
    );

    expect(getByTestId('hidden').classList).toContain('custom-class');
  });

  describe('accessibility', () => {
    it('should pass aXe tests', async () => {
      const { container } = render(<VisuallyHidden>Hello to assistive technology!</VisuallyHidden>);

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });
  });
});
