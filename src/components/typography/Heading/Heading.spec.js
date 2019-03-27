import React from 'react';

import { Heading, HeadingSizes, HeadingColors, HeadingLevels } from './Heading';

describe('Heading Component', () => {
  context('when nothing specified', () => {
    it('should render correctly', () => {
      const subject = shallow(<Heading>Hello</Heading>);
      expect(subject).toMatchSnapshot();
    });
  });

  HeadingSizes.forEach((size) => {
    context(`when @size specified as ${size}`, () => {
      it(`renders a Heading size of ${size}`, () => {
        const subject = mount(<Heading size={size}>Hello</Heading>);
        expect(subject.prop('size')).toBe(size);
      });
    });
  });

  HeadingLevels.forEach((level) => {
    context(`when @level specified as ${level}`, () => {
      it(`renders a Heading level of ${level}`, () => {
        const subject = mount(<Heading level={level}>Hello</Heading>);
        expect(subject.prop('level')).toBe(level);
      });
    });
  });

  HeadingColors.forEach((color) => {
    context(`when @color specified as ${color}`, () => {
      it(`renders a Heading color of ${color}`, () => {
        const subject = mount(<Heading color={color}>Hello</Heading>);
        expect(subject.prop('color')).toBe(color);
      });
    });
  });
});
