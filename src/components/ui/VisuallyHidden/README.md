A `VisuallyHidden` is an easy way to make an element available to assistive technology, but hidden otherwise.

```jsx
import { Button, VisuallyHidden } from '@octopusthink/nautilus';

<Button navigation href="https://www.theatlantic.com/science/archive/2019/07/why-did-octopuses-become-smart/593155/">
  Continue reading
  <VisuallyHidden>"For Smart Animals, Octopuses Are Very Weird"</VisuallyHidden>
</Button>
```

## Usage

Use `VisuallyHidden` to hide an element from sighted users. This element (typically text) should be used to provide extra context to non-visual consumers (eg, screen readers, search engines, bots) of your content.

### Use this component for...

- Title text to contextualise an otherwise repeated link (eg. "Read more" links in an archive listing).
- Descriptions of content or interface elements that are not used for sighted users. A common use-case for this is text on an icon button like "Settings".

### Don't use this component for...

- Content that should not be read out to users of assistive technology.
- Form element labels. Use the `label` prop on the elements, and refrain from hiding labels.
- Alternative (`alt`) text for images. Use a caption or `alt` text instead.
- Labelling icons. Use an `<Icon>` with a `label` prop.

## Appearance

Any content wrapped in this component will appear off-screen.

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

## Accessibility

### Hide content sparingly.

Avoid hiding text that is useful for sighted users to "visually simplfy" a UI. Oftentimes label text or extra context is helpful to all users. Visually hidden elements should be used sparingly.

Don't use `VisuallyHidden` as an afterthought or a band-aid for a fundamentally inaccessible component. Icon buttons are a good example of this; what seems like an obvious icon to you for an action in your UI might be confusing to others. Buttons are more accessible as both icon + text, as are many elements in a UI.

Don't overload users of assistive technologies with too much visually hidden text, especially in links that will be read out by screenreaders.

### Make sure links have unique labels.

Screenreaders give users the option to read out only the links in a page, so it's important that each link on a page has a unique label so that users can find what they're looking for quickly.

Use full titles for links rather than generic text.

**Do this:** "Read more `<VisuallyHidden>`about how tasty Diet Coke is`</VisuallyHidden>`"

**Not this:** "Read more `<VisuallyHidden>`about this subject`</VisuallyHidden>`".
