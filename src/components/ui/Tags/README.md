A Tag is a keyword used to label, organise, or categorise a piece of data in a visually distinctive and compact way.

```jsx
import { Heading, Paragraph } from '@octopusthink/nautilus';

<React.Fragment>
  <Heading>Wonder Women</Heading>
  <Paragraph>Once upon a time there were a whole group of lady-types who lived in a beautiful paradise-land called ... well, I forget but it was really pretty and just chock full of badass ladies.</Paragraph>
  <Tags>
    <Tags.Tag color="hotpink">Amazon</Tags.Tag>
    <Tags.Tag color="hotpink">Superhero</Tags.Tag>
    <Tags.Tag color="hotpink">Ladies who lunch</Tags.Tag>
  </Tags>
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
  <Tags><Tags.Tag>12 September 2019</Tags.Tag></Tags>
  <Heading>Breaking news: kittens are fluffy</Heading>
</React.Fragment>
```

Use colour as a cue to differentiate between different types of data. Only pass colour to a tag when it provides additional semantic meaning. Select a colour that helps communicate the content of the label, and ensure it’s used consistently.

```jsx
<Tags>
  <Tags.Tag color="hotpink">Hot pink</Tags.Tag>
  <Tags.Tag color="#cd2f83">Pink</Tags.Tag>
  <Tags.Tag color="navy">Navy</Tags.Tag>
  <Tags.Tag color="aqua">Aqua</Tags.Tag>
  <Tags.Tag color="#053e6c">Blue</Tags.Tag>
  <Tags.Tag color="#8a0000">Red</Tags.Tag>
  <Tags.Tag color="#eeb600">Yellow</Tags.Tag>
</Tags>
```

Nautilus will automatically calculate colour contrast for you and change the colour of text to ensure it has sufficient contrast against the background.

### Numbers

If you're showing a count, tally, or other number in a tag, you might want to use slightly different styling by using the `badge` prop. This styling is best used with numbers of three or fewer digits.

```jsx
<Tags>
  <Tags.Tag color="#3b3f45" badge>42</Tags.Tag>
  <Tags.Tag color="#053e6c" badge>1.3</Tags.Tag>
  <Tags.Tag color="#8a0000" badge>£9</Tags.Tag>
  <Tags.Tag color="#eeb600" badge>130</Tags.Tag>
  <Tags.Tag color="#eeb600" badge>1.30%</Tags.Tag>
</Tags>
```

### Semantic status indicators

Tags are often used as a way of indicating the state or status of a process. To facilitate this usage, Nautilus provides a set of semantic, colour-coded status indicators.

```jsx
<Tags>
  <Tags.Tag status="neutral">To-do</Tags.Tag>
  <Tags.Tag status="new">Beta</Tags.Tag>
</Tags>

<Tags>
  <Tags.Tag status="inProgress">In Progress</Tags.Tag>
  <Tags.Tag status="success">Done</Tags.Tag>
</Tags>

<Tags>
  <Tags.Tag status="warning">Warning</Tags.Tag>
  <Tags.Tag status="danger">Failed</Tags.Tag>
</Tags>
```

| Status       | Description               | Usage                                    |
|--------------|---------------------------|------------------------------------------|
| `neutral`    | Unspecified or unstarted. | To-do, unavailable, minor, not started.
| `new`        | New, updated, or beta.    | New, trial, information, help, alpha, beta.
| `inProgress` | In progress or current.   | In progress, open, modified.
| `success`    | Completed or successful.  | Available, done, approved, resolved, added, complete.
| `danger`     | Failure or deletion.      | Errors, declined, failed, removed, critical.
| `warning`    | Attention or hazard.      | Busy, blocked, missing, warning, information.

Colour mappings can be customised in your theme.

### Theming

Generally speaking, the styling of Tags should be controlled in your theme. Tags should look the same across your site so that users can immediately recognise their purpose.

Capitalisation, colour placement (background or border), border-radius, and padding are all customisable via your theme.

## Behaviour

### A tag can have an associated action

A Tag can act as a link or a button, depending on context. Clicking on the tag should direct the user to more information about that tag. For instance, clicking the tag may take the user to a page listing only posts with that tag, or it may filter the current list to show/hide content using the tag.

### A tag can be removed

You may want to use Tags to allow users to add and remove attributes from an object. Do this by passing an event function to the Tag's `onDismiss` prop. This event will be called when the Tag's "dismiss" button is activated.

```jsx
const onDismiss = (event) => {
  window.alert('Goodbye Tag! 👋');
};

<Tags>
  <Tags.Tag color="#cd2f83" onDismiss={onDismiss}>Dismiss me!</Tags.Tag>
</Tags>
```
When a Tag is removable, it will be indicated with a "dismiss" button (stylised as an `X`/"close" icon).

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

### Label text

Tags should include a label text to indicate what type of data is being presented. This ensures that users of assistive technology can understand the context of the Tag, even if they may not be able to see the Tag styling.

To do this, include a `label` attribute on the Tag. This label will be read by screen readers, but will be hidden from the visual display.

```jsx
import { Heading } from '@octopusthink/nautilus';

<React.Fragment>
  <Tags><Tags.Tag label="Category">Books</Tags.Tag></Tags>
  <Heading>Little Women</Heading>
  <Tags><Tags.Tag label="Date">10 November</Tags.Tag></Tags>
  <Heading>The day the music died</Heading>
</React.Fragment>
```

If no `label` property is passed, the Tag will be prefaced with a "Tag" label. Status Tags automatically include this extra text.

### ARIA properties

The button to remove a Tag is given an `aria-label` so that screen reader users can distinguish which Tag will be removed.
