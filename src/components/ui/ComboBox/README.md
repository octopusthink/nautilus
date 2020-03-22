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
    <ComboBox.Heading>From the 80s</ComboBox.Heading>
    <ComboBox.Option>Wham!</ComboBox.Option>
    <ComboBox.Option>New Kids on the Block</ComboBox.Option>
    <ComboBox.Option>Bell Biv DeVoe</ComboBox.Option>
    <ComboBox.Heading>From the 90s</ComboBox.Heading>
    <ComboBox.Option>All 4 One</ComboBox.Option>
    <ComboBox.Option>NSYNC</ComboBox.Option>
    <ComboBox.Heading>From the 2000s</ComboBox.Heading>
    <ComboBox.Option>Boyz 4 Now</ComboBox.Option>
    
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

