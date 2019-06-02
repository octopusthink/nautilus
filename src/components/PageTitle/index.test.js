import React from 'react';

import { render } from 'utils/testing';

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
});
