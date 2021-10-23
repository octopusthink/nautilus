A Checkbox allows users to toggle a selection. It can be used to select one or more items from a list, or to provide users a "toggle" to change a boolean setting in an app.

```jsx
<Checkbox defaultChecked>Lions</Checkbox>
<Checkbox>Tigers</Checkbox>
<Checkbox>Bears</Checkbox>
<Checkbox defaultChecked>Oh my!</Checkbox>
```

## Usage

Use this component when users need to select a one or more items from a list of options in a form/input screen before submitting that info.

A checkbox can also be used as a "toggle"—clicking it will instantly toggle a setting between on/off.

## Appearance

Checkboxes traditionally appear with the checkbox first, then the text of the checkbox. Don't override this behaviour—if you want left-aligned text and right-align checkboxes, use a `Toggle` component instead.

Disabled components will appear using your theme's "disabled" colours:

```jsx
<Checkbox disabled>I am not active</Checkbox>
<Checkbox checked disabled>Neither am I, even though I'm checked</Checkbox>
```

## Interaction

A checkbox can be disabled, which will visually signify that it is not available to the user, and will also disable any attached event handlers. If you want to attach event handlers to a disabled `Checkbox`, you'll need to attach it to a parent container component.

```jsx
<Checkbox onClick={() => alert('I have been clicked.')}>I am active</Checkbox>
<Checkbox disabled onClick={() => alert('This code will not fire.')}>I am not active</Checkbox>
```

## Voice & Tone

TBD

## Accessibility

Checkboxes must always have a label. Whatever is supplied as the `children` prop of a `Checkbox` will be used as its `<label>`:

```jsx
<Checkbox>I am the label</Checkbox>
```
