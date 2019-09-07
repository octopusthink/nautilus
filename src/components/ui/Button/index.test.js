import React from 'react';

import { axe, muteConsole, render } from 'utils/testing';

import Button from '.';

describe('Button', () => {
  it('should render a <button> by default', () => {
    const { container } = render(<Button>Hello</Button>);

    expect(container.firstChild.tagName).toEqual('BUTTON');
  });

  it('should match styles', () => {
    const { container } = render(<Button>Hello</Button>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render a disabled <button> when `disabled` prop is false', () => {
    const { container } = render(<Button disabled={false}>Hello</Button>);

    expect(container.firstChild.getAttribute('disabled')).toEqual(null);
  });

  it('should not render a disabled attribute when `disabled` prop is set on a navigation button', () => {
    const { container } = render(
      <Button disabled navigation href="/some-route/">
        Hello
      </Button>,
    );

    expect(container.firstChild.getAttribute('disabled')).toEqual(null);
  });

  it('should render a disabled <button> when `disabled` prop is set', () => {
    const { container } = render(<Button disabled>Hello</Button>);

    expect(container.firstChild.getAttribute('disabled')).toEqual('');
  });

  it('should render an <a> tag when `navigation` is set', () => {
    const { container } = render(
      <Button navigation to="/some-page/">
        Follow link
      </Button>,
    );

    expect(container.firstChild.tagName).toEqual('A');
  });

  it('should only allow one of minimal/primary props', () => {
    expect(() => {
      muteConsole({ times: 2, type: 'error' });
      render(
        <Button minimal primary>
          Important but not
        </Button>,
      );
    }).toThrow('<Button> should not be both `minimal` and `primary`, so which is it?');
  });

  it('should only allow one of danger/success/warning props', () => {
    const errorText =
      '<Button> should only use one of `danger`, `warning`, or `success`. Pick a lane!';

    expect(() => {
      muteConsole({ times: 2, type: 'error' });
      render(
        <Button danger success warning>
          Bad button
        </Button>,
      );
    }).toThrow(errorText);

    expect(() => {
      muteConsole({ times: 2, type: 'error' });
      render(
        <Button danger success>
          Bad button
        </Button>,
      );
    }).toThrow(errorText);

    expect(() => {
      muteConsole({ times: 2, type: 'error' });
      render(
        <Button success warning>
          Bad button
        </Button>,
      );
    }).toThrow(errorText);

    expect(() => {
      muteConsole({ times: 2, type: 'error' });
      render(
        <Button danger warning>
          Bad button
        </Button>,
      );
    }).toThrow(errorText);
  });

  it('should accept and pass through other props', () => {
    const { getByTestId } = render(
      <Button className="custom-class" data-testid="myButton">
        hello
      </Button>,
    );

    expect(getByTestId('myButton').classList).toContain('custom-class');
  });

  describe('accessibility', () => {
    it('should pass aXe tests', async () => {
      const { container } = render(<Button>hello</Button>);

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });

    it('should pass aXe tests when navigation is set', async () => {
      const { container } = render(
        <Button navigation to="/somewhere">
          hello link
        </Button>,
      );

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });
  });
});
