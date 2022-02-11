import React from 'react';

import { axe, fireEvent, render } from '../../../../utils/testing';
import Checkbox from '.';

describe('Checkbox', () => {
  it('should be wrapped in a <div>', () => {
    const { container } = render(<Checkbox>My checkbox</Checkbox>);

    expect(container.firstChild.tagName).toEqual('DIV');
  });

  it('should render an <input type="checkbox"> by default', () => {
    const { container } = render(<Checkbox>My checkbox</Checkbox>);

    expect(container.firstChild.firstChild.tagName).toEqual('INPUT');
    expect(container.firstChild.firstChild.getAttribute('type')).toEqual('checkbox');
  });

  it('should not be checked by default', () => {
    const { container } = render(<Checkbox>My checkbox</Checkbox>);

    expect(container.firstChild.firstChild.checked).toBe(false);
  });

  it('should respect the "defaultChecked" prop', () => {
    const { container } = render(<Checkbox defaultChecked>My checkbox</Checkbox>);

    expect(container.firstChild.firstChild.checked).toBe(true);

    fireEvent.click(container.firstChild.firstChild);

    expect(container.firstChild.firstChild.checked).toBe(false);
  });

  it('should match styles', () => {
    let { container } = render(<Checkbox id="my-checkbox">My checkbox</Checkbox>);

    expect(container.firstChild).toMatchSnapshot();

    // The label styles are altered when the checkbox is activated.
    container = render(
      <Checkbox id="my-checkbox" defaultChecked>
        My checkbox
      </Checkbox>,
    ).container;

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render a disabled <input type="checkbox"> when `disabled` prop is false', () => {
    const { container } = render(<Checkbox disabled={false}>My checkbox</Checkbox>);

    expect(container.firstChild.firstChild.getAttribute('disabled')).toEqual(null);
  });

  it('should render a disabled <input type="checkbox"> when `disabled` prop is set', () => {
    const { container } = render(<Checkbox disabled>My checkbox</Checkbox>);

    expect(container.firstChild.firstChild.getAttribute('disabled')).toEqual('');
  });

  it('should not output styles when the `unstyled` prop is set', () => {
    const { container } = render(
      <Checkbox id="unstyled-checkbox" unstyled>
        My checkbox
      </Checkbox>,
    );

    expect(container).toMatchSnapshot();
  });

  it("shouldn't have a margin when `noMargin` is true", () => {
    const { container } = render(
      <Checkbox id="no-margin-checkbox" noMargin>
        My checkbox
      </Checkbox>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should accept and pass through other props', () => {
    const { getByTestId } = render(
      <Checkbox className="custom-class" data-testid="myCheckbox">
        My checkbox
      </Checkbox>,
    );

    expect(getByTestId('myCheckbox').classList).toContain('custom-class');
  });

  it('should allow variables to manage the checked state', async () => {
    const { getByTestId } = render(
      <Checkbox data-testid="myCheckbox" checked onChange={() => {}}>
        My checkbox
      </Checkbox>,
    );

    expect(getByTestId('myCheckbox').checked).toBe(true);

    // Clicking this checkbox should not uncheck it, because its state
    // is managed by a variable.
    fireEvent.click(getByTestId('myCheckbox'));

    expect(getByTestId('myCheckbox').checked).toBe(true);
  });

  describe('accessibility', () => {
    it('should pass aXe tests', async () => {
      const { container } = render(<Checkbox>My checkbox</Checkbox>);

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });

    it('should be toggled when clicked', async () => {
      const { container, getByTestId } = render(
        <Checkbox data-testid="myCheckbox">My checkbox</Checkbox>,
      );

      fireEvent.click(getByTestId('myCheckbox'));

      expect(container.firstChild.firstChild.checked).toBe(true);
    });
  });
});
