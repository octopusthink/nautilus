An `<Emphasis>` is used to mark a short span of text within body copy as having a light stress.

```jsx
import { Paragraph } from '@octopusthink/nautilus';

<Paragraph>
  He wanted to eat a peanut butter cup, but he was <Emphasis>super</Emphasis> allergic to peanuts and may have perished in the attempt.
</Paragraph>
```

## Usage

Use an `<Emphasis>` component where you would usually use a `<em>` tag in HTML.

### Use this component for...

- Indicating stress or a shift in intonation in a passage of text.
- A piece of text requiring "local" emphasis (emphasis when reading the passage).
- Distinguishing titles of books, articles, and other works. 

### Don't use this component for...

- A heading or subheading. Use a `<Heading>` or `<Subtitle>` instead.
- Highlighting a navigational link. Use a `<Link>` instead.
- Helping users who are skimming to pick out key phrases and concepts. Use a `<Strong>` instead.
- A piece of text requiring "global" emphasis (emphasis when scanning the page as a whole). Use a `<Strong>` instead.

## Appearance

`<Emphasis>` spans are styled consistently throughout and have less visual weight than `<Strong>` spans. Colours are adjustable in your theme.

```jsx
import { Paragraph, Strong } from '@octopusthink/nautilus';

<Paragraph>
  The puppies <Strong>chased their tails</Strong> <Emphasis>almost</Emphasis> every single afternoon.
</Paragraph>
```

## Accessibility

Use care when emphasising text. Only emphasise a few words at a time. Some users may struggle to read italicised text, so only use this when necessary to convey additional information.
