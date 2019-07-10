A `<SkipLink>` provides a way to quickly navigate to the main content of your page with the keyboard. A skip link should be the first element that is focused when the user presses the `tab` key.

A `<SkipLink>` is used as an accessibility feature for keyboard/screenreader users to navigate to your content without needing to tab through the navigation items/UI elements.

```jsx
import { Paragraph } from '@octopusthink/nautilus';

<React.Fragment>
  <Paragraph>Click this paragraph, then press `tab` to move focus to the `SkipLink` component.</Paragraph>

  <SkipLink toId="/Function/UI Components/SkipLink" />

  <Paragraph>Pressing tab again will hide the `SkipLink`.</Paragraph>
</React.Fragment>
```

## Usage

Your app/site should have a single `<SkipLink>`, located early in your content so it is easily activated by a keyboard user when they start to tab through content.

### Use this component for...

- Providing an easy way for users to skip to the main content of your page.

### Don't use this component for...

- Providing multiple skip links to different sections of your page. Divide your content up with `<Heading>`s and consider separating your content into separate pages instead.

## Appearance

`SkipLink`s are visually hidden until they have focus. When focused they should be visible and appear at the top of the page.

## Behaviour

The default content ID target for a `SkipLink` is `#content`, but this can be changed with the `toId` prop. If your main content ID was `main`, you should specify this with your `toId` prop:

```jsx
<SkipLink toId="main" />
```

## Voice & tone

- By default the text inside a skip link is "Skip to main content", but something like "Skip to content" is fine.
- You can customise the text inside a skip link, and you should if you are translating your site.

## Accessibility

Skip links will be used by users already familiar with your site's navigation or those who wish to immediately skip it (analogous to a user who scrolls past a site's header right to content without reading it).

Skip links are a very useful accessibility feature, but they should not be an excuse to create overly cumbersome navigation. Keyboard users will still likely need to interact with your navigation elements and other elements that are skipped over by your `SkipLink` component.
