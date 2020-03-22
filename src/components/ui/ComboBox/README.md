A ComboBox is a selection control that allows a user to choose from a list of options. Depending on the parameters passed...


```jsx

<ComboBox label="Choose your favourite fruit" placeholder="Search or browse">
    <ComboBox.Option>Apples</ComboBox.Option>
    <ComboBox.Option>Bananas</ComboBox.Option>
    <ComboBox.Option>Pears</ComboBox.Option>
    <ComboBox.Option>Tarantulas</ComboBox.Option>
</ComboBox>
```


```jsx

<ComboBox label="Select your favourite boy band" placeholder="Search or browse">

    <ComboBox.Heading>Girls like boys best</ComboBox.Heading>
    <ComboBox.Option>Boyz II Men</ComboBox.Option>
    <ComboBox.Option>The Backstreet Boys</ComboBox.Option>
    <ComboBox.Option>The Beach Boys</ComboBox.Option>
    <ComboBox.Option>Boys 4 Now</ComboBox.Option>

    <ComboBox.Heading>Strange punctuation</ComboBox.Heading>
    <ComboBox.Option>*NSYNC</ComboBox.Option>
    <ComboBox.Option>O-Town</ComboBox.Option>

    <ComboBox.Heading>By Numbers</ComboBox.Heading>
    <ComboBox.Option>All-4-One</ComboBox.Option>
    <ComboBox.Option>Boyz 4 Now</ComboBox.Option>
    <ComboBox.Option>B2K</ComboBox.Option>
    <ComboBox.Option>5ive</ComboBox.Option>
    <ComboBox.Option>2gether</ComboBox.Option>
    <ComboBox.Option>98 Degrees</ComboBox.Option>
    <ComboBox.Option>Boyz II Men</ComboBox.Option>
    <ComboBox.Option>One Direction</ComboBox.Option>
    <ComboBox.Option>The Jackson 5</ComboBox.Option>
    <ComboBox.Option>112</ComboBox.Option>
    
</ComboBox>
```

basically an HTML `select` on steroids. 

A combo box combines a text field with a pull-down button in a single control. The user can enter a custom value into the field or click the button to choose from a list of predefined values. When the user enters a custom value, it’s not added to the list of choices.

```jsx
<ComboBox label="Which house should the hat sort you into? 🧙‍♂️" placeholder="Search or browse">
    <ComboBox.Option>Gryffindor</ComboBox.Option>
    <ComboBox.Option>Ravenclaw</ComboBox.Option>
    <ComboBox.Option>Slytherin</ComboBox.Option>
    <ComboBox.Option>Hufflepuff</ComboBox.Option>
</ComboBox>
```

