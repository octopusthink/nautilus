import { css } from '@emotion/react';
import React from 'react';

import { axe, render } from '../../../../utils/testing';
import Tags from '.';

describe('Tags', () => {
  it('should render a <span> tag if only one tag is created with no title prop', () => {
    const { container } = render(
      <Tags>
        <Tags.Tag>Hello</Tags.Tag>
      </Tags>,
    );

    expect(container.firstChild.firstChild.tagName).toEqual('SPAN');
  });

  it('should be styled by a css prop', () => {
    const { container } = render(
      <Tags
        css={css`
          background: hotpink;
        `}
      >
        <Tags.Tag>Hello</Tags.Tag>
      </Tags>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should output only Tags.Tag children', () => {
    const { getByTestId } = render(
      <Tags>
        <Tags.Tag data-testid="child-one">Hello</Tags.Tag>
        <span data-testid="child-two" />
      </Tags>,
    );

    expect(getByTestId('child-one')).toBeDefined();
    expect(() => {
      getByTestId('child-two');
    }).toThrow('Unable to find an element');
  });

  it('should accept and pass through other props', () => {
    const { getByTestId } = render(
      <Tags.Tag className="custom-class" data-testid="myText">
        hello
      </Tags.Tag>,
    );

    expect(getByTestId('myText').classList).toContain('custom-class');
  });

  it('should match Tags styles', () => {
    const { container } = render(
      <Tags>
        <Tags.Tag data-testid="child-one">Hello</Tags.Tag>
        <Tags.Tag data-testid="child-two">Goodbye</Tags.Tag>
      </Tags>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match styles', () => {
    const { container } = render(<Tags.Tag>hello</Tags.Tag>);

    expect(container).toMatchSnapshot();
  });

  describe('accessibility', () => {
    it('should pass aXe tests', async () => {
      const { container } = render(
        <Tags>
          <Tags.Tag data-testid="child-one">Hello</Tags.Tag>
        </Tags>,
      );

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });

    it('should pass aXe tests with a title prop', async () => {
      const { container } = render(
        <Tags label="My tags">
          <Tags.Tag data-testid="child-one">Hello</Tags.Tag>
          <Tags.Tag data-testid="child-two">Goodbye</Tags.Tag>
        </Tags>,
      );

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });
  });
});
