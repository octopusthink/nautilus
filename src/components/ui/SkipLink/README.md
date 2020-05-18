A `<SkipLink>` is a hidden internal link at the beginning of a page that provides a way for keyboard users to bypass navigation element and skip directly to the main content.

```jsx
import { Paragraph } from '@octopusthink/nautilus';

<React.Fragment>
  <Paragraph>Click or tab here, then press `tab` to move focus to the `SkipLink` component.</Paragraph>

  <SkipLink toId="/Function/UI Components/SkipLink" />

  <Paragraph>Pressing tab again will hide the `SkipLink`.</Paragraph>
</React.Fragment>
```

## Usage

Your app/site should have a single `<SkipLink>`, located early in your content so it is easily activated by a keyboard user when they start to tab through content.

### Use this component for…

- Providing an easy way for users to skip to the main content of your page.
- Any page that includes page navigation. Without a skip link, keyboard users will find it incredibly difficult to navigate your site.

### Don't use this component for…

- Providing multiple skip links to different sections of your page. Divide your content up with `<Heading>`s or consider separating your content into separate pages instead.

## Appearance

`SkipLink`s are visually hidden until they have focus. When focused they should be visible and appear at the top of the page.

## Behaviour

The skip link component is visually hidden until activated by a keyboard press. When activated, the skip link appears and gains focus. If the user then presses the enter key, they will automatically be taken to the main content container.

By default, a `SkipLink` moves focus to a container with an ID of `#content`, but this can be changed if needed. For example, if your main content container has an ID of `main`, you should specify this using the `toId` prop:

```jsx
import { Paragraph } from '@octopusthink/nautilus';

<React.Fragment>
  <Paragraph>Tab or click here, then press tab to view the skip link.</Paragraph>
  <SkipLink toId="main" />
</React.Fragment>
```

## Voice & tone

You can customise the text inside a skip link if needed for translations or otherwise. The text for the skip link should be clear, concise, and clearly describe what the link does.

```jsx
import { Paragraph } from '@octopusthink/nautilus';

<React.Fragment>
  <Paragraph>Tab or click here, then press tab to view the skip link.</Paragraph>
  <SkipLink>Jump to content</SkipLink>
</React.Fragment>
```

## Accessibility

Skip links will be used by users already familiar with your site's navigation or those who wish to bypass the navigation and immediately jump to the main content. This is analogous to a user who scrolls past a site's header right to content without reading it).

A skip link should be the first element that is focused when the user presses the `tab` key.

Skip links are a very useful accessibility feature, but they should not be an excuse to create overly cumbersome navigation. Keyboard users will still likely need to interact with your navigation elements and other elements that are skipped over by your `SkipLink` component.
