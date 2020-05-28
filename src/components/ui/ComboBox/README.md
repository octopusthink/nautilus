A ComboBox allows users to select a single item from a pre-defined list of options. In addition to showing a list of suggestions, it also provides selectable suggestions as the user types into it and optionally allows for adding a new item. This allows users to quickly search and select from a long list of options.

Think of it as a native HTML `select` element combined with an autocomplete.

```jsx
<ComboBox label="Choose your favourite fruit" placeholder="Search or browse">
    <ComboBox.Option text="Apples" />
    <ComboBox.Option text="Bananas" />
    <ComboBox.Option text="Pears" />
    <ComboBox.Option text="Tarantulas" />
</ComboBox>
```

## Usage

Use this component when users need to select a single item from a list of three or more options.

Don't use this component for:

- Selecting from a list of fewer than three items. Use a `Radio` or `Toggle` instead.
- Selecting multiple items at once. Use a `CheckBox` instead.
- Entering a custom text value. Use a `TextField` instead.

## Appearance

A ComboBox uses a `TextField` under the hood, and as such inherits much of its appearance. This ensures that the ComboBox will work seamlessly in a form beside `TextFields` and other components.

Like a `TextField`, it should always make use of a succinct label and can optionally show a hint as well.

### Ordering list items

List items should be ordered in a way that's logical and expected for the type of content. Some options:

- Order items by frequency of use. This is a good tactic when users might not know what they're looking for—put the most likely items earlier in the list, so that users can move to the next task as quickly as possible.
- Alphabetical order. This is especially useful when users are likely to know what they're looking for in advance (ie, a country list.), so they can easily scroll through through the results looking for a particular letter.

### Headings

When you have very long lists, it can be helpful to break them up into groups or categories. This helps users who are browsing the list to skip sections that aren't relevant. Avoid potentially confusing groupings (such as continents for a list of countries) where there's a change of causing confusion or exclusion.

```jsx
<ComboBox label="Select your favourite boy band" placeholder="Search or browse" optionHeight={3}>
    <ComboBox.Heading>Girls like boys best</ComboBox.Heading>
    <ComboBox.Option text="Boyz II Men" />
    <ComboBox.Option text="The Backstreet Boys" />
    <ComboBox.Option text="The Beach Boys" />
    <ComboBox.Option text="Boys 4 Now" />

    <ComboBox.Heading>Strange punctuation</ComboBox.Heading>
    <ComboBox.Option text="*NSYNC" />
    <ComboBox.Option text="O-Town" />

    <ComboBox.Heading>By Numbers</ComboBox.Heading>
    <ComboBox.Option text="All-4-One" />
    <ComboBox.Option text="Boyz 4 Now" />
    <ComboBox.Option text="B2K" />
    <ComboBox.Option text="5ive" />
    <ComboBox.Option text="2gether" />
    <ComboBox.Option text="98 Degrees" />
    <ComboBox.Option text="Boyz II Men" />
    <ComboBox.Option text="One Direction" />
    <ComboBox.Option text="The Jackson 5" />
    <ComboBox.Option text="112" />
</ComboBox>
```

When filtering a list by search term, the headings will disappear if all items beneath that heading are also hidden.

## Interaction

### Default values

Where appropriate, populate the field with a meaningful default value from the list. This doesn't need to be the first item in the list, but it should be the most likely selection, and it should allude to the other choices that are hidden.

Be careful setting a default value that isn't likely to apply to the majority of users. In this case, it's best not to include a default at all, and allow users to choose.

### Autocomplete (in progress)

By default, autocomplete is enabled for ComboBox components. This makes it easier for users to find the option they're looking for from a long or complex list of options. You can disable autocomplete, but that's only recommended for short lists (under seven items). It's generally best to leave enabled, since this allows users to choose the interaction method they're most comfortable with.

The search functionality returns all results, using fuzzy matching. This ensures that users can enter only part of a search term and still find the result they're looking for. For instance, searching a country list for "UK" or "U.A.E" should return "United Kingdom" and "United Arab Emirates", respectively, and "Arab" should return both "Saudi Arabia" and "United Arab Emirates".

### Adding new items (in progress)

If a user can't find the result they're looking for, they should be able to add a new item directly from the ComboBox component if the datasource allows for user editing. This option should be the last item in the list and should always be visible. When the user has entered a search string, update the text in the label to refer to the entered text (eg: "Create new *item* "search term").

It's best if users can add the new item immediately, with a single action, by selecting the item from the list. If necessary, you can open a secondary interface to collect additional information, but keep in mind that this increases the complexity of your interface. It's best to provide sensible defaults and allow users to edit them as a separate task. Only use a secondary interface when it's absolutely critical to collect this information immediately.

## Voice & Tone

Follow the `TextField` [guidelines](../TextField) for voice & tone. Additionally:

- Make sure list items aren’t wider than the text field. If an item is too wide, it will span two lines, which looks awkward and can be hard to parse. Keep things succinct.

```jsx
<ComboBox noAutocomplete label="Which house should the hat sort you into? 🧙‍♂️" placeholder="Select">
    <ComboBox.Option text="Gryffindor">🧙🏾‍♂️ Gryffindor</ComboBox.Option>
    <ComboBox.Option text="Ravenclaw">🦞 Ravenclaw</ComboBox.Option>
    <ComboBox.Option text="Slytherin">🐍 Slytherin</ComboBox.Option>
    <ComboBox.Option text="Hufflepuff">💨 Hufflepuff</ComboBox.Option>
</ComboBox>
```

## Accessibility

The ComboBox component is based on the [ARIA 1.1 Combo Box pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#combobox). It should follow these rules for keyboard interactions:

- Give the autocomplete text input keyboard focus with the `tab` key (or  `shift`+ `return`  when tabbing backwards).
- Access the list of options with the up and down arrow keys.
- Select an option that has focus with the `return` key.
