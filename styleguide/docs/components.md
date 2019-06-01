All of our components:

```jsx noeditor
import loadComponents from '../load-components';
const components = Object.keys(loadComponents).map((name) => {
	const Component = loadComponents[name];
	const normalisedName = name.replace(/\/index$/g, '');

	return (
		<li key={name}>
			<a href={`#/🛠%20Function/Components/${normalisedName}`}>
				<code>&lt;{normalisedName} /&gt;</code>
			</a>
		</li>
	);
});

<ul>{components}</ul>;
```
