A `<List>` is a collection of related elements of equal weight, presented in an itemised fashion.

Use the `<List.Item>` component for each item in your list.

```jsx
import { Heading } from '@octopusthink/nautilus';

<List ordered>
  <Heading>Things to do</Heading>
  <List.Item>Take shower. 🛀</List.Item>
  <List.Item>Brush teeth. 😁</List.Item>
  <List.Item>Take over world. 🌍</List.Item>
</List>
```

## Usage

Use a list to make blocks of text easier to read, and to break information into manageable chunks.

Don't use a `<List>` for:

- A collection of unrelated items. Use a `<Paragraph>` instead, or break the collection into smaller lists of related items.
- Presenting long or complex pieces of data. Use a `<Paragraph>` or a `<DataTable>` instead.
- A list of checkboxes, radio buttons, or other elements that require user interactivity. Use a `<Choice>` instead.
- A list of key/value pairs, such as a list of definitions or descriptions. Use a `<DescriptionList>` instead.

## Appearance

- Choose a bullet and numbering style and use them consistently across your site or app. Don't mix styles unless you have a good reason for doing so.
- Avoid lists of more than ten items. If you have a long list, consider breaking it up into smaller, more specific lists for more meaning and comprehension.
- Lists should use body text styling so they look identical to other body copy, especially when used in editorial copy. If a list stands alone, it can use more distinct typography.
- The space between each individual list item should be slightly bigger than the line-height inside the list item.
- Lists can be nested, but avoid too much nesting. As a general rule, nest lists to a maximum of three levels. If you need more levels, consider other ways of breaking up your content, like using an individual list for each top-level list item.
- Arrange list items in a logical way, even if they aren't sequential numbered steps. Bulleted lists can be arranged by priority, by order of importance, by size, alphabetically, numerically.

## Variations

Use a bulleted list when the order of items doesn't matter and to present content of equal status or value. Bulleted lists can be rearranged without losing any meaning.

```jsx
<List>
  <List.Item>cats</List.Item>
  <List.Item>dogs</List.Item>
  <List.Item>mice</List.Item>
</List>
```

<!--
TODO: Implement an Icon list.
Use an icon list when you want to provide additional semantic meaning—for instance, to show dos and don'ts.

[example]
-->

Use ordered lists when item order is relevant, or to imply sequence and order. Ordered lists are commonly used when giving instructions or steps in a process.

```jsx
import { Paragraph } from '@octopusthink/nautilus';

<List ordered>
  <Paragraph>How to file taxes:</Paragraph>
  <List.Item>Obtain wine.</List.Item>
  <List.Item>Crack open wine.</List.Item>
  <List.Item>Start drinking.</List.Item>
  <List.Item>Spread papers in an organised fashion around room.</List.Item>
  <List.Item>Reluctantly do taxes.</List.Item>
</List>
```

## Voice & Tone

- Introduce lists with a lead-in `<Paragraph>` ending in a colon (eg: "My favourite things:") or a `<Heading>` with no punctuation.
- If list items use a single word only, start each item with a lowercase letter, and do not use a full stop at the end. (eg: "cat")
- If list items use full sentences or sentence fragments (subject and verb), start each item with an uppercase letter and use a full stop at the end. (eg: "The cat ate a mouse.")
- Never use commas or semicolons at the end of list items.
- Use list items that are grammatically parallel to reflect their equal weight. For example, do not mix passive voice with active voice or declarative statements with imperative commands, and follow the same phrase structure for each item in the list.

## Accessibility

Using lists well will help improve the accessibility of your site.

List items are conveyed as a group of related elements to assistive technology users. Assistive technologies may announce the total number of items in a list, give the relevant position of each item in a list, and provide shortcuts to quickly traverse a list.

- If your list has a title or lead-in phrase, use a `<Heading>` or `<Paragraph>` component, inside the list as the first component. This will identify it as the list header using the `aria-labelledby` attribute.
- Keep list labels as short as possible to communicate your intent.
- Use a bulleted list for lists where the order isn't important, and a ordered list when it is.
- Don't use a list for stylistic or presentation needs only.
- Use semantic HTML elements (`<ol>`, `<ul>`, and `<li>`) to mark up lists. (Nautilus will handle this for you!)

Here's how you should describe a list with a `<Heading>` component:

```jsx
import { Heading } from '@octopusthink/nautilus';

<List>
  <Heading level={4}>Tasty fruit</Heading>
  <List.Item>apples 🍏</List.Item>
  <List.Item>kiwis 🥝</List.Item>
  <List.Item>mangos 🥭</List.Item>
</List>
```

Here's how you should describe a list with a `<Paragraph>` component:

```jsx
import { Paragraph } from '@octopusthink/nautilus';

<List ordered>
  <Paragraph>The best motorcycles, in order:</Paragraph>
  <List.Item>Honda CBR 125R</List.Item>
  <List.Item>Honda CB400 Four</List.Item>
  <List.Item>Ducati 848</List.Item>
</List>
```
