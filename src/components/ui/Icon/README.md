An `<Icon>` is a graphical representation of a concept, used to illustrate

```jsx
<Icon name="airplay" />
<Icon aria-hidden name="aperture" title="Camera Aperture" />
<Icon name="anchor" title="Boat anchor" />
```

## Usage

### Use an `Icon` for...

Use a `TextField` when you want users to be able to enter or edit free-form text.

### Don't use an `Icon` for...

- Displaying a complex image or photo. Use an `Image` instead.
- Choosing a date. Use a `DatePicker` instead.


## Appearance

### Colour

An icon can be passed a single colour value. When pairing an icon with a label, using a slightly lighter variant of the text colour (drop down 100 or 200 steps) helps make the two elements feel more connected, whilst ensuring the icon doesn't have more visual weight than the text.

```jsx
import { Paragraph } from '@octopusthink/nautilus';

<React.Fragment>
<Icon name="pen-tool" color="#76d0d6" />
<Paragraph>
  <Icon name="heart" color="#e33592" />
  <span>I love Lucy</span>
</Paragraph>
<Icon name="coffee" color="#8a0000" />
</React.Fragment>
```

## Variations


## Accessibility

### Use an icon with a text label to highlight important elements.
