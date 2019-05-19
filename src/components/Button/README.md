Use a button any time the user should complete an action.

```js
const onClick = (event) => {
	window.alert('🚨 Alarm sounded! 🚨');
};
<Button onClick={onClick}>Sound the alarm!</Button>;
```

## Best practises

- Keep labels as **short** as possible.
- Labels should use **sentence case**, not title case. (_Press me_, not _Press Me_.)
- Use prominence to **highlight the most important action** a user can take.
- **Use icons** to convey additional meaning, when appropriate.

## Properties

### Prominence

**Options:** primary, default, minimal **Changes:** styling (border and background)

Buttons have three levels of prominence. The majority of buttons should use the default styling. Use a primary button to draw attention to the most important action on the page. Don't use more than one primary button on a page. Minimal buttons are good when you don't want to draw too much attention to a button.

```js
<React.Fragment>
	<Button primary>Sign up now</Button>
	<Button>Sign up sometime</Button>
	<Button minimal>Sign up eventually</Button>
</React.Fragment>
```

### Behaviour

**Options:** navigation, action **Changes:** Adds an arrow to indicate semantics.

Sometimes, you need a button that's actually a link. We got you!

In these cases, we can use the same element, but apply ever-so-slightly-different styling to indicate the behaviour isn't exactly the same.

```js
<Button href="https://twitter.com/KittenBreak" navigation target="_blank">
	Take a break
</Button>

<Button href="https://twitter.com/KittenBreak" navigation primary>
	Take a break
</Button>

<Button href="https://twitter.com/KittenBreak" navigation minimal>
	Take a break
</Button>
```

### Intent

**Options:** success, warning, danger, none **Changes:** colour

Sometimes, you need a button to communicate the choices it's offering up more clearly. In these cases, you may want to declare the _intent_ of the button. This uses colour (and an icon, to ensure colour isn't the sole indicator of meaning)

### State

**Options:** active, hover, focussed, disabled, default **Changes:** styling

```js
<React.Fragment>
	<Button primary>Active</Button>
	<Button>Hover</Button>
	<Button minimal>Focus</Button>
</React.Fragment>
```

```js
<React.Fragment>
	<Button primary disabled>
		Disabled primary
	</Button>
	<Button disabled>Disabled</Button>
	<Button minimal disabled>
		Minimal disabled
	</Button>
</React.Fragment>
```

What's my button up to? State will tell you!

## Future improvements

- [ ] Button can include icons + text, just text, or just icons
- [ ] Icon can go before or after text
- [ ] Include icons in button intent
- [ ] Split buttons?
- [ ] Busy button (maybe just reuse active state)
- [ ] Include an icon in active styling (spinner?)
