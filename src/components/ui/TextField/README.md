A TextField is an editable input that enables users to enter and interact with free-form text data.

```jsx
<TextField label="Feed me sentences!" />

<TextField defaultValue="Lorem ipsum..." label="I have a default value." />
```

## Usage

### Use a `TextField` for...

Use a `TextField` when you want users to be able to enter or edit free-form text.

### Don't use a `TextField` for...

- Selecting from a predefined list of options. Use a `DropDownSelect` instead.
- Choosing a date. Use a `DatePicker` instead.
- Selecting a colour. Use a `ColorPicker` instead.
- Any text the user isn't able to edit themselves. Use a `Paragraph` instead.

## Appearance

### Labelling

Every `TextField` has a visible **label**, aligned directly above the input they describe. Labels are short, succinct, and clearly communicate what text the user should enter.

**Hint text** is always visible and appears beneath the label. Use a hint when you want to provide more context or additional guidance. Hints can be more verbose than a label and should provide helpful tips or instructions that will be relevant for the majority of users, like how their information will be used, or where to find a reference number.

```jsx
<TextField label="Fluffy things" hint="List the fluffiest things you can think of, ideally in alphabetical order." placeholder="e.g.: Kittens, puppies, and ponies." />
```

A **placeholder** can be used to provide examples of what sort of information to enter. Placeholder text disappears once the user starts typing and should never be used for critical information. Use placeholder text sparingly. Placeholder text should be used to illustrate examples rather than provide instructions.

```jsx
<TextField label="Fluffy things" placeholder="e.g.: Kittens, puppies, and ponies." />
```

### Size

By default, a `TextField` spans the full width of its parent element in a single line. This size can be adjusted to provide a visual cue as to how much data the input expects.

The size of a `TextField` should give users a visual cue as to how much text is expected. If you want the user to enter two characters, restrict the size to two characters. If you'd like to encourage users to enter a longer piece of text, use a `multiline`.

```jsx
<TextField label="Postcode" size={7} />

<TextField label="I am a multiline input, useful for entering a lot of tex." multiline />
```

### Optional fields

A `TextField` can be marked as optional if it's data that some users need to complete, but others wouldn't. If a `TextField` is marked as optional because it's not strictly required information, consider removing the input altogether.

The text string to mark an optional field is customisable in your theme. **Do not** rely on symbols (asterisks, stars, exclamation marks, etc) or colour alone to communicate the difference between required and non-required fields, since not all users will immediately understand what you're trying to say.

```jsx
<TextField label="I am optional" optional />
```

## Interaction

### Focus

When an input is focussed, it gains additional prominence.

### Disabled

Use a disabled input to indicate that an input isn't ready yet, or relies on another input elsewhere in the screen.

```jsx
<TextField label="Disabled input" size={100} disabled defaultValue="You don't need to worry about me." />
```

### Error handling

Error validation should happen inline in order to give users immediate feedback. Don't start validation until the user has stopped typing inside the input, to avoid frustration.

```jsx
<TextField label="Trouble in paradise" size={14} error="Please fix me!" />
```

### Autocomplete

The [autocomplete attribute](https://cloudfour.com/thinks/autofill-what-web-devs-should-know-but-dont/) helps users complete forms more quickly by allowing them to use browser tools to autofill frequently-entered information. Users complete forms up to 30% faster when autocomplete is implemented well.

Use [standard values](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) where appropriate to match the `TextField`'s intent. If a field should not be autocompleted, set the value to `no`.

### Default values

Where possible, programmatically determine default values to `TextFields` to make it easier for users to complete a form. When providing defaults, make sure those defaults are user-editable in case of an error or false positive.

## Voice & Tone

**Label text** should be short and snappy. Aim for one to three words in total. Don't use conversational labels or any punctuation at the end of the label. ("Name" vs "Tell me your name.")

**Hint text** should use full sentences and can be more verbose. ("Enter your full postal address, including your postal code.")

**Placeholder text** should only be used for examples; not for instructions or extra context. Include “e.g.” before examples and write in sentence case.

## Accessibility

### Use visible labels

A text input should always have a visible label. Screen reader users rely on these to know what to input.

Labels must be visible when an input gains focus, and must be announced to screen readers on focus.

**Never** use a placeholder as a label for an input. These disappear once the user starts typing text and so should only be used for examples to underline a user's understanding of what they need to enter. Use a label to label the input, and use help text to provide supplementary information.

### Only ask questions you really need to ask

Limit the number of inputs (of any type) on a single page. When possible, improve user focus by only asking one question per page and splitting longer forms across multiple pages.

Only ask users for information you really require. There's a mental cost to every additional input you ask a user to fill in ([https://en.wikipedia.org/wiki/Decision_fatigue](https://en.wikipedia.org/wiki/Decision_fatigue)). If the majority of your inputs are optional, you should consider removing those you don't need.

Be very careful asking for sensitive data (titles, gender, ethnicity, age, etc). Collecting this data requires careful privacy and data retention considerations and may make users uncomfortable. It can also be used to inadvertently reinforce stereotypes. Ask yourself why you are collecting data, and, if you can, avoid it entirely.

### Use the correct type

Mobile devices and some assistive technologies adapt the software keyboard to the current task. This helps users with mobility, vision, and cognitive issues to enter information more easily.

If the field is for an email address, for instance, use `type="email"`; this will often enable a software keyboard with an `@` symbol more easily accessible.

### Order labels and help text correctly

Ensure the helper text that appears under an input is read when an assistive technology user stops at an input using ARIA.

### Each input should have a unique ID

Good news: Nautilus does this for you already! If you _do_ supply a custom `id`, `TextField` will detect this and assign things like the `<label>`'s `htmlFor` the correct value.

### Don't be prescriptive about names

Don't separate names into different inputs (e.g. "first name", "last name", etc.). [Not all cultures have the same sorts of naming conventions](https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/), and imposing your culture's naming scheme onto others can make it harder for users to enter their preferred name. Unless absolutely necessary, use a single "name" field.
