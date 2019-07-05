import React from 'react';

import { muteConsole, render } from 'utils/testing';

import { Heading, Paragraph } from 'components';
import Tabs from '.';

describe('Tabs', () => {
  it('should render a <ul> and a <section>', () => {
    const { container } = render(<Tabs />);

    expect(container.firstChild.tagName).toEqual('UL');
  });
});
