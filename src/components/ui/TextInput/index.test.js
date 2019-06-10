import React from 'react';

import { render } from 'utils/testing';

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
});
