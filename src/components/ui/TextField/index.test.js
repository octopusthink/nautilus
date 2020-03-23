import React, { createRef } from 'react';

import { axe, fireEvent, muteConsole, render } from 'utils/testing';

import TextField from '.';

describe('TextField', () => {
  it('should render a <label> and <div><input></div> by default', () => {
    const { container } = render(<TextField label="Hello" />);

    expect(container.children[0].tagName).toEqual('LABEL');
    expect(container.children[1].tagName).toEqual('DIV');
    expect(container.children[1].children[0].tagName).toEqual('INPUT');
  });

  it('should not output an empty <label> if one is not supplied', () => {
    muteConsole({ times: 1, type: 'error' });
    const { container } = render(<TextField />);

    expect(container.children[0].tagName).toEqual('DIV');
    expect(container.children[0].children[0].tagName).toEqual('INPUT');
  });

  it('will render `children` after the <label> and <div><input></div> elements', () => {
    const { container } = render(
      <TextField label="Hello">
        <span>Why is this even here? I dunno</span>
      </TextField>,
    );

    expect(container.children[0].tagName).toEqual('LABEL');
    expect(container.children[1].tagName).toEqual('DIV');
    expect(container.children[1].children[0].tagName).toEqual('INPUT');
    expect(container.children[2].tagName).toEqual('SPAN');
  });

  it('should render a <label> and <div><textarea></div> when `multiline` is `true`', () => {
    const { container } = render(<TextField label="Hello" multiline />);

    expect(container.children[0].tagName).toEqual('LABEL');
    expect(container.children[1].tagName).toEqual('DIV');
    expect(container.children[1].children[0].tagName).toEqual('TEXTAREA');
  });

  it('should set rows to 4 by default', () => {
    const { getByTestId } = render(<TextField data-testid="input" label="Hello" multiline />);

    expect(getByTestId('input').getAttribute('rows')).toEqual('4');
  });

  it('should not set a `max-width` on the input element without a `size` prop', () => {
    const { container } = render(<TextField id="testInput" label="Hello" />);

    expect(container).toMatchSnapshot();
  });

  it('should set a `max-width` on the input element when `size` is set', () => {
    const { container } = render(<TextField id="testInput" label="Hello" size={10} />);

    expect(container).toMatchSnapshot();
  });

  it('should set a `max-width` on the textarea element when `size` is set', () => {
    const { container } = render(<TextField id="testInput" label="Hello" multiline size={10} />);

    expect(container).toMatchSnapshot();
  });

  it('should not change a generated ID on subsequent renders', () => {
    const { container, rerender } = render(<TextField label="Hello" />);

    const inputId = container.querySelector('input').getAttribute('id');
    expect(inputId).toBeDefined();

    rerender(<TextField size={4} />);
    const reRenderedInputId = container.querySelector('input').getAttribute('id');

    expect(reRenderedInputId).toEqual(inputId);
  });

  it('should not change a generated error message ID on subsequent renders', () => {
    const error = <div data-testid="errorMessage">Something went wrong!</div>;
    const { getByTestId, rerender } = render(<TextField error={error} label="Hello" />);

    const errorId = getByTestId('errorMessage').getAttribute('id');

    rerender(<TextField error={error} size={7} />);
    const reRenderedErrorId = getByTestId('errorMessage').getAttribute('id');

    expect(reRenderedErrorId).toEqual(errorId);
  });

  it('should use the existing `id` prop on an error component', () => {
    const error = (
      <div data-testid="errorMessage" id="cool-error-one" label="Hello">
        Something went wrong!
      </div>
    );
    const { getByTestId } = render(<TextField data-testid="input" error={error} label="Hello" />);

    const ariaLabel = getByTestId('input').getAttribute('aria-errormessage');
    const errorId = getByTestId('errorMessage').getAttribute('id');
    expect(ariaLabel).toEqual('cool-error-one');
    expect(errorId).toEqual('cool-error-one');
  });

  it('should call `onBlur` function prop', () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <TextField data-testid="blurInput" label="Hello" onBlur={onBlur} />,
    );

    fireEvent.blur(getByTestId('blurInput'));

    expect(onBlur).toHaveBeenCalled();
  });

  it('should call `onFocus` function prop', () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(
      <TextField data-testid="focusInput" label="Hello" onFocus={onFocus} />,
    );

    fireEvent.focus(getByTestId('focusInput'));

    expect(onFocus).toHaveBeenCalled();
  });

  it('should match styles', () => {
    const { container } = render(<TextField label="Hello" id="myTextField" />);

    expect(container).toMatchSnapshot();
  });

  it('should hide styles when unstyled prop is set', () => {
    const { container } = render(<TextField label="Hello" id="myTextField" unstyled />);

    expect(container).toMatchSnapshot();
  });

  it("shouldn't have a margin when `noMargin` is true", () => {
    const { container } = render(<TextField label="Hello" noMargin id="myTextField" />);

    expect(container).toMatchSnapshot();
  });

  it("shouldn't have a margin when `noMargin` is true and error exists", () => {
    const error = <div id="errorMessage">Something went wrong!</div>;
    const { container } = render(
      <TextField label="Hello" error={error} noMargin id="myTextField" />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should output an <Icon> when the signifierIcon prop is used', () => {
    const { container, getByTestId } = render(
      <TextField
        __signifierIconId="signifierIcon"
        signifierIcon="phone"
        data-testid="focusInput"
        label="Hello"
        id="myTestId"
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(getByTestId('signifierIcon').tagName).toEqual('SPAN');
    expect(getByTestId('signifierIcon').firstChild.tagName).toEqual('svg');
  });

  it('should focus the text field when the signifier icon is clicked', () => {
    const ref = createRef();

    const { getByTestId } = render(
      <TextField
        __signifierIconId="signifierIcon"
        signifierIcon="phone"
        data-testid="focusInput"
        label="Hello"
        id="myTestId"
        ref={ref}
      />,
    );

    const focusSpy = jest.spyOn(ref.current, 'focus');

    // The onClick event gets attached to the SVG child element, so make sure
    // that's what we click on.
    fireEvent.click(getByTestId('signifierIcon').firstChild);

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should output an <Icon> when the actionIcon prop is used', () => {
    const { container, getByTestId } = render(
      <TextField
        __actionIconId="arnoldIcon"
        actionIcon="phone"
        data-testid="focusInput"
        label="Hello"
        id="myTestId"
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(getByTestId('arnoldIcon').tagName).toEqual('SPAN');
    expect(getByTestId('arnoldIcon').firstChild.tagName).toEqual('svg');
  });

  it('should allow the user to click on the actionIcon', () => {
    const onClick = jest.fn();

    const { getByTestId } = render(
      <TextField
        __actionIconId="arnoldIcon"
        actionIcon="phone"
        actionIconOnClick={onClick}
        data-testid="focusInput"
        label="Hello"
        id="myTestId"
      />,
    );

    // The onClick event gets attached to the SVG child element, so make sure
    // that's what we click on.
    fireEvent.click(getByTestId('arnoldIcon').firstChild);

    expect(onClick).toHaveBeenCalled();
  });

  it('should forward refs', () => {
    const ref = createRef();

    render(<TextField label="Hello" ref={ref} />);

    expect(ref.current).not.toBeNull();
    expect(ref.current.tagName).toEqual('INPUT');
  });

  describe('accessibility', () => {
    it('should set `aria-errormessage` prop on input component when `error` prop is set', () => {
      const { getByTestId } = render(
        <TextField data-testid="input" error="Bad input!" label="Hello" />,
      );

      const ariaLabel = getByTestId('input').getAttribute('aria-errormessage');
      expect(ariaLabel).toBeDefined();
    });

    it("should use the error message's ID for `aria-errormessage`", () => {
      const error = <div data-testid="errorMessage">Something went wrong!</div>;
      const { getByTestId } = render(<TextField data-testid="input" error={error} label="Hello" />);

      const ariaLabel = getByTestId('input').getAttribute('aria-errormessage');
      const errorId = getByTestId('errorMessage').getAttribute('id');
      expect(ariaLabel).toEqual(errorId);
    });

    it('should require a label prop', () => {
      muteConsole({ times: 1, type: 'error' });
      render(<TextField label={null} />);

      expect(global.console.error.mock.calls[0][0]).toMatch(
        'Warning: Failed prop type: The prop `label` is marked as required in `TextField`, but its value is `null`.',
      );
    });

    it('should pass aXe tests', async () => {
      const { container } = render(<TextField label="Hello" />);

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });
  });
});
