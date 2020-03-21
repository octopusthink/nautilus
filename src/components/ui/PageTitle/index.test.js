import React from 'react';

import { axe, render } from 'utils/testing';

import PageTitle from '.';

describe('PageTitle', () => {
  it('should render an <h1>', () => {
    const { container } = render(<PageTitle>My Account</PageTitle>);

    expect(container.firstChild.tagName).toEqual('H1');
  });

  it('should output its children', () => {
    const { getByTestId } = render(
      <PageTitle>
        <div data-testid="child" />
      </PageTitle>,
    );

    expect(getByTestId('child')).toBeDefined();
  });

  it('should output pageTitle CSS', () => {
    const { container } = render(<PageTitle>My Blog Posts</PageTitle>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not output CSS when unstyled prop is set', () => {
    const { container } = render(<PageTitle unstyled>My Blog Posts</PageTitle>);

    expect(container.firstChild).toMatchSnapshot();
  });

  describe('accessibility', () => {
    it('should pass aXe tests', async () => {
      const { container } = render(<PageTitle>My Blog Posts</PageTitle>);

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });
  });
});
