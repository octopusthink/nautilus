### Best practises

Use as short a label as possible to communicate meaning.
Labels should use sentence case. (Press me)
Use prominence to carefully highlight the most important actions a user can take.
Use icons to convey additional meaning, when appropriate.


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

Sometimes, you need a button that's actually a link. We got you!

In these cases, we can use the same element, but apply ever-so-slightly-different styling to indicate the behaviour isn't exactly the same.

```js
<React.Fragment>
	<Button behaviour="navigation">Navigation</Button>
	<Button prominence="minimal" behaviour="navigation">Minimal navigation</Button>
	<Button behavior="action">Action</Button>
</React.Fragment>
```

### Danger Button
```js
<Button mode="danger">Button</Button>
```

### Success Button
```js
<Button mode="success">Button</Button>
```
