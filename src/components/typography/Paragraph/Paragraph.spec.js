import React from 'react';

import { Paragraph, ParagraphSizes, ParagraphColors } from './Paragraph';

describe('Paragraph Component', () => {
  context('when nothing specified', () => {
    it('should render correctly', () => {
      const subject = shallow(<Paragraph>Hello</Paragraph>);
      expect(subject).toMatchSnapshot();
    });
  });

  ParagraphSizes.forEach((size) => {
    context(`when @size specified as ${size}`, () => {
      it(`renders a Paragraph size of ${size}`, () => {
        const subject = mount(<Paragraph size={size}>Hello</Paragraph>);
        expect(subject.prop('size')).toBe(size);
      });
    });
  });

  ParagraphColors.forEach((color) => {
    context(`when @color specified as ${color}`, () => {
      it(`renders a Paragraph color of ${color}`, () => {
        const subject = mount(<Paragraph color={color}>Hello</Paragraph>);
        expect(subject.prop('color')).toBe(color);
      });
    });
  });
});
