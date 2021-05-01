A Select allows users to select a single item or multiple items from a pre-defined list of options. In addition to showing a list of suggestions, it also provides selectable suggestions as the user types into it and optionally allows for adding a new item. This allows users to quickly search and select from a long list of options.

Think of it as a native HTML `select` element combined with an autocomplete.

```jsx
import { TextField } from '@octopusthink/nautilus'
import React from 'react'

const tags = [
  {
    label: 'Ducati',
    value: {
      backend: 'BACKENDS.FreeAgent',
      backendId: 1,
      id: 1,
      tagInfo: { fast: true, fun: true, boring: false },
      type: 'bike'
    }
  },
  {
    label: 'Honda',
    value: {
      backend: 'BACKENDS.FreeAgent',
      backendId: 1,
      id: 2,
      tagInfo: { fast: false, fun: true, boring: true },
      type: 'bike'
    }
  },
  {
    label: 'Yamaha',
    value: {
      backend: 'BACKENDS.FreeAgent',
      backendId: 1,
      id: 3,
      tagInfo: { fast: true, fun: true, boring: true },
      type: 'bike'
    }
  },
  {
    label: 'Ural',
    value: {
      backend: 'BACKENDS.FreeAgent',
      backendId: 1,
      id: 4,
      tagInfo: { fast: false, fun: true, boring: false },
      type: 'sidecar'
    }
  }
]

;<React.Fragment>
  <Select
    closeMenuOnSelect={false}
    label="Motorcycle Maker"
    isClearable
    isMulti
    options={[{ label: 'Select your bike', options: tags }]}
    placeholder="Search or browse"
  />

  <Select label="Select from this empty list" placeholder="Search or browse" />

  <TextField label="A TextField for comparison" />
</React.Fragment>
```

## Usage

TBD

## Appearance

TBD

### Ordering list items

TBD

### Headings

TBD

## Interaction

### Default values

TBD

### Autocomplete (in progress)

TBD

### Adding new items (in progress)

TBD

## Voice & Tone

TBD

## Accessibility

TBD
