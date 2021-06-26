A Select allows users to select a single item or multiple items from a pre-defined list of options. In addition to showing a list of suggestions, it also provides selectable suggestions as the user types into it and optionally allows for adding a new item. This allows users to quickly search and select from a long list of options.

Think of it as a native HTML `select` element combined with an autocomplete.

```jsx
import { TextField } from '@octopusthink/nautilus'
import React from 'react'

const tags = [
  {
    label: 'Ducati',
    value: {
      backendId: 1,
      id: 1,
      tagInfo: { fast: true, fun: true, boring: false },
      type: 'bike'
    }
  },
  {
    label: 'Honda',
    value: {
      backendId: 1,
      id: 2,
      tagInfo: { fast: false, fun: true, boring: true },
      type: 'bike'
    }
  },
  {
    label: 'Yamaha',
    value: {
      backendId: 1,
      id: 3,
      tagInfo: { fast: true, fun: true, boring: true },
      type: 'bike'
    }
  },
  {
    label: 'Ural',
    value: {
      backendId: 1,
      id: 4,
      tagInfo: { fast: false, fun: true, boring: false },
      type: 'sidecar'
    }
  }
]

;<React.Fragment>
  <Select
    label="Pick your favourite curry"
    options={[
      { label: 'Chicken', value: 1 },
      { label: 'Lamb', value: 2 },
      { label: 'Veg', value: 3 }
    ]}
    placeholder="All are delicious"
  />

  <Select
    closeMenuOnSelect={false}
    label="Motorcycle Maker"
    isClearable
    isMulti
    options={[{ label: 'Select your bikes', options: tags }]}
    placeholder="Search or browse"
  />

  <Select label="Select from this empty list" placeholder="Search or browse" />

  <TextField label="A TextField for comparison" />
</React.Fragment>
```

## Usage

TBD

## Appearance

A Select comes in two variants: multi-select and single-select. A single-select allows only a single selection from the list (for example, choosing your country of residence or native language) whilst a multi-select allows for selecting more than one option (for example, choosing all countries you've visited or all languages you speak). Multi-selects style the options as tags, whereas single selects are styled as pieces of text. The interaction mechanism is also slightly different between these two options, to better shape user expectations.

Select also uses the generic CSS helper class `Nautilus-DropdownListItem`, also used in Combobox. This helper class is used anywhere where a dropdown list of items is available to choose from in order to allow for more flexible styling.

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
