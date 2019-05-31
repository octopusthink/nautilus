Headings are short pieces of text used to organise and structure a page's content.

They provide both a semantic and a presentational role, guiding users as well as search engines and other bots through the page content both visually (through hierarchy) and structurally (through markup). They are especially important to help users of assistive technology navigate a page quickly.

```jsx
<Heading level={1}>Hamburglar foxgloves candyshack.</Heading>
```

## Usage

Use a `<Heading>` to introduce a block of text or other content. Headings act as titles for sections of content, and are almost always followed by more detailed information.

Don't use a `<Heading>` for:
- The primary title of a page. Use a `<PageTitle>` instead.
- A subtitle underneath a primary title. Use a `<Subtitle>` instead.
- Long blocks of text intended to span more than two lines. Use a [`<Paragraph>`](../#/Function/Components/Paragraph) instead.
- A primary link that stands by itself. Use a [`<Button>`](../#/Function/Components/Button) instead.

## Appearance

- Use a consistent colour and style for headings across the site.
- Use variations in size to establish hierarchy in headings.
- The space between a heading and the content it titles should be notably smaller than the space between the heading and its preceeding content. This helps establish a relationship by ensuring that headings are in close proximity to the content they describe.
- Headings shouldn't span longer than two or three lines.
- Headings should be visibly larger and more prominent than body copy, and should be more tightly spaced between lines.

## Variations

Headings are provided in three different visual sizes. Try to use headings sequentially as much as possible, so a medium heading would be nested underneath a large heading.

```jsx
<Heading large>Hamburglar foxgloves candyshack.</Heading>
<Heading medium>Hamburglar foxgloves candyshack.</Heading>
<Heading small>Hamburglar foxgloves candyshack.</Heading>
```

By default, the largest heading then uses an `<h2>`, the medium heading uses `<h3>`, and the smallest heading uses `<h4>`. Only break this levelling structure if you have a good reason for doing so.

## Voice & Tone

- Headings should use Sentence case, not Title Case.
- Headings should use a full stop (period) only when they are written as full sentences.
- Keep headings as short as possible. Only use a full sentence for a heading when necessary for stylistic purposes.
- Use headings to separate and organise long blocks of content.
- Headings should reflect and title the content that follows them.

## Accessibility

Whilst it's generally good practise for the visual hierarchy of the heading to match the semantic hierarchy of the content structure, this won't always be the case. For accessibility reasons, it's important that `<h>` tags follow proper semantic order.

- Never skip a heading level (ie, going from `<h2>` to `<h4>`).
- Don't traverse heading levels (ie, nesting an `<h2>` under an `<h4>`). Headings should be used sequentially to provide further separation inside an existing section.
- Only use a single `<h1>` tag per page. (This should be your `<PageTitle>`.)
- Don't write headings in ALL CAPS. The variation of font, size, and/or weight should be a sufficient indicator of hierarchy.
