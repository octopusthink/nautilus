import React from 'react';

import { render } from '../../../../utils/testing';
import List from '.';

describe('List.Item', () => {
  it('should render an <li> tag', () => {
    const { getByTestId } = render(<List.Item data-testid="listItem">hello</List.Item>);

    expect(getByTestId('listItem').tagName).toEqual('LI');
  });

  it('should render list styles', () => {
    const { container } = render(<List.Item data-testid="listItem">hello</List.Item>);

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

  it('should not output styles when unstyled is set', () => {
    const { container } = render(<List.Item unstyled>raspberry</List.Item>);

    expect(container).toMatchSnapshot();
  });

  it("shouldn't have a margin when `noMargin` is true", () => {
    const { container } = render(<List.Item noMargin>Hello</List.Item>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
