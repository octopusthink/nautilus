`<Strong>` is used to mark a short span of text within body copy as important.

```jsx
import { Paragraph } from '@octopusthink/nautilus';

<Paragraph>
  <Strong>Rick James</Strong> was a great musician. He played the bass.
</Paragraph>
```

## Usage

Use a `<Strong>` component where you would usually use a `<strong>` tag in HTML.

### Use this component for...

- Highlighting important information.
- Helping users who are skimming to pick out key phrases and concepts.
- A piece of text requiring "global" emphasis (emphasis when scanning the page as a whole).

### Don't use this component for...

- A heading or subheading. Use a `<Heading>` or `<Subtitle>` instead.
- Highlighting a navigational link. Use a `<Link>` instead.
- Indicating a stress or shifted intonation in a passage of text. Use an `<Emphasis>` instead.
- A piece of text requiring "local" emphasis (emphasis when reading the passage). Use an `<Emphasis>` instead.

## Appearance

`<Strong>` spans are styled consistently throughout and have more visual weight than `<Emphasis>` spans. Colours are adjustable in your theme.

```jsx
import { Paragraph, Emphasis } from '@octopusthink/nautilus';

<Paragraph>
  The puppies <Strong>chased their tails</Strong> <Emphasis>almost</Emphasis> every single afternoon.
</Paragraph>
```

## Accessibility

Use care when highlighting text. Only highlight a few words at a time, and restrict it to key passages or important concepts.

Using `<Strong>` judiciously can help make your text more accessible. Consider using this component to highlight key passages in your text, especially when text is long. This can help users more quickly parse a text and pull out the important details.
