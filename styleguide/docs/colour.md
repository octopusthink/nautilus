Colour is a way to communicate both functional cues and emotional resonance. Purposeful colour choices make interacting with a product easier and more predictable.

## Principles

### 1. Colour is accessible.

Colour can be used as an additional layer of meaning for users who are more comfortable navigating an interface in a visual way, but should never be the sole source of differentiation in a UI. When choosing colours, take into account users with various forms of colour blindness or low vision.

Colour should never be the sole indicator of meaning. Include icons, shapes, or text to supplement anything communicated via colour. Text contrast must [pass WCAG AA across the board](https://webaim.org/resources/contrastchecker/). Test your colours in grayscale to make sure they have sufficient contrast when colour is removed.

### 2. Colour expresses meaning.

Don't apply colour to an element at random. Colour can be decorative in both editorial and product contexts, but clear communication is more important than pretty colours.

Colour can be used to reinforce meaning (error and success messages), to group related items that aren't in physical proximity, to reinforce similar interaction patterns, to denote the most important element on a page, or to guide users more efficiently through an interface. Colour choices should be intentional and rational (eg. red for error; green for success).

### 3. Colour focuses attention.

The use of colour should help bring attention to the most important elements on a page. Colour should support the hierarchy of the page. Use restraint with colour elsewhere in order to focus users' attention on the task at hand or the most important element on a screen. Don't overuse colour, or you run the risk of undermining the hierarchy of your system.

### 4. Colour considers its context.

Colour, when used to express meaning, is highly dependent on cultural norms. White may mean purity to a Western audience, but it can mean death to an Eastern one. To skilfully make use of colour's emotional resonance, it's important to have an understanding of your audience and the cultural context in which your design will exist.

In many countries, colour is also tightly coupled to political parties, which may have consequences you don't initially anticipate when choosing your colours.

## What does Foundation provide?

Nautilus provides a palette of seven colours (red, pink, purple, blue, cyan, green, yellow), each with 10 tints and shades. It also provides a neutral palette of greys in 10 steps, plus white and black.

![](diagrams/colour-palette.png)

This palette has been designed to be flexible enough to build a wide variety of different distinct colour palettes for a range of brand expression, whilst retaining a sense of consistency and balance across different product lines.

## Colour tokens

When applying colours to elements it's best to use Nautilus' Colour Tokens. Colour Tokens are semantic variables that abstract colour by role or usage, independent of the actual color values. Tokens can be customised in themes.

Using these Colour Tokens rather than applying colour values directly mean that it's easier to make cross-site changes to colour in a consistent and semantic way.

[table of all colour tokens]

## Choosing colours

**Themes** can select primary, secondary, and accent colours for a brand and the colours will be automatically applied to elements in a consistent way. For themes that require more granular control of colour choices, semantic and component colours can also be set by themes directly.

![](diagrams/sample-theme-palettes.png)

We recommend choosing colours from Nautilus' palette for increased harmony and usability, but you can use any colour values in your theme.

[Link to brand section]

### Accessible colour

The steps in Nautilus' palette are designed to help make it simpler to make accessible colour choices. Any colour from `500` to `900` will have sufficient contrast against white for AA contrast, and any colour from `0` to `400` will have sufficient contrast against black for AA contrast.

Beyond black and white, the colour values themselves can be used to approximate colour contrast. Any pair of colours with a difference of 500 or more will pass AA level contrast for text and other elements.

[diagram of applied accessibility]
