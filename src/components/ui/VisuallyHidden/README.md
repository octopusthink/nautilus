Use this component to consistently and easily hide text or other elements from your visual UI but keep them in the semantic content of your app/site.

This component should be used for accessibility and semantic purposes to provide extra context to non-visual consumers of your content.

```jsx
import { Link, VisuallyHidden } from '@octopusthink/nautilus';

<Link external href="https://www.theatlantic.com/science/archive/2019/07/why-did-octopuses-become-smart/593155/">
  Continue reading
  <VisuallyHidden>"For Smart Animals, Octopuses Are Very Weird"</VisuallyHidden>
</Link>
```

## Usage

Use `VisuallyHidden` to _visually_ hide any element from sighted users. You should use this component to include content in the page that will help non-visual users/users of assistive technologies use your app/site. It could be info that further contextualises content (like the article title in a "Read more" link, see above).

Do use `VisuallyHidden` for:

- Extra context for buttons or links that are read out by assistive technology (eg. a "Read more" link; see above).
- Descriptions of content or interface elements that are not used for sighted users. A common use-case for this is text on an icon button like "Settings", especially on a small screen.

Don't use `VisuallyHidden` for:
- Content that should not be read out to users of assistive technology.
- Form element labels. Use the `label` prop on the elements, and refrain from hiding labels.

## Appearance

- This component hides all content that appears beneath it.

## Variations

You can use the `as` prop to change the component/element used to render the `VisuallyHidden` component. By default it outputs a `<span>` tag, but if you are outputting block-level elements inside the `VisuallyHidden` component (eg. a `Paragraph`), this will result in invalid HTML. Instead, set the `as` prop to `"div"`:

```jsx
import { Paragraph, VisuallyHidden } from '@octopusthink/nautilus';

<React.Fragment>
  <Paragraph>(The content below is visually hidden; check out the code to see it.)</Paragraph>
  <VisuallyHidden as="div">
    <Paragraph>
      This is a large amount of visually-hidden text used to explain
      something to non-sighted users.
    </Paragraph>
  </VisuallyHidden>
</React.Fragment>
```

## Voice & Tone

- Avoid hiding text that is useful for sighted users to "visually simplfy" a UI. Oftentimes label text or extra context is helpful to all users. Visually hidden elements should be used sparingly.

## Accessibility

Don't use `VisuallyHidden` as an afterthought or a band-aid for a fundamentally inaccessible component. Icon buttons are a good example of this; what seems like an obvious icon to you for an action in your UI might be confusing to others. Buttons are more accessible as both icon + text, as are many elements in a UI.

`VisuallyHidden` is best used for extra info that is easily and obviously inferred from visual context cues but would not make sense for users of assistive technology who are not consuming your UI in a visual manner.

- Don't overload users of assistive technologies with too much visually hidden text, especially in links that will be read out by screenreaders.
- Use full titles for links rather than generic text; eg. use `Read more <VisuallyHidden>about how tasty Diet Coke is</VisuallyHidden>`, not `Read more <VisuallyHidden>about this subject</VisuallyHidden>`.
