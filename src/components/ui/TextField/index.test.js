import React from 'react';

import { fireEvent, render } from 'utils/testing';

import TextField from '.';

describe('TextField', () => {
  it('should render a <label> and <input> by default', () => {
    const { container } = render(<TextField />);

    expect(container.children[0].tagName).toEqual('LABEL');
    expect(container.children[1].tagName).toEqual('INPUT');
  });

  it('will render `children` after the <label> and <input> elements', () => {
    const { container } = render(
      <TextField>
        <span>Why is this even here? I dunno</span>
      </TextField>,
    );

    expect(container.children[0].tagName).toEqual('LABEL');
    expect(container.children[1].tagName).toEqual('INPUT');
    expect(container.children[2].tagName).toEqual('SPAN');
  });

  it('should render a <label> and <textarea> when `multiline` is `true`', () => {
    const { container } = render(<TextField multiline />);

    expect(container.children[0].tagName).toEqual('LABEL');
    expect(container.children[1].tagName).toEqual('TEXTAREA');
  });

  it('should set rows to 4 by default', () => {
    const { getByTestId } = render(<TextField data-testid="input" multiline />);

    expect(getByTestId('input').getAttribute('rows')).toEqual('4');
  });

  it('should not set a `max-width` on the input element without a `size` prop', () => {
    const { container } = render(<TextField id="testInput" />);

    expect(container).toMatchSnapshot();
  });

  it('should set a `max-width` on the input element when `size` is set', () => {
    const { container } = render(<TextField id="testInput" size={10} />);

    expect(container).toMatchSnapshot();
  });

  it('should set a `max-width` on the textarea element when `size` is set', () => {
    const { container } = render(
      <TextField id="testInput" multiline size={10} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should not change a generated ID on subsequent renders', () => {
    const { container, rerender } = render(<TextField />);

    const inputId = container.querySelector('input').getAttribute('id');
    expect(inputId).toBeDefined();

    rerender(<TextField size={4} />);
    const reRenderedInputId = container
      .querySelector('input')
      .getAttribute('id');

    expect(reRenderedInputId).toEqual(inputId);
  });

  it('should set `aria-errormessage` prop on input component when `error` prop is set', () => {
    const { getByTestId } = render(
      <TextField data-testid="input" error="Bad input!" />,
    );

    const ariaLabel = getByTestId('input').getAttribute('aria-errormessage');
    expect(ariaLabel).toBeDefined();
  });

  it("should use the error message's ID for `aria-errormessage`", () => {
    const error = <div data-testid="errorMessage">Something went wrong!</div>;
    const { getByTestId } = render(
      <TextField data-testid="input" error={error} />,
    );

    const ariaLabel = getByTestId('input').getAttribute('aria-errormessage');
    const errorId = getByTestId('errorMessage').getAttribute('id');
    expect(ariaLabel).toEqual(errorId);
  });

  it('should not change a generated error message ID on subsequent renders', () => {
    const error = <div data-testid="errorMessage">Something went wrong!</div>;
    const { getByTestId, rerender } = render(<TextField error={error} />);

    const errorId = getByTestId('errorMessage').getAttribute('id');

    rerender(<TextField error={error} size={7} />);
    const reRenderedErrorId = getByTestId('errorMessage').getAttribute('id');

    expect(reRenderedErrorId).toEqual(errorId);
  });

  it('should use the existing `id` prop on an error component', () => {
    const error = (
      <div id="cool-error-one" data-testid="errorMessage">
        Something went wrong!
      </div>
    );
    const { getByTestId } = render(
      <TextField data-testid="input" error={error} />,
    );

    const ariaLabel = getByTestId('input').getAttribute('aria-errormessage');
    const errorId = getByTestId('errorMessage').getAttribute('id');
    expect(ariaLabel).toEqual('cool-error-one');
    expect(errorId).toEqual('cool-error-one');
  });

  it('should call `onBlur` function prop', () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <TextField data-testid="blurInput" onBlur={onBlur} />,
    );

    fireEvent.blur(getByTestId('blurInput'));

    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toMatchSnapshot();
  });

  it('should call `onFocus` function prop', () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(
      <TextField data-testid="focusInput" onFocus={onFocus} />,
    );

    fireEvent.focus(getByTestId('focusInput'));

    expect(onFocus).toHaveBeenCalled();
    expect(onFocus).toMatchSnapshot();
  });
});
