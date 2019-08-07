import React from 'react';

import { axe, render } from 'utils/testing';

import Card from '.';

describe('Card', () => {
  it('should render a <div>', () => {
    const { container } = render(<Card>My Account</Card>);

    expect(container.firstChild.tagName).toEqual('DIV');
  });

  it('should output its children', () => {
    const { getByTestId } = render(
      <Card>
        <div data-testid="child" />
      </Card>,
    );

    expect(getByTestId('child')).toBeDefined();
  });

  it('should output card CSS', () => {
    const { container } = render(<Card>My Blog Posts</Card>);

    expect(container.firstChild).toMatchSnapshot();
  });

  describe('accessibility', () => {
    it('should pass aXe tests', async () => {
      const { container } = render(<Card>My Blog Posts</Card>);

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });
  });
});
