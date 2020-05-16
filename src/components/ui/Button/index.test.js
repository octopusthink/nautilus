import React from 'react';

import { axe, muteConsole, render } from '../../../../utils/testing';
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

  it('should show danger styles', () => {
    const { container } = render(
      <Button danger __iconId="dangerous-button">
        hello
      </Button>,
    );

    expect(container).toMatchSnapshot();
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

  it('should not output styles when unstyled is set', () => {
    const { container } = render(<Button unstyled>hello</Button>);

    expect(container).toMatchSnapshot();
  });

  it('should not output styles when unstyled is set, even with styling props', () => {
    const { container } = render(
      <Button danger unstyled __iconId="unstyled-button">
        hello
      </Button>,
    );

    expect(container).toMatchSnapshot();
  });

  it("shouldn't have a margin when `noMargin` is true", () => {
    const { container } = render(<Button noMargin>Hello</Button>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should accept and pass through other props', () => {
    const { getByTestId } = render(
      <Button className="custom-class" data-testid="myButton">
        hello
      </Button>,
    );

    expect(getByTestId('myButton').classList).toContain('custom-class');
  });

  it('should not give a manually set leadingIcon a "Nautilus-navigationIcon--animated" class', () => {
    const { container } = render(
      <Button
        href="/foo.zip"
        navigation
        navigationDirection="backward"
        leadingIcon="download"
        __iconId="test-button"
      >
        Download
      </Button>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not give a manually set trailingIcon a "Nautilus-navigationIcon--animated" class', () => {
    const { container } = render(
      <Button href="/foo.zip" navigation trailingIcon="download" __iconId="test-button">
        Download
      </Button>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  describe('icon buttons', () => {
    const buttonStyleTypes = ['success', 'danger', 'warning'];
    it.each(buttonStyleTypes)(
      'should render a leading Icon when a %s button is used',
      (buttonStyleProp) => {
        const props = { [buttonStyleProp]: true };
        const { container } = render(
          <Button {...props} __iconId="test-button">
            hello
          </Button>,
        );

        expect(container.firstChild.firstChild.tagName).toEqual('SPAN');
        expect(container.firstChild.firstChild.firstChild.tagName).toEqual('svg');
      },
    );

    it.each(buttonStyleTypes)(
      'should allow a leading Icon to be replaced for a %s button',
      (buttonStyleProp) => {
        const props = { [buttonStyleProp]: true };
        const { container } = render(
          <Button {...props} leadingIcon="arrow-right" __iconId="test-button">
            hello
          </Button>,
        );
        const { container: defaultContainer } = render(
          <Button {...props} __iconId="test-button-default">
            hello
          </Button>,
        );

        // Make sure these two SVGs are not the same.
        expect(container.firstChild.firstChild.firstChild.innerHTML).not.toEqual(
          defaultContainer.firstChild.firstChild.firstChild.innerHTML,
        );
      },
    );

    it.each(buttonStyleTypes)(
      'should allow a leading Icon to be set to null for a %s button',
      (buttonStyleProp) => {
        const props = { [buttonStyleProp]: true };
        const { container } = render(
          <Button {...props} leadingIcon={null} __iconId="test-button">
            hello
          </Button>,
        );

        // Make sure the SVG doesn't exist.
        expect(container.firstChild.firstChild.tagName).not.toEqual('SPAN');
        expect(container.firstChild.firstChild.textContent).toEqual('hello');
      },
    );

    it('should render an arrow icon for a navigation button', () => {
      const { container } = render(
        <Button navigation __iconId="test-button">
          Go forward
        </Button>,
      );

      expect(container.firstChild.lastChild.tagName).toEqual('SPAN');
      expect(container.firstChild.lastChild.classList).toContain('Nautilus-Icon--arrow-right');
      expect(container.firstChild.lastChild.firstChild.tagName).toEqual('svg');
    });

    it('should render a backward arrow icon for a navigation button with the "backward" navigationDirection prop set', () => {
      const { container } = render(
        <Button navigation navigationDirection="backward" __iconId="test-button">
          Back
        </Button>,
      );

      expect(container.firstChild.firstChild.tagName).toEqual('SPAN');
      expect(container.firstChild.firstChild.classList).toContain('Nautilus-Icon--arrow-left');
      expect(container.firstChild.firstChild.firstChild.tagName).toEqual('svg');
    });

    it('should allow navigation buttons to change their icon', () => {
      const { container } = render(
        <Button navigation trailingIcon="arrow-down" __iconId="test-button">
          Down
        </Button>,
      );

      expect(container.firstChild.lastChild.tagName).toEqual('SPAN');
      expect(container.firstChild.lastChild.classList).toContain('Nautilus-Icon--arrow-down');
      expect(container.firstChild.lastChild.firstChild.tagName).toEqual('svg');

      const { container: backwardContainer } = render(
        <Button
          navigation
          navigationDirection="backward"
          leadingIcon="arrow-up"
          __iconId="test-button"
        >
          Up
        </Button>,
      );

      expect(backwardContainer.firstChild.firstChild.tagName).toEqual('SPAN');
      expect(backwardContainer.firstChild.firstChild.classList).toContain(
        'Nautilus-Icon--arrow-up',
      );
      expect(backwardContainer.firstChild.firstChild.firstChild.tagName).toEqual('svg');
    });
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
