`<Tabs>` are a collection of related elements of equal weight, presented in an itemised fashion.

Use the `<Tabs.Tab>` component for each item in your list.

```jsx
import { Paragraph } from '@octopusthink/nautilus';

<Tabs>
	<Tabs.Tab label="About">
		<Paragraph>Puppies are cute.</Paragraph>
	</Tabs.Tab>

	<Tabs.Tab label="History">
		<Paragraph>Puppies have already been cute.</Paragraph>
	</Tabs.Tab>

	<Tabs.Tab label="Learn more">
		<Paragraph>Have you seen the <a href="https://www.vox.com/culture/2017/2/4/14480722/puppy-bowl-explained">Puppy Bowl</a>?</Paragraph>
	</Tabs.Tab>
</Tabs>
```
