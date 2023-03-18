A snackbar is a non-disruptive message that appears to provide feedback to the user.

```jsx
import { Button } from '@octopusthink/nautilus';
<div>
    <div style={{position: 'relative', border: '1px solid white' }}>
        <Snackbar>This just in: Scotland is rainy</Snackbar>
    </div>
    <div style={{position: 'relative', border: '1px solid white' }}>
        <Snackbar action="#" actionLabel="Enable sunshine" onDismiss="#">This just in: Scotland is rainy</Snackbar>
    </div>
    <div style={{position: 'relative', border: '1px solid white' }}>
        <Snackbar inverse action="#" actionLabel="Enable sunshine" onDismiss="#">This just in: Scotland is rainy and sometimes it has some real long text strings too</Snackbar>
    </div>
    <div style={{position: 'relative', border: '1px solid white' }}>
        <Snackbar inverse action="#" actionLabel="Enable sunshine and also this can be hella long too if you want" onDismiss="#">This just in: Scotland is rainy and sometimes it has some real long text strings too</Snackbar>
    </div>
</div>
```
