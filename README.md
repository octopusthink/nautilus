# Nautilus Design System

Nautilus is an open-source design system and component library to help designers and developers build better digital products together. ❤️

- Designed for accessibility and usability.
- Flexible theming and customisation.
- Clear guidelines and extensive documentation.
- Focused on consistency, ease of use, and scalability.

Nautilus is available both as a Sketch library and an `npm` package for use in React projects.

https://nautilus.octopusthink.com/

## Project status

Nautilus is currently pre-pre-pre-beta software. You can feel free to use it in your projects, but be warned that the API is likely to change and things may work in unexpected ways.

Point releases are distributed to `npm` on the 5th of every month. You can see our near-term plans and upcoming components in the Project tab.

- Design principles & guidelines (in progress)
- Design tokens (in progress)
- Accessible React components (in progress)
- React Native components (planned)
- Sketch library (in progress)
- Figma library (planned)
- Brand tokens and themeability (planned)
- Automated theme generation (planned)


## Usage

Want to use Nautilus in your next web app? Well: tough! It's much too early and it's nowhere near ready for production usage. Check back later. 😅

You can _technically_ install it from NPM, but you can't say we didn't warn you!

```bash
npm install @octopusthink/nautilus
```

## Development

Want to contribute to Nautilus, or test it locally? Here's how!

### Prerequisites

- `node` (LTS)
- `npm`

### Installing

Clone the repo:

```
git clone https://github.com/octopusthink/nautilus.git
```

Navigate into the directory:

```
cd nautilus
```

Install the dependencies:

```
npm install
```

And use `npm` to compile files, watch for changes, and build the styleguide:

`npm start`

This will start a server for the styleguide at http://localhost:6060/ and watch for any changes.

You'll need to restart `npm` if you make changes to `styleguide.config.js`, but otherwise you should be good to go!

## Running the tests

We use `jest` to run our unit tests. If you've made changes, `jest` will only run tests on files related to your changes:

```
npm test
```

### Linting

We lint our code using `eslint` and `prettier`. You can check your changes for linting violations with:

```
npm run lint
```

## Built With

* [React](https://reactjs.org/) - Making JavaScript simultaneously modern and also more like HTML since 1998.
* [React Styleguidist](https://react-styleguidist.js.org) - Running the styleguide.

## Contributing

Please read (`CONTRIBUTING.md`) for details on our code of conduct and the process for submitting pull requests.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [releases page](https://github.com/octopusthink/nautilus/releases).

## Authors

* **sarah semark** - *CDO (Chief Design Octopus)* - [@sarahmonster](https://github.com/sarahmonster)
* **Matthew Riley MacPherson** - *CTO (Chief Technical Octopus)* - [@tofumatt](https://github.com/tofumatt)

See also the list of [contributors](https://github.com/octopusthink/nautilus/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

Nautilus has been heavily inspired by, and borrows from:
* [Ether](https://ether.thescenery.co/)
* [GOV.UK Design System](https://design-system.service.gov.uk/)
* [Carbon](https://www.carbondesignsystem.com)
* [Polaris](https://polaris.shopify.com)
* [Material Design](https://material.io/design/)
* [Inclusive Components](https://inclusive-components.design/)
