import React from 'react';

import { axe, render } from '../../../../utils/testing';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
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

  it('should render non-List components', () => {
    // Previously we filtered out components that were not:
    // * `<Heading>`
    // * `<Paragraph>`
    // * `<List.Item>`
    // but this lead to weird bugs if the child component's type didn't match.
    // See: https://github.com/octopusthink/nautilus/issues/157 for context.
    const { getByTestId } = render(
      <List>
        <div data-testid="child">hello</div>
      </List>,
    );

    expect(getByTestId('child')).toBeDefined();
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

    const originalDescriptionId = getByTestId('firstDescription').getAttribute('id');

    rerender(
      <List>
        <Heading level={2} data-testid="firstDescription">
          Red fruits
        </Heading>
        <List.Item data-testid="one">apple</List.Item>
        <List.Item data-testid="two">raspberry</List.Item>
      </List>,
    );

    expect(originalDescriptionId).toEqual(getByTestId('firstDescription').getAttribute('id'));
  });

  it('should not output styles when unstyled is set', () => {
    const { container } = render(
      <List unstyled>
        <List.Item data-testid="one">apple</List.Item>
        <List.Item data-testid="two">raspberry</List.Item>
      </List>,
    );
    expect(container).toMatchSnapshot();
  });

  it("shouldn't have a margin when `noMargin` is true", () => {
    const { container } = render(
      <List noMargin>
        <List.Item data-testid="one">apple</List.Item>
        <List.Item data-testid="two">raspberry</List.Item>
      </List>,
    );

    expect(container).toMatchSnapshot();
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

    it('should not regenerate the unique ID on subsequent renders', () => {
      const { getByTestId, rerender } = render(
        <List ordered>
          <Paragraph data-testid="description">My list</Paragraph>
          <List.Item>One</List.Item>
          <List.Item>Two</List.Item>
        </List>,
      );

      const originalID = getByTestId('description').getAttribute('id');

      expect(originalID).toBeDefined();

      rerender(
        <List>
          <Paragraph data-testid="description">My lists</Paragraph>
          <List.Item>One</List.Item>
          <List.Item>Two</List.Item>
          <List.Item>Three</List.Item>
        </List>,
      );

      expect(getByTestId('description').getAttribute('id')).toEqual(originalID);
    });
  });

  describe('accessibility', () => {
    it('should pass aXe tests', async () => {
      const { container } = render(
        <List>
          <List.Item>Honda Civic</List.Item>
          <List.Item>Ford Prefect</List.Item>
        </List>,
      );

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });

    it('should pass aXe tests when described by a Heading', async () => {
      const { container } = render(
        <List>
          <Heading level={2}>Here are some cars:</Heading>
          <List.Item>Honda Civic</List.Item>
          <List.Item>Ford Prefect</List.Item>
        </List>,
      );

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });

    it('should pass aXe tests when described by a Paragraph', async () => {
      const { container } = render(
        <List>
          <Paragraph>Here are some cars:</Paragraph>
          <List.Item>Honda Civic</List.Item>
          <List.Item>Ford Prefect</List.Item>
        </List>,
      );

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });
  });
});
