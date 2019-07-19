import React, { createRef } from 'react';

import { axe, render } from 'utils/testing';

import Tag from '.';

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

  it('should forward refs', () => {
    const ref = createRef();

    render(<Tag ref={ref}>Bold text</Tag>);

    expect(ref.current).not.toBeNull();
    expect(ref.current.tagName).toEqual('SPAN');
  });

  describe('accessibility', () => {
    it('should pass aXe tests', async () => {
      const { container } = render(<Tag>hello</Tag>);

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });
  });
});
