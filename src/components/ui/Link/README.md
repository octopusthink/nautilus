A `<Link>` provides a way of navigating to other content, either on the same site or elsewhere on the web.

```jsx
import { Paragraph } from '@octopusthink/nautilus';

<Paragraph>
  Fill out the <Link to="/sign-up">sign up form</Link> to create your account.
</Paragraph>
```

## Usage

Use a `<Link>` component where you would usually use an `<a>` tag in HTML.

### Use this component for...

- Navigating to other pages or content, on the same site or another site.
- Creating an inline link in a paragraph or other span of text.
- Creating a link to wrap around multiple elements (ie, an image and some text).

### Don't use this component for...

- Primary navigation for your site. Use a Menu instead.
- Performing an action. Use a `<Button>` instead.
- A standalone navigational link. Use a `<Button navigation>` instead.

## Appearance


## Behaviour

Use the `external` prop to indicate that a link navigates to an off-site, external resource. This helps users know what to expect before they click a link.

```jsx
import { Paragraph } from '@octopusthink/nautilus';

<Paragraph>
  Make sure to read the <Link to="https://tpsreports.com" external>TPS Reports</Link> prior to the Monday Mega-Meeting.
</Paragraph>
```


## Voice & tone

- Link text should be short and succinct. Aim for four words or less.
- Link text should clearly label the intended destination. Use the destination title where possible.
- Don't use "click here" or another link to "here".
- Don't use the web address itself, unless it's the most meaningful descriptive label for the link.


## Accessibility

### Use a clear, unique text label for link text

Use text for links. If using graphics or icons, provide a text alternative or pair with a text label.

Since screen reader users may choose to skim all the links in a page without reading the surrounding content, it's especially important to ensure that your link text works on its own and accurately labels the intended destination. Test your link text to make sure it's sufficiently descriptive and unique when read on its own.

If you have multiple links on a page that navigate to similar, but unique, content, make sure they have unique labels. For instance, if you're showing blog post previews followed by a "Read more" link, ensure the title of the post is somewhere in the link so that screen reader users can differentiate the posts.

### Don't open links in new windows

Don't open links in new windows. Whilst this may be done with good intent, it often has a negative impact on the usability and accessibility of the page and can disorient users.

Opening links in new windows hijacks the user experience and forces users to open new tabs, whether they want to or not. Instead, use an `external` indicator to show that the link leads to off-site content, and allow users to choose whether they want that content to open in a new tab or not.
