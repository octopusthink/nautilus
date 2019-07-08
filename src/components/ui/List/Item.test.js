import React, { createRef } from 'react';

import { render } from 'utils/testing';

import List from '.';

describe('List.Item', () => {
  it('should render an <li> tag', () => {
    const { getByTestId } = render(
      <List.Item data-testid="listItem">hello</List.Item>,
    );

    expect(getByTestId('listItem').tagName).toEqual('LI');
  });

  it('should render list styles', () => {
    const { container } = render(
      <List.Item data-testid="listItem">hello</List.Item>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should accept and pass through other props', () => {
    const { getByTestId } = render(
      <List.Item className="foo" data-testid="listItem">
        hello
      </List.Item>,
    );

    expect(getByTestId('listItem').classList).toContain('foo');
  });

  it('should forward refs', () => {
    const ref = createRef();

    render(<List.Item ref={ref}>Puppies are cute.</List.Item>);

    expect(ref.current).not.toBeNull();
    expect(ref.current.tagName).toEqual('LI');
  });
});
