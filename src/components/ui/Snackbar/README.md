A snackbar is a non-disruptive message that appears to provide feedback to the user.

```jsx
import { Button } from '@octopusthink/nautilus';

<div>
    <Snackbar>This just in: Scotland is rainy</Snackbar>
    <Snackbar action="#" actionLabel="Enable sunshine" onDismiss="#">This just in: Scotland is rainy</Snackbar>
</div>
```
