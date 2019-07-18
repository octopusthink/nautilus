import React, { createRef } from 'react';

import { axe, render } from 'utils/testing';

import Link from '.';

describe('Link', () => {
  it('should render an <a> tag', () => {
    const { container } = render(<Link href="/nowhere/">Hello</Link>);

    expect(container.firstChild.tagName).toEqual('A');
  });

  it('should output its children', () => {
    const { getByTestId } = render(
      <Link href="/nowhere/">
        <span data-testid="child" />
      </Link>,
    );

    expect(getByTestId('child')).toBeDefined();
  });

  it('should accept and pass through other props', () => {
    const { getByTestId } = render(
      <Link className="custom-class" data-testid="myText" href="/nowhere/">
        hello
      </Link>,
    );

    expect(getByTestId('myText').classList).toContain('custom-class');
  });

  it('should output an href prop when the to prop is supplied', () => {
    const { container } = render(<Link href="/a-url/">Hello</Link>);

    expect(container.firstChild.getAttribute('href')).toEqual('/a-url/');
  });

  it('should add an icon when `external` is set', () => {
    const { container } = render(
      <Link href="https://elsewhere.net/" external>
        hello
      </Link>,
    );

    expect(container.firstChild.tagName).toEqual('A');
    expect(container.firstChild.children[0].children[0].tagName).toEqual('svg');
  });

  it('should output Link styles', () => {
    const { container } = render(
      <Link href="https://elsewhere.net/">hello</Link>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should forward refs when using ReactRouterLink', () => {
    const ref = createRef();

    render(
      <Link href="/" ref={ref}>
        Homepage
      </Link>,
    );

    expect(ref.current).not.toBeNull();
    expect(ref.current.tagName).toEqual('A');
  });

  it('should forward refs when using useHref', () => {
    const ref = createRef();

    render(
      <Link ref={ref} href="/" useHref>
        Homepage
      </Link>,
    );

    expect(ref.current).not.toBeNull();
    expect(ref.current.tagName).toEqual('A');
  });

  describe('accessibility', () => {
    it('should pass aXe tests', async () => {
      const { container } = render(<Link href="/">Homepage</Link>);

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });
  });
});
