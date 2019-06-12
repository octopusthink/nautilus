import React from 'react';

import { muteConsole, render } from 'utils/testing';

import { Heading, Paragraph } from 'components';
import List from '.';

describe('List', () => {
  it('should render a <ul> by default', () => {
    const { container } = render(<List />);

    expect(container.firstChild.tagName).toEqual('UL');
  });

  it('should render an <ol> when the ordered prop is true', () => {
    const { container } = render(<List ordered />);

    expect(container.firstChild.tagName).toEqual('OL');
  });

  it('should output its children', () => {
    const { getByTestId } = render(
      <List>
        <List.Item data-testid="child">hello</List.Item>
      </List>,
    );

    expect(getByTestId('child')).toBeDefined();
  });

  it('should not render non-List components as direct children', () => {
    muteConsole({ times: 1, type: 'error' });
    const { getByTestId } = render(
      <List>
        <div data-testid="child">hello</div>
      </List>,
    );

    expect(() => {
      getByTestId('child');
    }).toThrow('Unable to find an element');
  });

  it('should not render regular <li> tags as direct children', () => {
    muteConsole({ times: 1, type: 'error' });
    const { getByTestId } = render(
      <List>
        <li data-testid="child">hello</li>
      </List>,
    );

    expect(() => {
      getByTestId('child');
    }).toThrow('Unable to find an element');
  });

  it('should render several list items inside the list', () => {
    const { getByTestId } = render(
      <List>
        <List.Item data-testid="one">hello</List.Item>
        <List.Item data-testid="two">goodbye</List.Item>
      </List>,
    );

    expect(getByTestId('one').tagName).toEqual('LI');
    expect(getByTestId('two').tagName).toEqual('LI');
  });

  it('should ignore extra description components after the first ones', () => {
    const { getByTestId } = render(
      <List>
        <Heading level={3} data-testid="firstDescription">
          Tasty fruits
        </Heading>
        <Heading level={3} data-testid="secondDescription">
          Tasty fruits
        </Heading>
        <List.Item data-testid="one">apple</List.Item>
        <List.Item data-testid="two">banana</List.Item>
      </List>,
    );

    expect(getByTestId('firstDescription')).toBeDefined();
    expect(() => {
      getByTestId('secondDescription');
    }).toThrow('Unable to find an element');
  });

  it('should update the description component when it changes', () => {
    const { getByTestId, rerender } = render(
      <List>
        <Heading level={3} data-testid="firstDescription">
          Tasty fruits
        </Heading>
        <List.Item data-testid="one">apple</List.Item>
        <List.Item data-testid="two">raspberry</List.Item>
      </List>,
    );

    expect(getByTestId('firstDescription').tagName).toEqual('H3');

    rerender(
      <List>
        <Heading level={2} data-testid="firstDescription">
          Red fruits
        </Heading>
        <List.Item data-testid="one">apple</List.Item>
        <List.Item data-testid="two">raspberry</List.Item>
      </List>,
    );

    expect(getByTestId('firstDescription').tagName).toEqual('H2');
  });

  it('should not change the generated ID between renders', () => {
    const { getByTestId, rerender } = render(
      <List>
        <Heading level={3} data-testid="firstDescription">
          Tasty fruits
        </Heading>
        <List.Item data-testid="one">apple</List.Item>
        <List.Item data-testid="two">raspberry</List.Item>
      </List>,
    );

    const originalDescriptionId = getByTestId('firstDescription').getAttribute(
      'id',
    );

    rerender(
      <List>
        <Heading level={2} data-testid="firstDescription">
          Red fruits
        </Heading>
        <List.Item data-testid="one">apple</List.Item>
        <List.Item data-testid="two">raspberry</List.Item>
      </List>,
    );

    expect(originalDescriptionId).toEqual(
      getByTestId('firstDescription').getAttribute('id'),
    );
  });

  describe('described by Heading component', () => {
    it('should render a heading outside the list if one is provided', () => {
      const { container, getByTestId } = render(
        <List>
          <Heading level={3} id="fruits" data-testid="description">
            Tasty fruits
          </Heading>
        </List>,
      );

      expect(getByTestId('description').tagName).toEqual('H3');
      expect(container).toMatchSnapshot();
    });

    it('should set a random, short unique ID for the heading if no ID was provided', () => {
      const { getByTestId } = render(
        <List ordered>
          <Heading data-testid="description">My list</Heading>
          <List.Item>One</List.Item>
          <List.Item>Two</List.Item>
        </List>,
      );

      expect(getByTestId('description').getAttribute('id')).toBeDefined();
    });
  });

  describe('described by Paragraph component', () => {
    it('should render a paragraph outside the list if one is provided', () => {
      const { container, getByTestId } = render(
        <List>
          <Paragraph id="cars" data-testid="description">
            Here are some cars:
          </Paragraph>
          <List.Item>Honda Civic</List.Item>
          <List.Item>Ford Prefect</List.Item>
        </List>,
      );

      expect(getByTestId('description').tagName).toEqual('P');
      expect(container).toMatchSnapshot();
    });

    it('should set a random, short unique ID for the paragraph if no ID was provided', () => {
      const { getByTestId } = render(
        <List ordered>
          <Paragraph data-testid="description">My list</Paragraph>
          <List.Item>One</List.Item>
          <List.Item>Two</List.Item>
        </List>,
      );

      expect(getByTestId('description').getAttribute('id')).toBeDefined();
    });
  });
});
