import { Link as ReachRouterLink } from '@reach/router';
import React from 'react';

import { axe, render } from 'utils/testing';

import Link from '.';
import Nautilus from '../../hoc/Nautilus';

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

  it('should output an href prop', () => {
    const { container } = render(<Link href="/a-url/">Hello</Link>);

    expect(container.firstChild.getAttribute('href')).toEqual('/a-url/');
  });

  it('should use an `<a>` tag by default when `external` is set, even if there is a default link component specified in the Nautilus config', () => {
    const { container } = render(
      <Nautilus LinkComponent="span">
        <Link href="https://octopusthink.com/" external>
          hello
        </Link>
      </Nautilus>,
    );

    expect(container.firstChild.tagName).toEqual('A');
    expect(container.firstChild.getAttribute('href')).toEqual('https://octopusthink.com/');
  });

  it('should add an icon when `external` is set', () => {
    const { container } = render(
      <Link href="https://octopusthink.com/" external>
        hello
      </Link>,
    );

    expect(container.firstChild.tagName).toEqual('A');
    expect(container.firstChild.children[0].children[0].tagName).toEqual('svg');
  });

  it('should output Link styles', () => {
    const { container } = render(<Link href="https://octopusthink.com/">hello</Link>);

    expect(container).toMatchSnapshot();
  });

  it('should not output styles when unstyled is set', () => {
    const { container } = render(
      <Link href="https://octopusthink.com/" unstyled>
        hello
      </Link>,
    );

    expect(container).toMatchSnapshot();
  });

  describe('accessibility', () => {
    it('should pass aXe tests', async () => {
      const { container } = render(<Link href="/">Homepage</Link>);

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });
  });

  describe('with default Link components', () => {
    it('should output an href prop when the to prop is supplied', () => {
      const { container } = render(
        <Nautilus config={{ LinkComponent: ReachRouterLink }}>
          <Link to="/a-url/">Hello</Link>
        </Nautilus>,
      );

      expect(container.firstChild.getAttribute('href')).toEqual('/a-url/');
    });
  });

  describe('with custom Link components', () => {
    it('should output an href prop when the to prop is supplied', () => {
      const { container } = render(
        <Link as={ReachRouterLink} to="/a-url/">
          Hello
        </Link>,
      );

      expect(container.firstChild.getAttribute('href')).toEqual('/a-url/');
    });
  });
});
