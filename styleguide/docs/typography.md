Typography is fundamental to the experience of reading and interacting with a website. Great typography creates clear hierarchies, organises information, and guides users through a product or experience.

Nautilus provides a type system that aims to be opinionated, but not obstinate. It provides a dependable baseline of styles and sizes in order to establish a clear and cohesive typographic hierarchy. This baseline is flexible enough to meet a variety of different needs, whilst also allowing for finer-grained brand control.

Kind of a tall order, no? Let's see how that breaks down.

## Principles

### Typographic choices aren't arbitrary

Typography isn't just decoration. Typographic styles are used to indicate the semantic intent of the copy. Select Type Tokens from Nautilus' type system that match the purpose of the text you're styling.

This means that, if you're styling a paragraph of body text, it should use the Body Token, and if you're styling a label or interactive element, it should use the Interface Token.

### Typography should legible and accessible

- Always aim for a colour contrast ratio of at least 7:1 (WCAG AAA).
- Ensure line lengths are between 55-80 characters per line for body copy, and 20-40 for headlines.
- Use a smaller line height for headings than for body copy.
- Don't set critical text, or passages longer than a few words, in all caps or small caps.
- Only use **bold** and *italic* for a few words at a time, and use sparingly.
- Select a simple sans-serif or serif typeface for body copy. Only use display typefaces for headings.
- Line height should be at least a space-and-a-half within paragraphs. (1.5) Spacing between paragraphs should be at least 1.5 times the line height.
- Font size should be a minimum of 16px. Use relative units to ensure that text can be resized by users.

### Use hierarchy to improve understanding of content

Remember, nobody reads on the web. When text is very dense, it becomes hard to read and find what you're looking for.

Use a variety of elements for displaying text: headings, lists, and inline emphasis will help guide readers through text.

### Typography should function independent of colour

Type colour should be carefully considered, with legibility and accessibility as paramount concerns.

As a rule, most type should be set in a neutral colour that contrasts well with the background. Use colour only for primary actions or to highlight interactivity.

## What does Foundation provide

- A palette of named font families to apply to your theme.
- A harmonic scale of type sizes.
- Automated line-height calculations to ensure adherence to a 4pt baseline grid.
- A small-caps modifier.
- A system of semantic type styles (Type Tokens) to apply to components.

## Typographic sizes

Nautilus' type system begins with a spectrum of typographic sizes with a mathematically-derived hierarchy. This ensures that type sizes are used consistently and aren't plucked from a hat at random, and that each increment has sufficient contrast against the other sizes to be a meaningful differentiator. It works using a Base Size and Scale Modifier ratio.

**Base Size** determines the starting size for the system. It usually corresponds to the default body style in our sites and applications. Nautilus likes big type, and defaults to 18px for the base size.

The **Scale Modifier** ratio determines the incremental change in hierarchy as the system progresses from size to size. This ratio can be anything (rule of thirds, golden ratio, etc)—the closer to 1 the less change will occur between base sizes.

![Diagram of the Nautilus type scale in action](diagrams/type-scale.png)

Output text sizes are rounded to whole pixel values and sized in `rem` units so that type can scale when zoomed. `10rem` is equivalent to `10px` so that values can be easily used understood and ported to other applications.

**Line height** is calculated automatically based on the font size and a **Line Height** variable in order to output a line height that is close to the target line height, whilst ensuring that all type sits on the baseline.

**Themes** can change the Base Size, Scale Modifier, and Line Height values to suit their typographic needs, whilst still maintaining a harmonic scale.

### Type sizing for different devices

There will be different Base Size and Scale Modifiers for mobile devices, (although they haven't been fully implemented in code just yet).

As a general rule, we suggest the following tweaks for smaller breakpoints:

The **Base Size should increase** at smaller breakpoints to create a larger size set that is more readable on mobile devices. (This may not be necessary since we're using a larger type size to begin with.)

The **Scale Modifier should decrease** at smaller breakpoints to create a less-wildly variable set of sizes to maximise screen real-estate. Giant headings are great on a desktop device, but  they very rarely work on a phone.

If you don't want to worry about all this, Nautilus' default values have been designed to provide a pleasant and cohesive reading experience for users out of the box. Just leave it be and worry about swapping out your fonts!

## Choosing fonts

Out of the box, Nautilus uses system fonts for all categories of text. System fonts are quick to load, easy to read, and support a clean, straightforward user experience.

We recommend using system fonts for interface usage, but swapping in your brand typefaces for editorial or expressive usage.

**Themes** can select different typefaces for body text, headings, and interface.

## How Nautilus' type system works

Nautilus includes a range of reusable **Type Tokens** within different categories, each with an intended application and meaning. Type Tokens are pre-set configurations of typographic elements like size, weight, leading, or fonts calibrated for a specific usage.

Type Tokens are applied directly to components according to their purpose, which can then be combined to create dynamic, easy-to-read patterns.

[DIAGRAM]

### Body

Primary use: Editorial

Use body type for long blocks of text that span multiple lines.

Body type features larger line-height and is available in small, medium, and large sizes. Medium is a good choice for most applications.

- Small: use for fine print and de-emphasised text.
- Medium: default; most text should be set  at this size.
- Large: Use for emphasis, important text, and lead-in  paragraphs.

[ samples ]

### Display type

Primary use: Editorial

Use display type for small, single-line blocks of text that deserve additional hierachy. Display type is typically used as ornamentation  or (more frequently) to organise content and make it easier to scan through pages.

Used heavily in Editorial contexts, and sparingly in Product contexts. Headings feature much tighter line-spacing than body copy, and can often use ornamental or branded typefaces.

- PageTitle: for titles of the entire page (typically an `<h1>` element)
- Large: The largest heading inside an article, multiple per page
- Medium: Medium sized
- Small: This is quite small, but is good when you need three levels  of headings in one article. Any more than that and maybe it's time to split your content into two pages.
- Subtitle: Designed to be used for a secondary heading beneath a main heading.
- [Caption]: currently doesn't exist, but is under consideration.

[samples]

### Interface

Primary use: Product

Interface is a type of body font used for elements that anticipate user interaction. This is like body for product work!

By default, interface type styles use system fonts. We recommend sticking with these unless you've a good reason otherwise. Using system fonts keeps things performant and helps to ensure that your interactive components feel cohesive with the user's system.

- Small: fine print, help text, etc.
- Medium: buttons, inputs, labels, etc.
- Large: intro paragraphs, big buttons, etc.

[samples]

### Metadata

Primary use:

Metadata is used for small, discrete pieces of data, like a category or a date. It's intended to provide *supplementary* information or context that isn't critical to the overall content.

Metadata is styled in small-caps to provide additional hierarchy and visual interest. It's often paired on top of a heading as an overline style.

- Small: Used most often.
- Large: paired with the largest headings.

Metadata doesn't have a medium size, mostly because two variants seemed to be sufficient.

[samples]

## Using & applying type

[Sketch instructions]

[JS instructions]

## Branding

[Instructions] → link to instructions in Form section?

Sources:

- [https://material.io/design/typography/the-type-system.html#applying-the-type-scale](https://material.io/design/typography/the-type-system.html#applying-the-type-scale)
- [https://ether.thescenery.co/typography/](https://ether.thescenery.co/typography/)
- [https://polaris.shopify.com/design/typography#section-font-stack](https://polaris.shopify.com/design/typography#section-font-stack)
