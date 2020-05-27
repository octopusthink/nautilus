A button mimics a physical button to allow users to quickly trigger an action. They are used for submitting forms and navigating to new pages, as well as for toolbars and utilities.

```jsx
const onClick = (event) => {
  window.alert('🚨 Alarm sounded! 🚨');
};

<Button onClick={onClick}>Sound the alarm!</Button>;
```

## Usage

### Use a `Button` for…

Use a Button whenever you need users to be able to trigger an action or make a choice with a single tap or click.

### Don't use a `Button` for…

- A link that's intended to run inside a block of text. Use a `Link` instead.

## Appearance

### Labels

- Keep labels as **short** and direct as possible. Omit articles and unnecessary words wherever possible.
- Use an **active verb + noun** form. (_Reserve table_, _Delete page_, etc.) In some cases, a verb alone may suffice. (_Save_, _Okay_, _Cancel_.)
- Labels should use **sentence case**, not title case. (_Press me_, not _Press Me_.)

### Icons

For important actions, including both text and an icon can be a good way to reinforce meaning.

There are several different permutations of icon buttons available:

- **Leading Icon**: shows an icon before the text.
- **Trailing Icon**: shows an icon after the text.
- **Stacked Icon**: shows an icon with smaller text underneath. Useful for application toolbars.
- **Icon Only**: shows an icon only, in a rounded container. Useful in areas of limited space where the icon's meaning is very clear.

It's best to only use one icon per button.

```jsx
import { Flex } from 'nautilus-styleguide';
import React from 'react';

<React.Fragment>
  <Flex>
    <Button primary leadingIcon="star">
      Primary
    </Button>

    <Button leadingIcon="download">
      Leading
    </Button>

    <Button minimal leadingIcon="heart">
      Minimal
    </Button>
  </Flex>

  <Flex>
    <Button primary trailingIcon="download">
      Primary
    </Button>

    <Button trailingIcon="chevron-right">
      Trailing
    </Button>

    <Button minimal trailingIcon="arrow-right">
      Minimal
    </Button>
  </Flex>


  <Flex>
    <Button primary stackedIcon="search">
      Primary
    </Button>

    <Button stackedIcon="star">
      Stacked
    </Button>

    <Button minimal stackedIcon="search">
      Minimal
    </Button>
  </Flex>

  <Flex>
    <Button primary iconOnly="search">
      Primary
    </Button>

    <Button iconOnly="search">
      Only Icon
    </Button>

    <Button minimal iconOnly="search">
      Minimal
    </Button>
  </Flex>
</React.Fragment>
```

### Placement

- When buttons are used in a form, they should **always be placed after inputs**, both visually and in the DOM order.
- When using two or more buttons together, don't stack them unless there isn't enough space to align them side-by-side.

### Prominence

Buttons are available in three levels of prominence: primary, default, and minimal.

Use a primary button to draw attention to the most important action on a screen or container. Don't use more than one primary button in a single container.

Use a default button to indicate an action secondary to the primary button.

Use minimal buttons for secondary actions, or for pages that feature a lot of buttons that don't require additional emphasis. They work especially well as navigation buttons.

Default and minimal buttons can be paired with primary buttons to denote secondary actions.

```jsx
import { Flex } from 'nautilus-styleguide';

<Flex>
  <Button primary>Sign up now</Button>

  <Button>Sign up sometime</Button>

  <Button minimal>Sign up eventually</Button>
</Flex>
```

### Behaviour

Sometimes, you need a button that's actually a link. (Maybe you want a call-to-action, or a link that's more prominent than a plain-text link.) We got you!

Wait, what's the difference, you ask?

A **button** completes an action, like deleting an item, submitting a form, or changing part of the UI. A **link** navigates to a new page or site, refreshing the page.

A link loses focus and means the user needs to reorient themselves, but a button doesn't.

This is an important distinction for accessibility needs, but as single page web apps become more common, the difference often starts to blur. In order to keep things flexible, a Button can also act as a link. We add an arrow to the text to indicate that the behaviour won't be exactly the same, and we use an `<a>` tag so screen readers know what to expect as well.

```jsx
import { Flex } from 'nautilus-styleguide';

<Flex>
  <Button href="https://twitter.com/KittenBreak">
    Take a break
  </Button>

  <Button primary href="https://octopusthink.com/?pk_campaign=nautilus">
    A cool company
  </Button>

  <Button minimal href="https://getmicdrop.com/?pk_campaign=nautilus">
    Mute your mic
  </Button>
</Flex>
```

#### Navigation links

By default, navigation links point forward (right in LTR languages) to indicate a forward progression. Any links that navigate back in time or space (eg: a back link, previous pagination) should set the `navigationDirection` prop to `backward` to correctly communicate this direction.

If needed, you can pass a leading or trailing icon to the navigation button to override its default arrow icon. (You can also pass `null` as an icon to disable this navigation icon behaviour.)

```jsx
import { Flex } from 'nautilus-styleguide';

<Flex>
  <Button navigation href="https://twitter.com/KittenBreak">
    Go forward
  </Button>

  <Button navigation navigationDirection="backward" href="https://twitter.com/KittenBreak">
    Go back
  </Button>

  <Button navigation trailingIcon="arrow-up-right" href="https://twitter.com/KittenBreak">
    Go elsewhere
  </Button>
</Flex>
```

### Intent

Sometimes, you need a button to communicate the choices it's offering up more clearly. In these cases, you may want to declare the _intent_ of the button. This uses colour and an icon to indicate the messaging.

A success button is used to indicate a positive action, like confirming a choice.

```jsx
import { Flex } from 'nautilus-styleguide';

<Flex>
  <Button primary success>
    Nobel Peace Prize
  </Button>

  <Button success>Got a new job</Button>

  <Button minimal success>
    Woke up on time
  </Button>
</Flex>
```

Warning buttons are used to denote actions that aren't destructive, but affect many aspects of your app or affect unseen elements in the interface. Use these buttons to encourage users think carefully before they use them.

```jsx
import { Flex } from 'nautilus-styleguide';

<Flex>
  <Button primary warning>
    Trump 4 prez
  </Button>

  <Button warning>Look out!</Button>

  <Button minimal warning>
    Pothole in the road
  </Button>
</Flex>
```

Use a danger button any time you have a destructive action, like deleting something. Rather than requiring a confirmation of a destructive action (which users often ignore), consider surfacing a mechanism for undoing the destructive action after it's been completed.

```jsx
import { Flex } from 'nautilus-styleguide';

<Flex>
  <Button primary danger>
    Scorpion in swimsuit
  </Button>

  <Button danger>Snakes on plane</Button>

  <Button minimal danger>
    Spider in kitchen
  </Button>
</Flex>
```

### State

Buttons come with states to indicate the current status of the action being performed. This helps to inform users of the application's overall state and increases confidence in actions.

```jsx
import { Flex } from 'nautilus-styleguide';

<Flex>
  <Button primary>Active</Button>

  <Button>Hover</Button>

  <Button minimal>Focus</Button>
</Flex>
```

```jsx
import { Flex } from 'nautilus-styleguide';

<Flex>
  <Button primary disabled>
    Disabled primary
  </Button>

  <Button disabled>Disabled</Button>

  <Button minimal disabled>
    Minimal disabled
  </Button>
</Flex>
```
