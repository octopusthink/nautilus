A ComboBox is a selection control that allows a user to choose from a list of options. Depending on the parameters passed...

```jsx
<ComboBox label="Choose your favourite fruit" placeholder="Search or browse">
    <ComboBox.Option text="Apples" />
    <ComboBox.Option text="Bananas" />
    <ComboBox.Option text="Pears" />
    <ComboBox.Option text="Tarantulas" />
</ComboBox>
```

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

basically an HTML `select` on steroids.

A combo box combines a text field with a pull-down button in a single control. The user can enter a custom value into the field or click the button to choose from a list of predefined values. When the user enters a custom value, it’s not added to the list of choices.

```jsx
<ComboBox noAutocomplete label="Which house should the hat sort you into? 🧙‍♂️" placeholder="Select">
    <ComboBox.Option text="Gryffindor">🧙🏾‍♂️ Gryffindor</ComboBox.Option>
    <ComboBox.Option text="Ravenclaw">🦞 Ravenclaw</ComboBox.Option>
    <ComboBox.Option text="Slytherin">🐍 Slytherin</ComboBox.Option>
    <ComboBox.Option text="Hufflepuff">💨 Hufflepuff</ComboBox.Option>
</ComboBox>
```
