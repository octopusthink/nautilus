import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

import { Button, ButtonModes, ButtonSizes } from './Button';
import { buttonColors } from '../../../base/color/colorVariables';

describe('Button Component', () => {
  context('when nothing specified', () => {
    it('should render without issue', () => {
      const subject = renderer.create(<Button>Hello</Button>).toJSON();
      expect(subject).toMatchSnapshot();
      expect(subject).toHaveStyleRule('background-color', buttonColors.buttonPrimaryBackground);
    });
  });

  ButtonModes.forEach((mode) => {
    context(`when @mode specified as ${mode}`, () => {
      it('renders with correct @mode value', () => {
        const subject = mount(<Button mode={mode}>Hello</Button>);
        expect(subject.prop('mode')).toBe(mode);
      });

      // Simple background color value and variable name test
      it(`renders with correct colors for ${mode}`, () => {
        const subject = renderer.create(<Button mode={mode}>Hello</Button>).toJSON();
        const capitalMode = `${mode.charAt(0).toUpperCase()}${mode.substr(1)}`;
        const buttonBackground = buttonColors[`button${capitalMode}Background`];
        const buttonBackgroundHover = buttonColors[`button${capitalMode}BackgroundHover`];

        expect(subject).toHaveStyleRule('background-color', buttonBackground);

        expect(subject).toHaveStyleRule('background-color', buttonBackgroundHover, {
          modifier: ':hover',
        });
      });
    });
  });

  ButtonSizes.forEach((size) => {
    context(`when @size specified as ${size}`, () => {
      it('renders with correct @size value', () => {
        const subject = mount(<Button size={size}>Hello</Button>);
        expect(subject.prop('size')).toBe(size);
      });
    });
  });
});
