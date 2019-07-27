`Nautilus` is the base component (eg. the _higher-order component_ or _HOC_) used to inject the Nautilus Design System into your app. It accepts a `theme` prop used to customise your Nautilus components, as well as injecting some sane default styles into your app. Your "root" components should be wrapped in the `<Nautilus>` component; any of your components that use a Nautilus component will need to be wrapped in a `<Nautilus>` component.

`Nautilus` also accepts a `config` prop that can be used to customise the behaviour of Nautilus. For instance, if you want to tweak the default `Link` component you should supply a config to Nautilus:

```jsx
import { Paragraph } from '@octopusthink/nautilus';
import { Link } from '@reach/router';

<Nautilus config={{ LinkComponent: Link }}>
  <Paragraph>
    <Link to="/somewhere/">I'm a custom link!</Link>
  </Paragraph>
</Nautilus>
```
