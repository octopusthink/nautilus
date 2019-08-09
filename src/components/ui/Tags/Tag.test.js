import React from 'react';

import { fireEvent, render } from 'utils/testing';

import Tag from './Tag';

describe('Tag', () => {
  it('should render a <span> tag', () => {
    const { container } = render(<Tag>Hello</Tag>);

    expect(container.firstChild.tagName).toEqual('SPAN');
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

  it('should dismiss a Tag with `onDismiss` set', () => {
    const onDismiss = jest.fn();
    const { container, getByTestId } = render(
      <Tag data-testid="myTag" onDismiss={onDismiss}>
        hello
      </Tag>,
    );

    expect(getByTestId('myTag')).toBeDefined();

    fireEvent.click(container.querySelector('button'));

    expect(onDismiss).toHaveBeenCalled();
    expect(() => {
      getByTestId('myTag');
    }).toThrow('Unable to find an element');
  });
});
