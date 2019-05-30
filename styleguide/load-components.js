// load-components.js
const componentsContext = require.context(
  'components/',
  true,
  /[A-Z]*\/index\.js$/,
);

export default componentsContext.keys().reduce((components, file) => {
  const Component = componentsContext(file).default;
  const label = file.slice(2, -3); // strip './' and '.js'
  if (label === 'index') {
    return { ...components };
  }
  return { ...components, [label]: Component };
}, {});
