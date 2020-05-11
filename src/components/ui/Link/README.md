A `<Link>` provides a way of navigating to other content, either on the same site or elsewhere on the web.

```jsx
import { Paragraph } from '@octopusthink/nautilus';

<Paragraph>
  Fill out the <Link href="#sign-up">sign up form</Link> to create your account.
</Paragraph>
```

## Usage

Use a `<Link>` component where you would usually use an `<a>` tag in HTML, including for navigation within your application.

### Use this component for…

- Navigating to other pages or content, on the same site or another site.
- Creating an inline link in a paragraph or other span of text.
- Creating a link to wrap around multiple elements (eg: an image and some text).

### Don't use this component for…

- Primary navigation for your site. Use a `<Menu>` instead.
- Performing an action. Use a `<Button>` instead.
- A standalone navigational link. Use a `<Button navigation>` instead.

## Appearance

Links are styled consistently throughout, using a distinct colour and a slightly lighter underline. Colours are adjustable in your theme.

```jsx
import { Paragraph } from '@octopusthink/nautilus';

<Paragraph>
  Looking for a new furry friend? Browse our
  <Link href="#puppies">puppies</Link> and
  <Link href="#kittens">kittens</Link> for adoption.
</Paragraph>;
```

## Behaviour

### Links to external resources

Use the `external` prop to indicate that a link navigates to an off-site, external resource. This helps users know what to expect before they click a link.

```jsx
import { Paragraph } from '@octopusthink/nautilus';

<Paragraph>
  Make sure to read the
  <Link href="https://tpsreports.com" external>TPS Reports</Link> prior
  to the Monday Mega-Meeting.
</Paragraph>
```

### Using a router

By default, Nautilus will output an `<a>` tag for every `Link` component.

If you're using a router (like React Router or Reach Router), you'll probably want to use the router's `Link` component under the hood.

To do this, set a config value for `LinkComponent` in your [`Nautilus`](/#/Function/Higher-order%20components/Nautilus) higher-order component.

Here's how you would use various link components from popular router libraries:

```jsx
import Nautilus, { Paragraph, Tabs } from '@octopusthink/nautilus';
import { Link as ReachRouterLink } from '@reach/router';
import { createMemoryHistory } from 'history';
import { Link as ReactRouterLink, Router } from 'react-router-dom';

<Tabs>
  <Tabs.Tab label="Reach Router">
    <Nautilus config={{ LinkComponent: ReachRouterLink }}>
      <Paragraph>
        This link uses <Link to="#react-router">Reach Router</Link>.
      </Paragraph>
    </Nautilus>
  </Tabs.Tab>

  <Tabs.Tab label="React Router">
    <Nautilus config={{ LinkComponent: ReactRouterLink }}>
      <Router history={createMemoryHistory()}>
        <Paragraph>
          But this link uses <Link to="#react-router">React Router</Link>.
        </Paragraph>
      </Router>
    </Nautilus>
  </Tabs.Tab>
</Tabs>
```

### Overriding individual Link components

If you want to override a specific `Link` component, you can use the `as` prop:

```jsx
import Nautilus, { Paragraph } from '@octopusthink/nautilus';
import { createMemoryHistory } from 'history';
import { Link as ReactRouterLink, Router } from 'react-router-dom';

<Nautilus>
  <Router history={createMemoryHistory()}>
    <Paragraph>
      Fill out the
      <Link as={ReactRouterLink} to="/sign-up">sign up form</Link> to
      create your account.
    </Paragraph>
  </Router>
</Nautilus>
```

This is especially useful if you have set a default `Link` component that you want to use for the majority of links, but occassionally want to output a regular `<a>` tag.

## Voice & tone

- Link text should be short and succinct. Aim for four words or less.
- Link text should clearly label the intended destination. Use the destination title where possible.
- Don't use "click here" or another link to "here".
- Don't use the web address itself, unless it's the most meaningful descriptive label for the link.

## Accessibility

### Use a clear, unique text label for link text

Use text for links. If using graphics or icons, provide a text alternative or pair them with a text label.

Since screen reader users may choose to skim all the links in a page without reading the surrounding content, it's especially important to ensure that your link text works on its own and accurately labels the intended destination. Test your link text to make sure it's sufficiently descriptive and unique when read on its own. Don't use "here" as your link text.

If you have multiple links on a page that navigate to similar, but unique, content, make sure they have unique labels. For instance, if you're showing blog post previews followed by a "Read more" link, ensure the title of the post is somewhere in the link so that screen reader users can differentiate the posts.

### Don't open links in new windows

Don't open links in new windows. This may be done with good intent, but it often has a negative impact on the usability and accessibility of the page and can disorient users.

Opening links in new windows hijacks the user experience and forces users to open new tabs, whether they want to or not. Instead, use an `external` indicator to show that the link leads to off-site content, and allow users to choose whether they want that content to open in a new tab or not.

### Ensure links are clearly identified

It's best to use two different indicators for links: an underline and an accent colour. This is a long-established pattern for identifying links on the web, so be extremely careful deviating for this pattern.

Never rely on colour or hover states alone to differentiate links. Be very careful with underlining text that isn't a link, since users may expect these to function as links.
