A `Paragraph` is a self-contained unit of one or more coherent sentences related to a single topic or idea.

```jsx
<Paragraph size="large">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum hendrerit
	augue gravida hendrerit. Vestibulum ornare eget lacus cursus rhoncus. Cras nec
	lectus in sem viverra volutpat.
</Paragraph>
```

## Usage

Use a `Paragraph` for any body copy comprising of one or more full sentences.

Don't use a `Paragraph` for:
- A single text link or call to action—use a `Button` instead.
- A heading or subheading—use a `Heading`, `Subtitle`, or `Page Title`.
- A list of related, equally weighted items—use a `List` instead.

## Appearance

- Line lengths should be between 55-70 characters.
- Text colour should contrast with the background.
- Use the large and small variants sparingly when hierarchy is required. Most `Paragraphs` should use the default size.

Use a **large paragraph** when you want to emphasise an important passage of text.

```jsx
<Paragraph>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum hendrerit
	augue gravida hendrerit. Vestibulum ornare eget lacus cursus rhoncus. Cras nec
	lectus in sem viverra volutpat.
</Paragraph>
```

Use a **small paragraph** for fine print, or details that are secondary to the main content.

```jsx
<Paragraph size="small">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum hendrerit
	augue gravida hendrerit. Vestibulum ornare eget lacus cursus rhoncus. Cras nec
	lectus in sem viverra volutpat.
</Paragraph>
```


## Voice & Tone

```jsx
<Paragraph color="accent">Aenean auctor justo nisl, in ullamcorper turpis pharetra mattis. Duis eget vulputate est. Nullam a velit pharetra, hendrerit magna vitae, accumsan magna.</Paragraph>
<Paragraph color="medium">Aenean auctor justo nisl, in ullamcorper turpis pharetra mattis. Duis eget vulputate est. Nullam a velit pharetra, hendrerit magna vitae, accumsan magna.</Paragraph>
<Paragraph color="light">Aenean auctor justo nisl, in ullamcorper turpis pharetra mattis. Duis eget vulputate est. Nullam a velit pharetra, hendrerit magna vitae, accumsan magna.</Paragraph>
<Paragraph color="danger">Aenean auctor justo nisl, in ullamcorper turpis pharetra mattis. Duis eget vulputate est. Nullam a velit pharetra, hendrerit magna vitae, accumsan magna.</Paragraph>
<Paragraph color="success">Aenean auctor justo nisl, in ullamcorper turpis pharetra mattis. Duis eget vulputate est. Nullam a velit pharetra, hendrerit magna vitae, accumsan magna.</Paragraph>
```
