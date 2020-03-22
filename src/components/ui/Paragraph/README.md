A `<Paragraph>` is a self-contained unit of one or more coherent sentences related to a single topic or idea.

```jsx
<Paragraph>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum hendrerit
  augue gravida hendrerit.
</Paragraph>

<Paragraph noMargin>
  Vestibulum ornare eget lacus cursus rhoncus. Cras nec
  lectus in sem viverra volutpat.
</Paragraph>
```

## Usage

Use a `<Paragraph>` for any body copy comprising of one or more full sentences.

Don't use a `<Paragraph>` for:
- A single text link or call to action. Use a [`<Button>`](../#/Function/Components/Button) instead.
- A heading or subheading. Use a `<Heading>`, `<Subtitle>`, or `<Page Title>`.
- A list of related, equally weighted items. Use a `<List>` instead.

## Appearance

- Line lengths should be between 55-70 characters.
- Text colour should contrast with the background. (See accessibility section below.)
- Use the large and small variants sparingly when hierarchy is required. Most `<Paragraph>`s should use the default size.


## Variations

Use a **large paragraph** when you want to emphasise an important passage of text.

```jsx
<Paragraph large noMargin>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum hendrerit
  augue gravida hendrerit. Vestibulum ornare eget lacus cursus rhoncus. Cras nec
  lectus in sem viverra volutpat.
</Paragraph>
```

Use a **small paragraph** for fine print, or details that are secondary to the main content.

```jsx
<Paragraph noMargin small>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum hendrerit
  augue gravida hendrerit. Vestibulum ornare eget lacus cursus rhoncus. Cras nec
  lectus in sem viverra volutpat.
</Paragraph>
```

Use an **inverse paragraph** if you need to put a paragraph on top of a dark background.

```jsx
<Paragraph inverse noMargin>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum hendrerit
  augue gravida hendrerit. Vestibulum ornare eget lacus cursus rhoncus. Cras nec
  lectus in sem viverra volutpat.
</Paragraph>
```

For both inverse and default type colours, you can also use a dark and light variant. Use sparingly when needed to provide an additional level of hierarchy or emphasis.

```jsx
<Paragraph light>
  Light
</Paragraph>

<Paragraph>
  Default
</Paragraph>

<Paragraph dark>
  Dark
</Paragraph>

<Paragraph inverse light>
  Inverse light
</Paragraph>

<Paragraph inverse>
  Inverse
</Paragraph>

<Paragraph inverse dark noMargin>
  Inverse dark
</Paragraph>
```


## Voice & Tone

Aim to keep paragraphs as **short as possible**. If a paragraph is longer than five sentences, break it into two.

When writing long passages of text comprised of many paragraphs, highlight important information using **strong** and _emphasis_ tags. Use headings and lists to make content easier to scan.

## Accessibility

- Ensure text colour has a contrast ratio of at least 7:1 (WCAG AAA).
- Use relative units to ensure that text can be resized by users.
- Line height should be at least a space-and-a-half within paragraphs. (1.5)
- Paragraph spacing should be at least 1.5 times the line height.
- Don't allow line lengths to span more than 80 characters.
- Font size should be a minimum of 16px.
