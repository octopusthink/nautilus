import React, { createRef } from 'react';

import { axe, muteConsole, render } from 'utils/testing';

import Icon from '.';

describe('Icon', () => {
  it('requires a name prop', () => {
    muteConsole({ times: 1, type: 'error' });
    render(<Icon />);

    expect(
      global.console.error.mock.calls[
        global.console.error.mock.calls.length - 1
      ][0],
    ).toMatch('The prop `name` is marked as required in `Icon`');
  });

  it('should return `null` when no `name` prop is supplied', () => {
    muteConsole({ times: 1, type: 'error' });
    const { container } = render(<Icon />);

    // Nothing is rendered by `Icon` when no `name` prop is used.
    expect(container.firstChild).toBeNull();
  });

  it('should render an <svg> tag with a <span> wrapper', () => {
    const { container } = render(<Icon name="airplay" />);

    expect(container.firstChild.tagName).toEqual('SPAN');
    expect(container.firstChild.firstChild.tagName).toEqual('svg');
  });

  it('should output the svg content inside a <g> tag', () => {
    const { container } = render(<Icon name="airplay" />);

    expect(container.firstChild.firstChild.firstChild.tagName).toEqual('g');
  });

  it('should output its children', () => {
    const { getByTestId } = render(
      <Icon name="archive">
        <span data-testid="child" />
      </Icon>,
    );

    expect(getByTestId('child')).toBeDefined();
  });

  it('should accept and pass through other props', () => {
    const { getByTestId } = render(
      <Icon className="custom-class" data-testid="myText" name="archive">
        hello
      </Icon>,
    );

    expect(getByTestId('myText').classList).toContain('custom-class');
  });

  describe('accessibility', () => {
    it('should set `aria-hidden` if no `title` exists', () => {
      const { container } = render(<Icon name="archive" />);

      expect(
        container.firstChild.firstChild.getAttribute('aria-hidden'),
      ).toEqual('true');
    });

    it('should pass aXe tests without a title', async () => {
      const { container } = render(<Icon name="archive" />);

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });

    it('should not set `aria-hidden` if a `title` is supplied', () => {
      const { container } = render(
        <Icon name="archive" title="Paper filing box" />,
      );

      expect(
        container.firstChild.firstChild.getAttribute('aria-hidden'),
      ).toBeNull();
    });

    it('should pass aXe tests with a title', async () => {
      const { container } = render(
        <Icon name="archive" title="Paper filing box" />,
      );

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });
  });

  it('should forward refs', () => {
    const ref = createRef();

    render(<Icon name="archive" title="Paper filing box" ref={ref} />);

    expect(ref.current).not.toBeNull();
    expect(ref.current.tagName).toEqual('svg');
  });
});
