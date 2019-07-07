Tabs allows users to quickly navigate between related views in the same context and at the same level of hierarchy. Tabs display one section at a time.

Individual tabs (`Tabs.Tab`) are contained within a `Tabs` component:

```jsx
import { Paragraph } from '@octopusthink/nautilus';

<Tabs>
  <Tabs.Tab label="About">
    <Paragraph>Puppies are cute.</Paragraph>
	</Tabs.Tab>

	<Tabs.Tab label="History">
    <Paragraph>Puppies have already been cute.</Paragraph>
	</Tabs.Tab>

	<Tabs.Tab label="Learn more">
    <Paragraph>Have you seen the <a href="https://www.vox.com/culture/2017/2/4/14480722/puppy-bowl-explained">Puppy Bowl</a>?</Paragraph>
	</Tabs.Tab>
</Tabs>
```

## Usage

A tab should be used to represent content that is related and of equal weight or importance, with the caveat that the first section is the most relevant to most users.

### Use this component for...

Tabs can be a helpful way of letting users quickly switch between related information if:

- Your content can be usefully separated into clearly labelled sections.
- Users will not need to view all the sections at once.

### Don't use this component for...

- Primary navigation for your site. Use a Menu instead.
- Representing content that is dissimilar. Separate this into different pages, or use Headings to section off your page.
- Content that should be read in order, or that requires a comparison across different tabs. Anything that requires users to jump back and forth between Tabs will be very frustrating to use.
- A group of more than six items. Use different pages or sections instead.

## Appearance

### Selected tabs

The currently-selected tab inherits some styling to aid users in understanding where they are in the current tab structure.

Only one Tab may be active at a time.

When the page loads, the first Tab in a sequence will always be selected.

### Alignment

A TabGroup can either be aligned to the top, or to the side. Alignment of tabs will follow the logical reading order of text (RTL or LTR, depending on languages.

### Tab width

The width of a Tab will adjust to the length of its label. If the list of Tabs cannot fit in the space available, it will automatically be displayed in a scrollable area with next/previous arrow buttons to navigate.

Test your designs on mobile devices and other small screens to see if this could potentially cause issues.

## Behaviour

### One tab is active at a time

Only one tab should be active at a time.

### Number of tabs

Do not use more than six tabs together. Using more than this can lead to a cluttered UI and needless cognitive overload for users. Instead, break long groups up into more relevant sections.

### Ordering tabs

Order tabs in the most logical progression. The first tab in a group will be visible by default, so the most important content should be here. Arrange the other tabs in the order that makes most sense for your users.

### Don't disable tabs

Disabling elements is normally confusing for users. If there is no content for a tab, either remove the tab or, if that would be confusing for your users, explain why there is no content when the tab is selected. To this point: **Nautilus does not offer an API to disable tabs.**

## Voice & tone

- Use sentence case for tab labels.
- Use clear labels to help differentiate the different sections beneath them. If you struggle to come up with clear labels, it might be because the way you’ve separated the content is not clear.
- Use short, easily-scannable labels. A single word is best. Do not exceed more than three words per tab label.

## Accessibility

- Don't disable tabs or create tabs that don't link to content. This is confusing to users; instead either remove the tab from the UI or offer an alternative explanation inside the tab's content as to why its content isn't available.
- Give tabs clear, distinct labels via the `label` prop. These labels are used by assistive technologies to describe each tab to the user, so they should be text-only.
- Tabs should not be used as navigation. Selecting a tab should change the content displayed within a tab group but should keep the user on the existing page.
- Question whether you actually need to be using a tabbed interface when sections of content, marked by a Heading component, would work.

### Don't hide important content

Because some content will always be hidden in a Tab, do not use Tabs for any information that is critical to the user. Use Tabs to help users find the content they need more easily. Tabs are helpful for users who wish to switch between different sections quickly without having to wade back up the page each time they want to choose a new one.

### Keyboard navigation

Users can switch between Tabs by using the arrow keys. This allows for easier backward- and forward- navigation than using the tab key, which would force users to cycle through all Tabs to go back to the last one. The tab key is used to focus on a Tab and displaying its contents.

Pressing `shift` + `tab` returns the user to the selected tab.

All unselected Tabs are assigned `tabindex="-1"`, which removes the inactive tabs from focus order but allows focus via a script.

### Aria settings

- The `Tabs` component has a role of `tablist`. The `Tabs.Tab` label has a role of `tab`. The `Tabs.Tab` content has a role of `tabpanel`.
- The currently selected tab has `aria-selected` set to `true`. All other tabs set this value to `false`.
- Tabs has `aria-orientation` set to `vertical` or `horizontal` based on the value of the `orientation` option.
- Each tab has `aria-controls` referring to its associated tab content.

### Labels label the Tab content

The Tab content uses `aria-labelledby` to tie it to its associated `Tab`.

Since tab panels are labeled by their tabs in this way, when the down arrow is pressed and the relevant tab panel focused, a screen reader will announce: `"[tab label], tab panel"`, thereby assuring the user of their new location within the interface.
