### Vertical Spacer
```js
<Spacer debug size="medium" />
```

### Horizontal Spacer
```js
const { Button } = require('../../input/Button/Button');
<span>
  <Button>Button 1</Button>
  <Spacer horizontal debug size="large" />
  <Button>Button 2</Button>
</span>
```

### Responsive Spacer
It's possible to add a `responsiveSizes` configuration object to change the size of the Spacer at different viewport sizes. Setting this value will override the `size` prop value.
```jsx static
const responsiveSizes = {
  xs: '2xsmall',
  sm: 'xlarge',
  lg: '2xlarge',
};

return (<Spacer responsiveSizes={responsiveSizes} />);
```
```js
<Spacer debug responsiveSizes={{ xs: '2xsmall', sm: 'xlarge', lg: '2xlarge' }} />
```
