An `<Icon>` is a graphical representation of a concept, used to illustrate or clarify text, improve wayfinding, and communicate visually.

```jsx
<Icon name="airplay" />
<Icon name="aperture" title="Camera Aperture" />
<Icon name="anchor" title="Boat anchor" />
```

## Usage

### Use an `Icon` for...

Use an `Icon` when you want to emphasise or clarify an important piece of text. Generally an `Icon` is used with a `Button` or `Tab` to communicate an action or navigation link, but can be used as a standalone element as well. When used as standalone elements, they are often seen in page headers, section titles, in notifications, and inline with text to add clarity.

### Don't use an `Icon` for...

- Displaying a complex image or photo. Use an `Image` instead.
- Communicating a link, button, or action. Use a `Button` or `Tab` (combined with an `Icon`) instead.

## Appearance

### Colour

An icon can be passed either a stroke colour or a fill colour.

`strokeColor` affects the outline of the icon:

```jsx
<Icon name="pen-tool" strokeColor="#053e6c" large />
<Icon name="target" strokeColor="#8a0000" large />
<Icon name="star" strokeColor="#eeb600" large />
```

`fillColor` affects the inside of the icon:

```jsx
<Icon name="pen-tool" fillColor="#053e6c" large />
<Icon name="target" fillColor="#8a0000" large />
<Icon name="star" fillColor="#eeb600" large />
```

You can combine both colours if you like:

```jsx
<Icon name="pen-tool" fillColor="#5788b1" strokeColor="#043258" large />
<Icon name="target" fillColor="#c26767" strokeColor="#780000" large />
<Icon name="star" fillColor="#f7e095" strokeColor="#d7a400" large />
```

When pairing an icon with a label, use a slightly lighter variant of the text colour for the icon colour. This make the two elements feel connected, whilst ensuring the icon doesn't have more visual weight than the text. (Nautilus does this by default because we always want you to look good. 🙌)

```jsx
import { Paragraph } from '@octopusthink/nautilus';

<React.Fragment>
  <Paragraph style={{ color: '#b32973' }}>
    <Icon name="heart"/> I love Lucy.
  </Paragraph>
  <Paragraph>
    <Icon name="coffee" />
    Lucy loves coffee.
  </Paragraph>
</React.Fragment>
```

### Size

Icons are available in five different sizes: `extraLarge` (`64px`), `large` (`48px`), `medium` (`24px`), `small` (`16px`), and `extraSmall` (`8px`). If you don't pass a size value, your icons will use the `medium` size.

The default icon sizes can be tweaked in your theme. Sizes should be defined in `rem` to ensure the icons adjust to the user's font size. (The above sizes are the pixel equivalents of the `rem` sizes provided for reference.)

```jsx
<Icon name="heart" extraSmall />
<Icon name="heart" small />
<Icon name="heart" medium />
<Icon name="heart" large />
<Icon name="heart" extraLarge />

<Icon name="star" extraSmall />
<Icon name="star" small />
<Icon name="star" medium />
<Icon name="star" large />
<Icon name="star" extraLarge />

<Icon name="pen-tool" extraSmall />
<Icon name="pen-tool" small />
<Icon name="pen-tool" medium />
<Icon name="pen-tool" large />
<Icon name="pen-tool" extraLarge />
```

Stroke widths scale with the icon size for better legibility. Stroke widths are also customisable via your theme.


### Margin & alignment

By default, an `Icon` has a small amount of margin to its right, to give it some breathing space when used with text.

You can customise the margin value to ensure proper placement in your layout. To maintain visual consistency, Nautilus uses the spacing values provided by your theme by default.

Aligning an icon perfectly to text it's inline with can sometimes be tricky. By default, the container is set to vertical-align middle, but you can override this in your CSS if needed.

### Border & background

An icon can have a border and a background. These use a circular shape by default because it looks nicest, but this value, along with border width, can be changed in your theme.

```jsx
<Icon name="mic" background="#181b1c" color="#cd2f83" />
<Icon name="mic" border="#cd2f83" color="#cd2f83" />
<Icon name="mic" background="#cd2f83" border="#181b1c" color="#181b1c" />
<Icon name="mic" background="#181b1c" color="#fff" />
<br />
<Icon name="mic" border="#cd2f83" color="#cd2f83" extraSmall />
<Icon name="mic" border="#cd2f83" color="#cd2f83" small />
<Icon name="mic" border="#cd2f83" color="#cd2f83" medium />
<Icon name="mic" border="#cd2f83" color="#cd2f83" large />
<Icon name="mic" border="#cd2f83" color="#cd2f83" extraLarge />
```

This is generally best when an `Icon` is used inside a `Tab` or a `Button`, since it gives the icon additional emphasis and creates a clear touch target.

## Accessibility

### An icon + text is the best choice for accessibility

Icons can help people who have trouble processing text or who are trying to navigate a product written in a foreign language. Use icons to increase the "scan-ability" of large blocks of content.

Remember that an icon may have different meanings in different contexts, or when interpreted through the lenses of different cultures, and they provide no meaning to people with vision loss.

While an icon can be used on its own in constrained UIs, the best practise is to **pair an icon with a visual text label**, especially for important actions that could possibly be misunderstood. There are some icons that are universally understood (a trash icon for deleting, an "X" icon for closing a window), but there is often room for misinterpretation.

### Don't overuse icons

An interface littered with icons can lead to cognitive overload. Use icons sparingly to highlight important actions and information, not just for decoration.

### Keep internationalisation in mind

When using an icon to represent text, be mindful of how that icon might be interpreted in other countries. For instance, a dollar sign (`$`) icon represents money in many countries, but not all. In these cases, localise your icons for your visitors or use a more generic, universally recognised icon.

### Use a title for icons without a text label

If an icon is used without a text label, it needs to have a text alternative so that screen readers can read it. This adds a `title` tag inside the `svg` that’s conveyed to screen reader users.

Best practises for label text:
- Don't describe what the icon looks like
- Don't include "icon" in the text
- Duplicate information that already exists in the text or programmatically

```jsx
<Icon name="eye" title="Eye" />
```

If necessary, you can also add a `description` element to describe the icon in more detail. This isn't often necessary to communicate your intention, so only use it for complex iconography.

```jsx
<Icon name="eye" title="Eye" description="An open human eye, with no eyelashes." />
```

If an icon has a visible text label, the icon doesn't need a title attribute and should be hidden from screen readers. If you don't pass a title attribute to the icon, it will be automatically hidden from assistive technology using the `aria-hidden` property.

```jsx
import { Paragraph } from '@octopusthink/nautilus';

<Paragraph>
  <Icon name="eye-off" /> Now you see me, now you don't.
</Paragraph>
```
