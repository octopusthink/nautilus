import React from 'react';

import { fireEvent, render } from '../../../../utils/testing';
import Tag from './Tag';

describe('Tag', () => {
  it('should render a <div> tag', () => {
    const { container } = render(<Tag>Hello</Tag>);

    expect(container.firstChild.tagName).toEqual('DIV');
  });

  it('should output its children', () => {
    const { getByTestId } = render(
      <Tag>
        <span data-testid="child" />
      </Tag>,
    );

    expect(getByTestId('child')).toBeDefined();
  });

  it('should accept and pass through other props', () => {
    const { getByTestId } = render(
      <Tag className="custom-class" data-testid="myText">
        hello
      </Tag>,
    );

    expect(getByTestId('myText').classList).toContain('custom-class');
  });

  it('should match styles', () => {
    const { container } = render(<Tag>hello</Tag>);

    expect(container).toMatchSnapshot();
  });

  it('should not output styles when unstyled is set', () => {
    const { container } = render(<Tag unstyled>hello</Tag>);

    expect(container).toMatchSnapshot();
  });

  it("shouldn't have a margin when `noMargin` is true", () => {
    const { container } = render(<Tag noMargin>Hello</Tag>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call `onDismiss` on a Tag with `onDismiss` set', () => {
    const onDismiss = jest.fn();
    const { container, getByTestId } = render(
      <Tag data-testid="myTag" onDismiss={onDismiss}>
        hello
      </Tag>,
    );

    expect(getByTestId('myTag')).toBeDefined();

    fireEvent.click(container.querySelector('button'));

    expect(onDismiss).toHaveBeenCalled();
  });
});
