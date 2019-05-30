Headings are used to organise and structure a page's content. They provide both a semantic and a presentational role, guiding users as well as search engines and other bots through the page content both visually (through hierarchy) and structurally (through markup).

```jsx
<Heading level={1}>Hamburglar foxgloves candyshack.</Heading>
```

## Usage

Use a `<Heading>` for ....

Don't use a `<Heading>` for:
- The primary title of a page. Use a `<PageTitle>` instead.
- A subtitle underneath a primary title. Use a `<Subtitle>` instead.
- Long blocks of text intended to span more than two lines. Use a `<Paragraph>` instead.

## Appearance

Visual Style to inform judgment about color, type, space, and more.

- List of short rules.

## Interaction

Behavior to cover how to cope with events, outcomes, and transitions.

## Variations

[Short explanation of usage]

```jsx
<Heading large>Hamburglar foxgloves candyshack.</Heading>
<Heading medium>Hamburglar foxgloves candyshack.</Heading>
<Heading small>Hamburglar foxgloves candyshack.</Heading>
```

## Voice & Tone

Editorial advice covering copy and images flowing into each element.

## Accessibility

Whilst it's generally good practise for the visual hierarchy of the heading to match the semantic hierarchy of the content structure, this won't always be the case. For accessibility reasons, it's important that `<h>` tags follow proper semantic order.

The largest heading then uses an `<h2>`, the medium heading uses `<h3>`, and the smallest heading uses `<h4>`. 
