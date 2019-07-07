import React from 'react';

import { muteConsole, renderWithRouter } from 'utils/testing';

import Link from '.';

describe('Link', () => {
  it('should render an <a> tag', () => {
    const { container } = renderWithRouter(<Link to="/nowhere/">Hello</Link>);

    expect(container.firstChild.tagName).toEqual('A');
  });

  it('should output its children', () => {
    const { getByTestId } = renderWithRouter(
      <Link to="/nowhere/">
        <span data-testid="child" />
      </Link>,
    );

    expect(getByTestId('child')).toBeDefined();
  });

  it('should accept and pass through other props', () => {
    const { getByTestId } = renderWithRouter(
      <Link className="custom-class" data-testid="myText" to="/nowhere/">
        hello
      </Link>,
    );

    expect(getByTestId('myText').classList).toContain('custom-class');
  });

  it('should output an href prop when the to prop is supplied', () => {
    const { container } = renderWithRouter(<Link to="/a-url/">Hello</Link>);

    expect(container.firstChild.getAttribute('href')).toEqual('/a-url/');
  });

  it('should require the `to` prop and ignore `href`', () => {
    // `to` is a required prop, so mute the console error that would otherwise
    // appear in the tests.
    muteConsole({ times: 1, type: 'error' });
    renderWithRouter(<Link href="/nowhere/">hello</Link>);

    expect(global.console.error.mock.calls[0][0]).toMatch(
      'Warning: Failed prop type: The prop `to` is marked as required in `Link`, but its value is `undefined`.',
    );
  });

  it('should ignore the href prop', () => {
    // `to` is a required prop, so mute the console error that would otherwise
    // appear in the tests.
    muteConsole({ times: 1, type: 'error' });
    const { container } = renderWithRouter(<Link href="/nowhere/">hello</Link>);

    expect(container.firstChild.getAttribute('href')).toEqual('');
  });

  it('should add an icon when `external` is set', () => {
    const { container } = renderWithRouter(
      <Link to="https://elsewhere.net/" external>
        hello
      </Link>,
    );

    expect(container.firstChild.tagName).toEqual('A');
    expect(container.firstChild.children[0].children[0].tagName).toEqual('svg');
  });

  it('should output Link styles', () => {
    const { container } = renderWithRouter(
      <Link to="https://elsewhere.net/">hello</Link>,
    );

    expect(container).toMatchSnapshot();
  });
});
