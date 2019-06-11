import React from 'react';

import { fireEvent, render } from 'utils/testing';

import TextInput from '.';

describe('TextInput', () => {
  it('should render a <label> and <input> by default', () => {
    const { container } = render(<TextInput />);

    expect(container.children[0].tagName).toEqual('LABEL');
    expect(container.children[1].tagName).toEqual('INPUT');
  });

  it('will render `children` after the <label> and <input> elements', () => {
    const { container } = render(
      <TextInput>
        <span>Why is this even here? I dunno</span>
      </TextInput>,
    );

    expect(container.children[0].tagName).toEqual('LABEL');
    expect(container.children[1].tagName).toEqual('INPUT');
    expect(container.children[2].tagName).toEqual('SPAN');
  });

  it('should render a <label> and <textarea> when `multiline` is `true`', () => {
    const { container } = render(<TextInput multiline />);

    expect(container.children[0].tagName).toEqual('LABEL');
    expect(container.children[1].tagName).toEqual('TEXTAREA');
  });

  it('should not set a `max-width` on the input element without a `size` prop', () => {
    const { container } = render(<TextInput inputId="testInput" />);

    expect(container).toMatchSnapshot();
  });

  it('should set a `max-width` on the input element when `size` is set', () => {
    const { container } = render(<TextInput inputId="testInput" size={10} />);

    expect(container).toMatchSnapshot();
  });

  it('should set a `max-width` on the textarea element when `size` is set', () => {
    const { container } = render(
      <TextInput inputId="testInput" multiline size={10} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should not change a generated ID on subsequent renders', () => {
    const { container, rerender } = render(<TextInput />);

    const inputId = container.querySelector('input').getAttribute('id');
    expect(inputId).toBeDefined();

    rerender(<TextInput size={4} />);
    const reRenderedInputId = container
      .querySelector('input')
      .getAttribute('id');

    expect(reRenderedInputId).toEqual(inputId);
  });

  it('should call `onBlur` function prop', () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <TextInput data-testid="blurInput" onBlur={onBlur} />,
    );

    fireEvent.blur(getByTestId('blurInput'));

    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toMatchSnapshot();
  });

  it('should call `onFocus` function prop', () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(
      <TextInput data-testid="focusInput" onFocus={onFocus} />,
    );

    fireEvent.focus(getByTestId('focusInput'));

    expect(onFocus).toHaveBeenCalled();
    expect(onFocus).toMatchSnapshot();
  });
});
