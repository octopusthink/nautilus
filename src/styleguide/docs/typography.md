Typography is fundamental to the experience of reading and interacting with a website. As such, there's a lot of complexity to absorb here! Typography can help create clear hierarchies, organize information, and guide users through a product or experience.

The Material Design type scale includes a range of contrasting styles that support the needs of your product and its content.

The type scale is a combination of 13 styles that are supported by the type system. It contains reusable categories of text, each with an intended application and meaning.

Nautilus provides a type system that aims to be flexible and usable, providing sensible defaults whilst also allowing for finer-grained brand control. Kind of a tall order, no? Let's start simple.

## Principles

1. Typographic choices aren't arbitrary.

All typography should have a semantic meaning.

2. Typography should always be legible.

This breaks down to a few different things:

- Always aim for a colour contrast of AAA+.
- Ensure line lengths are between 55-70 characters.
- Decrease line height for headings.
- Don't set critical text, or passages longer than a few words, in all caps or small caps.

3. Use hierarchy to improve understanding of content.

Remember, nobody reads on the web. When text is very dense, it becomes hard to read and find what you're looking for. Use headings, lists, and other styling choices to help guide readers through text.

## How typography works

Nautilus' type system is based heavily on Ether. It's designed to generate a spectrum of typography sizes with a mathematically-derived hierarchy. It works using a Base Size and Scale Modifier ratio.

**Base Size** determines the starting (and smallest) size for the system. It usually corresponds to the fine-print style in our sites and applications. Generally we suggest that this number increase at smaller breakpoints to create a larger size set that is more readable on mobile devices.

The Scale Modifier ratio determines the incremental change in hierarchy as the system progresses from size to size. This ratio can be anything (rule of thirds, golden ratio, etc)—the closer to 1 the less change will occur between base sizes. Generally we suggest that this number decreases at smaller breakpoints to create a less-wildly variable set of sizes to maximize screen real-estate.

Output text sizes are rounded because the generated values can be messy. This allows us to more effectively match real sizes in code to sizes in Sketch and design files.

Nautilus uses a type scale to generate a range of 7 sizes for typography. This ensures that sizes are used consistently and aren't picked out of a hat.

[show scale + numbers!]

Line height is calculated automatically based on the font size and the usage (so for instance, headings will use a much tighter line height.)

Themes can change the Base Size and Scale Modifier to suit their typographic needs, whilst still maintaining a harmonic scale.

Type tokens and sets

Carbon uses type tokens and themes to manage typography. Type tokens are pre-set configurations of typographic elements such as font size, weight, or leading (line height) that are specifically calibrated for use alongside IBM Plex in product. Selecting the appropriate type style is determined by layout or template structure. Layouts may have several levels of architecture or areas that require varying typographic hierarchies. Productive vs. Expressive type sets

Productive type is reserved for use in web-based product design, where the user needs to focus on tasks. The Productive styles are curated to create a series of clear user expectations about hierarchy. Expressive type, on the other hand, allows for a more dramatic, graphic use of type in editorial and marketing design — which many users would find distracting in product.

There are two heading sets, one Productive and one Expressive. The difference between the Productive and Expressive styles is mainly evident in the Headings. Aside from the token names, which are specifically calibrated for product vs. editorial designers (e.g. $label-01 vs. $caption-01) — the Supporting and Body styles have the same values in both the Productive and Expressive sets.

## Fonts

Out of the box, Nautilus uses system fonts. It aims to provide solid, dependable baseline of styles and sizes in order to establish a clear and cohesive typographic hierarchy that's flexible enough to meet a variety of different needs.

Themes can implement their own typefaces for any element.

## Type scale

Nautilus provides a palette of type styles to apply to elements, categorised by their semantic usage. These styles are applied directly to components as required by their purposes, and are then combined in fun and interesting wways.

[DIAGRAM]

### Body

Mostly for editorial work, use body type for long blocks of text that span multiple lines.

Body type features larger line-height and is available in small, medium, and large sizes. Medium is a good choice for most applications.

- Small
- Medium
- Large

[ samples ]

### Display type

Display type are typically used more for editorial than product applications, but still straddle both worlds.

Headings include small, medium, and large sizes, as well as an extra-large "Page Title" style, designed to be used for titles that appear once on a page, and a subtitle style, designed to be used for a secondary heading beneath a main heading.

- Small
- Medium
- Large:
- PageTitle:
- Subtitle
- [Caption] currently doesn't exist, but is under consideration.

Headings feature much tighter line-spacing than body copy, and can often use ornamental or branded typefaces.

[samples]

### Interface

Interface is a type of body font used for elements that anticipate user interaction. This is like body for product work!

By default, interface type styles use system fonts. We recommend sticking with these unless you've a good reason otherwise. Using system fonts keeps things performant and helps to ensure that your interactive components feel cohesive with the user's system.

This is available in small, medium, and large.

- Small: fine print, help text, etc.
- Medium: buttons, inputs, labels, etc.
- Large: intro paragraphs, big buttons, etc.

[samples]

### Metadata

Metadata is used for small, discrete pieces of data, like a category or a date. It's intended to provide _supplementary_ information or context that isn't critical to the overall content.

Metadata is styled in small-caps to provide additional hierarchy and visual interest. It's often paired on top of a heading

- Small:
- Large:

Metadata doesn't have a medium size, mostly because two variants seemed to be sufficient.

## Colour in typography

Generally speaking, typography should use a neutral colour.

Type color should be carefully considered, with legibility and accessibility as paramount concerns. Keep type color neutral in running text. Use primary blue for primary actions.

## Using & apply type

[Sketch instructions]

[JS instructions]

## Branding

[Instructions]
