### Prominence

Buttons have three levels of prominence. The majority of buttons should use the default styling. Use a primary button to draw attention to the most important action on the page. Don't use more than one primary button on a page. Minimal buttons are good when you don't want to draw too much attention to a button.

```js
<React.Fragment>
	<Button prominence="primary">Primary</Button>
	<Button>Default</Button>
	<Button prominence="minimal">Minimal</Button>
</React.Fragment>
```




### Behaviour
```js
<Button behaviour="navigation">Button</Button>
```

### Danger Button
```js
<Button mode="danger">Button</Button>
```

### Success Button
```js
<Button mode="success">Button</Button>
```
