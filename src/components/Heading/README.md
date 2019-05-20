Headings are used to organise and structure a page's content. They provide both a semantic and a presentational role, guiding users as well as search engines and other bots through the page content both visually (through hierarchy) and structurally (through markup).

Whilst it's generally good practise for the visual hierarchy of the heading to match the semantic hierarchy of the content structure, this won't always be the case. For accessibility reasons, it's important that `<h>` tags follow proper semantic order.

By default, the page title uses an `<h1>`. The largest heading then uses an `<h2>`, the medium heading uses `<h3>`, and the smallest heading uses `<h4>`. A subheading uses a `<p>` tag

This component currently supports metadata and page titles, but these should most likely be split into their own components once we have the structure of headings sussed out.

### Page Title

```jsx
<Heading level={1}>This is the page title.</Heading>
```
