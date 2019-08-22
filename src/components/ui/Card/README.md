A card is used to represent a descrete and self-contained piece of data, typically as part of a feed or series of related datum.

```jsx
import { Paragraph, Button, Heading, Tags, Icon } from '@octopusthink/nautilus';

<React.Fragment>
  <Card title="Cards can be super simple">
    <Icon name="star" />
    <Heading level={1}>Cards should always have a title</Heading>
    <Paragraph small>The Card can either have a title attribute, or you can pass it a heading. Not sure which is the best approach here.</Paragraph>
    <Button>Choose this</Button>
    <Button minimal navigation>Learn more</Button>
  </Card>

  <Card title="Cards can be super simple">
    <Heading level={2}>Cards should always have a title</Heading>
    <Paragraph>The Card can either have a title attribute, or you can pass it a heading. Not sure which is the best approach here.</Paragraph>
  </Card>

  <Card title="Cards can be super simple">
    <Heading level={3}>Cards should always have a title</Heading>
    <Paragraph large>The Card can either have a title attribute, or you can pass it a heading. Not sure which is the best approach here.</Paragraph>
  </Card>
</React.Fragment>
```

```jsx
import { Paragraph } from '@octopusthink/nautilus';

<Card
  orientation="landscape"
  title="Fish & Chips & Vinegar"
  metadata="Places I like to visit"
  media="http://placekitten.com/400/800"
>
  <Paragraph size="small">
    By default, cards use a landscape orientation, but can also be swapped around.
    All content is optional.
  </Paragraph>
</Card>
```

```jsx
import { Paragraph } from '@octopusthink/nautilus';

<Card
  orientation="portrait"
  title="A card can go both ways"
  metadata="Horizontal, or vertical?"
  media="http://placekitten.com/800/400"
>
  <Paragraph size="medium">
    Dis convallis taciti molestie cum etiam mollis facilisis ligula ultricies, accumsan mattis phasellus malesuada in sollicitudin pulvinar quis, turpis pretium purus mi enim suspendisse nisl dolor. Egestas diam mollis bibendum integer est volutpat, quisque posuere cras eu. Eros enim maecenas tellus semper torquent platea pulvinar vulputate fermentum laoreet consequat vel purus, vitae rhoncus est sollicitudin lacus pretium id montes blandit phasellus nullam cras.
  </Paragraph>
</Card>
```

```jsx
import { Paragraph, Button, Heading, Tags, Icon } from '@octopusthink/nautilus';

<Card orientation="landscape">
  {/*
  <Card.Header>
    <img src="http://placekitten.com/400/800" />
    <Heading>Fish & Chips & Vinegar</Heading>
    <Tags><Tags.Tag>Places I like to visit</Tags.Tag></Tags>
  </Card.Header>
  */}

  <Paragraph size="small">
    By default, cards use a landscape orientation, but can also be
    swapped around. All content is optional.
  </Paragraph>

  {/*
  <Card.Footer>
    <Button>Learn more</Button>
    <Button minimal>Hide this</Button>
  </Card.Footer>
  */}
</Card>
```
