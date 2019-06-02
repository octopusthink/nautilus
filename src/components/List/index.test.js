import React from 'react';

import { render } from 'utils/testing';

import List from '.';

describe('List', () => {
  it('should render a <ul> by default', () => {
    const { container } = render(<List />);

    expect(container.firstChild.tagName).toEqual('UL');
  });

  it('should render an <ol> when the numbered prop is true', () => {
    const { container } = render(<List numbered />);

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
    const { getByTestId } = render(
      <List>
        <li data-testid="child">hello</li>
      </List>,
    );

    expect(() => {
      getByTestId('child');
    }).toThrow('Unable to find an element');
  });

  describe('List.Heading', () => {
    it('should render a heading outside the list if one is provided', () => {
      const { container, getByTestId } = render(
        <List>
          <List.Heading level={3} id="fruits" data-testid="description">
            Tasty fruits
          </List.Heading>
        </List>,
      );

      expect(getByTestId('description').tagName).toEqual('H3');
      expect(container).toMatchSnapshot();
    });

    it('should set a random, short unique ID for the heading if no ID was provided', () => {
      const { getByTestId } = render(
        <List numbered>
          <List.Heading data-testid="description">My list</List.Heading>
          <List.Item>One</List.Item>
          <List.Item>Two</List.Item>
        </List>,
      );

      expect(getByTestId('description').getAttribute('id')).toBeDefined();
    });
  });

  describe('List.Item', () => {
    it('should render a list item inside the list', () => {
      const { getByTestId } = render(
        <List>
          <List.Item data-testid="one">hello</List.Item>
          <List.Item data-testid="two">goodbye</List.Item>
        </List>,
      );

      expect(getByTestId('one').tagName).toEqual('LI');
      expect(getByTestId('two').tagName).toEqual('LI');
    });
  });

  describe('List.Paragraph', () => {
    it('should render a paragraph outside the list if one is provided', () => {
      const { container, getByTestId } = render(
        <List>
          <List.Paragraph id="cars" data-testid="description">
            Here are some cars:
          </List.Paragraph>
          <List.Item>Honda Civic</List.Item>
          <List.Item>Ford Prefect</List.Item>
        </List>,
      );

      expect(getByTestId('description').tagName).toEqual('P');
      expect(container).toMatchSnapshot();
    });

    it('should set a random, short unique ID for the paragraph if no ID was provided', () => {
      const { getByTestId } = render(
        <List numbered>
          <List.Paragraph data-testid="description">My list</List.Paragraph>
          <List.Item>One</List.Item>
          <List.Item>Two</List.Item>
        </List>,
      );

      expect(getByTestId('description').getAttribute('id')).toBeDefined();
    });
  });
});
