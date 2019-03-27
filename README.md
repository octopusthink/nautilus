[![CircleCI](https://circleci.com/gh/wearethescenery/ether-system-react.svg?style=svg&circle-token=8482def59106e9768b0402426dcd6ef6a9aa3b60)](https://circleci.com/gh/wearethescenery/ether-system-react)

<a href="https://codeclimate.com/github/wearethescenery/ether-system-react/maintainability"><img src="https://api.codeclimate.com/v1/badges/a5d45be2a522c1a27ecb/maintainability" /></a>

**Demo**: [https://ether.thescenery.co/demo/](https://ether.thescenery.co/demo/)

# Ether: A Modular Base for Any Design System
[Ether](https://ether.thescenery.co) is not a design system&mdash;it's a base for any design system to be built upon. It follows [The Scenery's](https://thescenery.co/) opinionated structure on how a design system should be built, focusing on the ability to easily scale and expand over time.

The main three pillars of Ether include **Spacing**, **Color**, and **Typography**.

This project is meant to be a bootstrap of sorts to get your design system project off the ground. We use [Styleguidist](https://react-styleguidist.js.org/) to document the major aspects of Ether as well as to provide examples on how to implement these pillars inside of a design system.

`ether-system-react` is built and styled using `styled-components`. For more information, please see the [Styled Components](https://www.styled-components.com/) website.

## Structure
The meat of this project exists inside the `src` directory. The `src/base` folder holds variables which generate Spacing, Color, and Typography values. `src/components` houses sample components (with documentation and tests) showing how to implement our Ether values.

`styleguide-ui/` contains custom components for working with Styleguidist to display Ether values in an easy-to-understand fashion.

## How to Use
Currently, Ether is not an `npm` module. It's more of a how-to. Eventually, this will change as the project matures.

Even so, this project has build scripts so it can be `npm link`ed to any other project. Go ahead! Use Ether as a dependency. It works pretty dang well.

## Included Components, Utilities, and Libraries
As of this writing, the currently available components and tools are:

| Name | Category | Description
| --- | --- | --- |
| `Button` | component | A simple button component with multiple modes and sizes
| `Heading` | component | Typographic component to utilize the heading `fontStyle` values
| `Paragraph` | component | Typographic component to utilize the body `fontStyle` values
| `Spacer` | component | Layout component which utilizes the `spacer` values. Responsive too!
| `mediaQueries` | utility | object which outputs `styled-components` CSS `@media` wrappers generated from set breakpoints
| `spacerSizes` | library | object containing all spacer size values. Used by `Spacer`.
| `colors` | library | object containing core color values and names. Typically, these values aren't used directly. Please add them to `colorVariables` for use if needed.
| `colorVariables` | library | object containing variables mapped to color library values
| `fonts` | library | generated font family/style/weight CSS for use within `styled-components`
| `fontSizes` | library | generated font sizes from base values. Used in all Typography components. Responsive.
| `typography` | library | object containing all available font styles for use within Typography components. Outputs `styled-component` CSS. Responsive.

## A Note on Custom Fonts
While custom fonts are referenced in the styles and displayed inside Styleguidist, you must host your own fonts or add the custom font service CSS to your project to see custom fonts set in your Ether implementation. For example, Ether is using [Open Sans](https://fonts.google.com/specimen/Open+Sans) with weights **300**, **400**, and **700** from Google Fonts. Add the following CSS stylesheet link to your project to view the correct font:

```html
<head>
  ...
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700">
  ...
</head>
```

## Feedback
Take a look around. Provide feedback! Let us know what you think. Open a PR. Create an issue. Fork it to use for your own project! Ether is a work in progress that we use internally, so things will be improved over time.

## Setup
**Note**: `node 10.15.1` is recommended and an `.nvmrc` file is included for those using `nvm`.

* `npm i` will install all dependencies

## Development

* `npm start` will run React Styleguidist at [localhost:6060](http://localhost:6060)
* `npm test` to run `jest`

## Build
* `npm build` will compile components into the `lib/` directory.
* `npm run styleguide:build` will create a static version for serving inside the `demo/` directory

## External Use
* `npm link ../path/to/ether-system-react` from your project directory to link to a local copy of `ether-system-react`.
```jsx
// import individual components and libraries like so
import { Button, Heading, Spacer, colors, colorVariables } from 'ether-system-react';

// core variables are exported for use externally JUST IN CASE
console.log(colors.yellow);
console.log(colorVariables.semantic.danger);

return (
  <Button>Hello, there!</Button>
);
```
