import React from 'react';
import { axe, fireEvent, render, waitFor } from '../../../../utils/testing';
import Paragraph from '../Paragraph';
import Tabs from '.';

const tabSet = ({ activeTab } = {}) => {
  return (
    <Tabs activeTab={activeTab} id="myTabSet">
      <Tabs.Tab data-testid="firstTabSection" label="About" labelTestId="firstTab">
        <Paragraph>Puppies are cute.</Paragraph>
      </Tabs.Tab>
      <Tabs.Tab data-testid="secondTabSection" label="History" labelTestId="secondTab">
        <Paragraph>Puppies have already been cute.</Paragraph>
      </Tabs.Tab>
      <Tabs.Tab data-testid="thirdTabSection" label="Other" labelTestId="thirdTab">
        <Paragraph>I have run out of things to say in this test.</Paragraph>
      </Tabs.Tab>
    </Tabs>
  );
};

describe('Tabs', () => {
  it('should render nothing when no children are provided', () => {
    const { container } = render(<Tabs />);

    expect(container.firstChild).toBeNull();
  });

  it('should render a <ul> with an <li> for each tab', () => {
    const { container } = render(tabSet());

    expect(container.firstChild.tagName).toEqual('UL');
    expect(container.firstChild.children[0].tagName).toEqual('LI');
    expect(container.firstChild.children[1].tagName).toEqual('LI');
    expect(container.firstChild.children[2].tagName).toEqual('LI');
  });

  it('should render a <section> for each tab', () => {
    const { container } = render(tabSet());

    expect(container.children[1].tagName).toEqual('SECTION');
    expect(container.children[2].tagName).toEqual('SECTION');
  });

  it('should set the first tab to active by default', () => {
    const { getByTestId } = render(tabSet());

    expect(getByTestId('firstTab').getAttribute('aria-selected')).toEqual('true');
    expect(getByTestId('secondTab').getAttribute('aria-selected')).toEqual('false');
    expect(getByTestId('thirdTab').getAttribute('aria-selected')).toEqual('false');
  });

  it('should allow the active tab to be set by a prop', () => {
    // Tabs are zero-indexed; this will make the second tab active.
    const { getByTestId } = render(tabSet({ activeTab: 1 }));

    expect(getByTestId('firstTab').getAttribute('aria-selected')).toEqual('false');
    expect(getByTestId('secondTab').getAttribute('aria-selected')).toEqual('true');
    expect(getByTestId('thirdTab').getAttribute('aria-selected')).toEqual('false');
  });

  it('should not set the active tab when the activeTab prop is undefined', () => {
    // Tabs are zero-indexed; this will make the second tab active.
    const { getByTestId } = render(tabSet({ activeTab: undefined }));

    expect(getByTestId('firstTab').getAttribute('aria-selected')).toEqual('true');
    expect(getByTestId('secondTab').getAttribute('aria-selected')).toEqual('false');
    expect(getByTestId('thirdTab').getAttribute('aria-selected')).toEqual('false');
  });

  it('should change the active tab when that tab is clicked', async () => {
    const { getByTestId } = render(tabSet());

    fireEvent.click(getByTestId('thirdTab'));

    await waitFor(() =>
      expect(getByTestId('firstTab').getAttribute('aria-selected')).toEqual('false'),
    );

    expect(getByTestId('firstTab').getAttribute('aria-selected')).toEqual('false');
    expect(getByTestId('secondTab').getAttribute('aria-selected')).toEqual('false');
    expect(getByTestId('thirdTab').getAttribute('aria-selected')).toEqual('true');
  });

  it('should render styles for Tabs', () => {
    const { container } = render(tabSet());

    expect(container).toMatchSnapshot();
  });

  it("shouldn't have a margin when `noMargin` is true", () => {
    const { container } = render(
      <Tabs id="myTabSet" noMargin>
        <Tabs.Tab data-testid="firstTabSection" label="About" labelTestId="firstTab">
          <Paragraph>Puppies are cute.</Paragraph>
        </Tabs.Tab>
      </Tabs>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should not render styles when unstyled prop is set', () => {
    const { container } = render(
      <Tabs id="myTabSet" unstyled>
        <Tabs.Tab data-testid="firstTabSection" label="About" labelTestId="firstTab">
          <Paragraph>Puppies are cute.</Paragraph>
        </Tabs.Tab>
      </Tabs>,
    );

    expect(container).toMatchSnapshot();
  });

  describe('accessibility', () => {
    describe('keyboard navigation', () => {
      it('should change the active tab to the next tab when the right arrow key is pressed', async () => {
        const { getByTestId } = render(tabSet());

        fireEvent.focus(getByTestId('firstTab'));
        // A keyCode of 39 is a right arrow; eg. moving the active tab "over" by
        // one.
        fireEvent.keyDown(getByTestId('firstTab'), { keyCode: 39 });

        await waitFor(() => {});

        expect(getByTestId('firstTab').getAttribute('aria-selected')).toEqual('false');
        expect(getByTestId('secondTab').getAttribute('aria-selected')).toEqual('true');
        expect(getByTestId('secondTab')).toHaveFocus();
        expect(getByTestId('thirdTab').getAttribute('aria-selected')).toEqual('false');
      });

      it('should do nothing when the left arrow key is pressed but there are no previous tabs', async () => {
        const { getByTestId } = render(tabSet());

        fireEvent.focus(getByTestId('firstTab'));
        // A keyCode of 37 is a left arrow, but because we're already at the first
        // tab: nothing should happen.
        fireEvent.keyDown(getByTestId('firstTab'), { keyCode: 37 });

        await waitFor(() => {});

        expect(getByTestId('firstTab').getAttribute('aria-selected')).toEqual('true');
        expect(getByTestId('firstTab')).toHaveFocus();
        expect(getByTestId('secondTab').getAttribute('aria-selected')).toEqual('false');
        expect(getByTestId('thirdTab').getAttribute('aria-selected')).toEqual('false');
      });

      it('should do nothing when the right arrow key is pressed but there are no more tabs', async () => {
        const { getByTestId } = render(tabSet());

        fireEvent.click(getByTestId('thirdTab'));
        fireEvent.focus(getByTestId('thirdTab'));
        // A keyCode of 39 is a right arrow; this would normally move to the next
        // tab, but because no more tabs exists nothing happens.
        fireEvent.keyDown(getByTestId('thirdTab'), { keyCode: 39 });

        await waitFor(() => {});

        expect(getByTestId('firstTab').getAttribute('aria-selected')).toEqual('false');
        expect(getByTestId('secondTab').getAttribute('aria-selected')).toEqual('false');
        expect(getByTestId('thirdTab').getAttribute('aria-selected')).toEqual('true');
        expect(getByTestId('thirdTab')).toHaveFocus();
      });

      it('should change the active tab to the previous tab when left arrow key is pressed', async () => {
        const { getByTestId } = render(tabSet());

        fireEvent.click(getByTestId('thirdTab'));
        fireEvent.focus(getByTestId('thirdTab'));
        // A keyCode of 37 is a right arrow; this would normally move to the next
        // tab, but because no more tabs exists nothing happens.
        fireEvent.keyDown(getByTestId('thirdTab'), { keyCode: 37 });

        await waitFor(() => getByTestId('secondTab'));

        expect(getByTestId('firstTab').getAttribute('aria-selected')).toEqual('false');
        expect(getByTestId('secondTab').getAttribute('aria-selected')).toEqual('true');
        expect(getByTestId('secondTab')).toHaveFocus();
        expect(getByTestId('thirdTab').getAttribute('aria-selected')).toEqual('false');
      });

      it("should focus the active tab's content when the down arrow key is pressed", async () => {
        const { getByTestId } = render(tabSet());

        fireEvent.focus(getByTestId('firstTab'));
        // A keyCode of 40 is a down arrow.
        fireEvent.keyDown(getByTestId('firstTab'), { keyCode: 40 });

        await waitFor(() => getByTestId('firstTabSection'));

        expect(getByTestId('firstTabSection')).toHaveFocus();
        expect(getByTestId('secondTabSection')).not.toHaveFocus();
        expect(getByTestId('thirdTabSection')).not.toHaveFocus();
      });
    });

    it('should pass aXe tests', async () => {
      const { container } = render(tabSet());

      expect(await axe(container.innerHTML)).toHaveNoViolations();
    });
  });
});
