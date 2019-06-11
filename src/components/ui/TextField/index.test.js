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

  it('should not set a `max-width` on the input element without a `size` prop', () => {
    const { container } = render(<TextField inputId="testInput" />);

    expect(container).toMatchSnapshot();
  });

  it('should set a `max-width` on the input element when `size` is set', () => {
    const { container } = render(<TextField inputId="testInput" size={10} />);

    expect(container).toMatchSnapshot();
  });

  it('should set a `max-width` on the textarea element when `size` is set', () => {
    const { container } = render(
      <TextField inputId="testInput" multiline size={10} />,
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
