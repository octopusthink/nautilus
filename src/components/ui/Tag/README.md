A Tag is a keyword used to label, organise, or categorise a piece of data in a visually distinctive and compact way.

```jsx
import { Heading, Paragraph } from '@octopusthink/nautilus';

<React.Fragment>
  <Heading>Wonder Women</Heading>
  <Paragraph>Once upon a time there were a whole group of lady-types who lived in a beautiful paradise-land called ... well, I forget but it was really pretty and just chock full of badass ladies.</Paragraph>
  <Tag color="hotpink">Amazon</Tag><Tag color="hotpink">Superhero</Tag><Tag color="hotpink">Ladies who lunch</Tag>
</React.Fragment>
```

## Usage

Use a Tag to show concise metadata about a given piece of content. Content can have many tags, one tag, or zero tags.

### Use this component for...

- Displaying supplementary data used to categorise a piece of content.
- Categories, tags, dates, statuses, counts, authors, and any other metadata that describes or classifies your content.
- Visually differentiating between multiple categories to which content belongs.
- Filtering, sorting, or organising by categories.

### Don't use this component for...

- Creating a standalone link to a new piece of content. Use a `<Button>` instead.

## Appearance

### Colour

By default, tags appear without any colour.

```jsx
import { Heading } from '@octopusthink/nautilus';

<React.Fragment>
  <Tag>12 September 2019</Tag>
  <Heading>Wonder Women</Heading>
</React.Fragment>
```

Use colour as a cue to differentiate between different types of data. Only pass colour to a tag when it provides additional semantic meaning. Select a colour that helps communicate the content of the label, and ensure it’s used consistently.

```jsx
<React.Fragment>
  <Tag color="hotpink">Hot pink</Tag>
  <Tag color="#cd2f83">Pink</Tag>
  <Tag color="navy">Navy</Tag>
  <Tag color="aqua">Aqua</Tag>
  <Tag color="#053e6c">Blue</Tag>
  <Tag color="#8a0000">Red</Tag>
  <Tag color="#eeb600">Yellow</Tag>
</React.Fragment>
```

Nautilus will automatically calculate colour contrast for you and change the colour of text to ensure it has sufficient contrast against the background.

### Theming

Generally speaking, the styling of Tags should be controlled in your theme. Tags should look the same across your site so that users can immediately recognise their purpose.

Capitalisation, colour placement (background or border), border-radius, and padding are all customisable via your theme.

## Behaviour

### A tag can have an associated action

A Tag can act as a link or a button, depending on context. Clicking on the tag should direct the user to more information about that tag. For instance, clicking the tag may take the user to a page listing only posts with that tag, or it may filter the current list to show/hide content using the tag.

### A tag can be removed

You may want to use tags to allow users to add and remove attributes from an object. You can do this by passing the `dismissable` prop. When a Tag is removable, it will be indicated with a "dismiss" button (stylised as an `X`/"close" icon).


```jsx
const onDismiss = (event) => {
  window.alert('Goodbye Tag! 👋');
};

<React.Fragment>
  <Tag color="hotpink" dismissable onDismiss={onDismiss}>Hot pink</Tag>
  <Tag color="#cd2f83">Pink</Tag>
  <Tag color="navy">Navy</Tag>
  <Tag color="aqua">Aqua</Tag>
  <Tag color="#053e6c">Blue</Tag>
  <Tag color="#8a0000">Red</Tag>
  <Tag color="#eeb600">Yellow</Tag>
</React.Fragment>
```

If a Tag is dismissable, it can be passed an `onDismissed` event that will be called with the tag's "dismiss" button is activated.

### Placement

Tags should be in close proximity to the data that they're labelling so as to clearly identify and reinforce the relationship.

## Voice & tone

- Tag labels should use sentence case.
- Tag labels should be short, succinct, and easily scannable. Avoid tags that are longer than three words.
- If you need more than one word in a tag label, separate the words with a space.

## Accessibility

### Typography and type case

Nautilus defaults to showing tag labels in small-caps to distinguish them from body copy and interactive elements.

Small caps can be difficult for users to parse, so it's important to use them sparingly. Remember that Tags are intended only to present *supplementary* data that isn't critical to understanding the core content. Tags should *never* contain content or data that's essential to understanding the content you're presenting.

Use sentence case when passing text strings to a Tag. Small caps styling will be added by CSS. If you pass a word in all caps, screen readers can behave unpredictably. **Only** pass labels in all caps if they're abbreviations and should be read out loud as such.

### Grouping Tags

When showing a group or list of tags, use a Group or List component to indicate that tags are part of the same grouping.

Keep in mind that tags increase the amount of visual noise, especially when using multiple colours, so use them in moderation. Only use tags that provide helpful additional data to users.

### Titles & Labels

Tags that convey information with icons or color should include fallback text. This ensures that users of assistive technology can understand the context of the Tag and that colour isn't the sole indicator of meaning.

The easiest way to do this is by including a title attribute on the Tag.

    <Tag title="Category: Books">Books</Tag>
    <Tag title="Date: 10 November">10 November</Tag>

Status Tags automatically include this extra text.

The button to remove a Tag is given an `aria-label` so that screen reader users can distinguish which Tag will be removed.
