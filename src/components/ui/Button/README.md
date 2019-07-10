A button indicates that a user can complete an action or make a choice, using a single click or tap. They are used for submitting forms, navigating to new pages, as well as toolbars and utilities.

```jsx
const onClick = (event) => {
  window.alert('🚨 Alarm sounded! 🚨');
};
<Button onClick={onClick}>Sound the alarm!</Button>;
```

## Best practises

### Labels

- Keep labels as **short** and direct as possible. Omit articles and unnecessary words wherever possible.
- Use an **active verb + noun** form. (_Reserve table_, _Delete page_, etc.) In some cases, a verb alone may suffice. (_Save_, _Okay_, _Cancel_.)
- Labels should use **sentence case**, not title case. (_Press me_, not _Press Me_.)
- **Use icons** to convey additional meaning, when appropriate. For important actions, including both text and an icon is a good way to reinforce meaning.

### Prominence

- Only use a single **primary** button per screen.
- Use prominence to **highlight the most important action** a user can take.
- When using two or more buttons together, try to use different prominence levels to guide users to the most likely actions.

### Placement

- When buttons are used in a form, they should **always be placed after inputs**, both visually and in the DOM order.
- When using two or more buttons together, don't stack them unless there isn't enough space to align them side-by-side.

## Properties

### Prominence

**Options:** primary, default, minimal

**Changes:** styling (border and background)

Buttons have three levels of prominence. The majority of buttons should use the **default styling**.

Use a primary button to draw attention to the most important action on the page. Don't use more than one primary button on a page.

Minimal buttons are good when you don't want to draw too much attention to a button. Use them for secondary actions.

```jsx
<Button primary>Sign up now</Button>
<Button>Sign up sometime</Button>
<Button minimal>Sign up eventually</Button>
```

### Behaviour

**Options:** navigation, action

**Changes:** Adds an arrow to indicate semantics.

Sometimes, you need a button that's actually a link. (Maybe you want a call-to-action, or a link that's more prominent than a plain-text link.) We got you!

Wait, what's the difference, you ask?

A **button** completes an action, like deleting an item, submitting a form, or changing part of the UI. A **link** navigates to a new page or site, refreshing the page.

A link loses focus and means the user needs to reorient themselves, but a button doesn't.

This is an important different for accessibility needs, but as single page web apps become more common, the difference often starts to blur. In order to keep things flexible, a Button can also act as a link. We add an arrow to the text to indicate that the behaviour won't be exactly the same, and we use an `<a>` tag so screenreaders know what to expect as well.

```jsx
<Button navigation to="https://twitter.com/KittenBreak" useHref>
  Take a break
</Button>

<Button navigation primary to="https://twitter.com/KittenBreak" useHref>
  Take a break
</Button>

<Button navigation minimal to="https://twitter.com/KittenBreak" useHref>
  Take a break
</Button>
```

### Intent

**Options:** success, warning, danger, none

**Changes:** colour

Sometimes, you need a button to communicate the choices it's offering up more clearly. In these cases, you may want to declare the _intent_ of the button. This uses colour and an icon to indicate the messaging.

Use a danger button any time you have a destructive action, like deleting something.

```jsx
<Button primary success>
  Nobel Peace Prize
</Button>
<Button success>Got a new job</Button>
<Button minimal success>
  Woke up on time
</Button>
```

```jsx
<Button primary warning>
  Trump 4 prez
</Button>

<Button warning>Look out!</Button>

<Button minimal warning>
  Pothole in the road
</Button>
```

```jsx
<Button primary danger>
  Scorpion in your swimsuit
</Button>

<Button danger>Snakes on a plane</Button>

<Button minimal danger>
  Spider in the kitchen
</Button>
```

### State

**Options:** active, hover, focussed, disabled, default

**Changes:** styling

```jsx
<Button primary>Active</Button>
<Button>Hover</Button>
<Button minimal>Focus</Button>
```

```jsx
<Button primary disabled>
  Disabled primary
</Button>
<Button disabled>Disabled</Button>
<Button minimal disabled>
  Minimal disabled
</Button>
```

What's my button up to? State will tell you!
