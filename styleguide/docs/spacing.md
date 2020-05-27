Spacing is an often-overlooked aspect of visual design that help users quickly scan and parse content. Small inconsistencies add up, creating a feeling of chaos and disorganisation. Nautilus provides a spacing system to remove the guesswork and create a sense of vertical rhythm across components and layouts.

## Principles

### Use proximity to define meaningful relationships

Empty space has meaning. The space between elements creates relationships and hierarchy.

When elements are closely spaced, we think of them as related. When more space is added between elements, this relationship weakens. Group related items closely, and use more space between unrelated elements.

Spacing patterns can also be used to create relationships. Elements arranged using the same spacing patterns are seen as having equal weight.

### Use whitespace to create hierarchy and reduce cognitive load

Whitespace is critical to creating focus and aiding in information processing.

Use more spacing around important elements to give them more focus. Users will process closely spaced items as a single group, but an element with lots of whitespace will be processed and evaluated on its own.

Use whitespace to break up sections of content. This gives users' eyes (and brains) a rest, helping content feel uncrowded and calming.

### Ensure all elements have sufficient spacing for accessibility needs

Touch targets should be at least `48px x 48px` with at least `8px` of space between them.

## How Nautilus' spacing system works

Nautilus uses a spacing system based on an 8-pixel base value. This 8 pixel value is commonly used throughout web design for flexibility and cohesion with other commonly used sizes (eg, icons).

All components align to an `8px` square baseline grid across all devices. Iconography, typography, and some elements within components can align to a `4px` grid when necessary.

The end result is that all pixel values should be divisible by 8—heights, widths, and the space between elements. Get out your calculator! To make this simpler, Nautilus provides two scales of values to use when setting spacing around and inside of components.

### Padding spacing

Padding spacing is used for spacing *within* a component, specifically, the **spacing inside the borders of an element**. This scale is used for smaller, more refined spacing needs. In CSS terms, this typically means the `padding` inside of elements, which is typically applied to all sides of the element in relatively equal increments.

When applying padding to an element, consider using a slightly larger increment for the left and right sides to account for the [vertical-horizontal illusion](https://en.wikipedia.org/wiki/Vertical%E2%80%93horizontal_illusion).

[DIAGRAM OF PADDING INSIDE A BOX]

![Padding diagram](diagrams/padding-spacing-scale.png)

### Margin spacing

Margin spacing is used for arranging components in the context of a *page layout*. It uses larger increments than padding spacing.

Margin spacing is used to **control the density of the design** and create relationships. Use the smaller tokens to indicate relationships between elements. Use the larger tokens to disassociate unrelated sections and allow the users' eyes to rest.

When applying margins, try to apply them only to the **bottom** of elements. This helps to avoid weirdness with collapsing margins and makes for a more consistent and rhythmic layout.

[DIAGRAM OF MARGIN UNDER A BOX]

![Margin spacing scale](diagrams/margin-spacing-scale.png)

### Spacing applied

[DIAGRAM OF APPLIED SPACING: CARD?]
