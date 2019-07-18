`Nautilus` is the base component (eg. the _higher-order component_ or _HOC_) used to inject the Nautilus Design System into your app. It accepts a `theme` prop used to customise your Nautilus components, as well as injecting some sane default styles into your app. Your "root" components should be wrapped in the `<Nautilus>` component; any of your components that use a Nautilus component will need to be wrapped in a `<Nautilus>` component.

`Nautilus` also accepts a `LinkComponent` prop that can be used to customise the default `Link` component used by Nautilus' `Link` component:

```jsx
import { Link } from '@reach/router';

<Nautilus LinkComponent={Link}>
  <Link to="/somewhere/">I'm a custom link!</Link>
</Nautilus>
```
