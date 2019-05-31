Headings are short pieces of text used to organise and structure a page's content.

They provide both a semantic and a presentational role, guiding users (as well as search engines and other bots) through the page content both visually (through hierarchy) and structurally (through markup). They are especially important for users of assistive technology—heading allow quick navigation throughout a page.

```jsx
<Heading>This just in: Scotland is rainy 🏴󠁧󠁢󠁳󠁣󠁴󠁿🌦</Heading>
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
- The space between a heading and the content it titles should be notably smaller than the space between the heading and its preceding content. This helps establish a relationship by ensuring that headings are in close proximity to the content they describe.
- Headings shouldn't span longer than two lines.
- Headings should be visibly larger and more prominent than body copy, and should be more tightly spaced between lines.

## Variations

Headings are provided in three different sizes. You should **always use headings sequentially** (a medium heading would be nested underneath a large heading).

```jsx
<Heading level={2}>Breaking news 📰</Heading>
<Heading level={3}>Kittens are better than dogs 😼</Heading>
<Heading level={4}>More at eleven 🕚</Heading>
```

The `large` heading then uses an `<h2>`, the `medium` heading uses `<h3>`, and the `small` heading uses `<h4>`. You should not break this levelling structure; see the Accessibility section for more details.

## Voice & Tone

- Headings should use Sentence case, not Title Case.
- Headings should use a full stop (period) only when they are written as full sentences.
- Keep headings as short as possible. Only use a full sentence for a heading when necessary for stylistic purposes.
- Use headings to separate and organise long blocks of content.
- Headings should reflect and title the content that follows them.

## Accessibility

For accessibility reasons, it's important that `<h>` tags follow proper semantic order.

- Never skip a heading level (ie, going from `<h2>` to `<h4>`).
- Don't traverse heading levels (ie, nesting an `<h2>` under an `<h4>`). Headings should be used sequentially to provide further separation inside an existing section.
- Only use a single `<h1>` tag per page. (This should be your `<PageTitle>`.)
- Don't write headings in ALL CAPS. The variation of font, size, and/or weight should be a sufficient indicator of hierarchy.
