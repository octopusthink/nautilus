import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

import { Spacer } from './Spacer';
import spacerSizes from '../../../base/spacing';
import { sizes } from '../../../base/breakpoints';

describe('Spacer Component', () => {
  it('should match the snapshot', () => {
    const subject = shallow(<Spacer />);
    expect(subject).toMatchSnapshot();
  });

  it('should render inline-block if set to horizontal', () => {
    const subject = renderer.create(<Spacer horizontal />).toJSON();
    expect(subject).toMatchSnapshot();
    expect(subject).toHaveStyleRule('display', 'inline-block');
  });

  it('should receive correct padding based on size selection', () => {
    const subject = renderer.create(<Spacer size="large" />).toJSON();
    const mediumSpacerSize = spacerSizes.large;
    expect(subject).toMatchSnapshot();
    expect(subject).toHaveStyleRule('padding-bottom', mediumSpacerSize);
  });

  context('when provided a responsiveSizes object', () => {
    it('contains the correct media queries', () => {
      const responsiveSizes = {
        xs: '2xsmall',
        lg: '2xlarge',
      };

      const subject = renderer.create(<Spacer responsiveSizes={responsiveSizes} />).toJSON();
      expect(subject).toMatchSnapshot();
      expect(subject).toHaveStyleRule('padding-bottom', spacerSizes['2xsmall'], {
        media: `(min-width: ${sizes.xs})`,
      });

      expect(subject).toHaveStyleRule('padding-bottom', spacerSizes['2xlarge'], {
        media: `(min-width: ${sizes.lg})`,
      });
    });
  });
});
