# Nautilus

An open-source design system optimised for accessibility, quality, and flexibility. Built for the web.

https://nautilus.octopusthink.com/

## Usage ⌨️

Want to use Nautilus in your next web app? Well: tough! It's much too early and it's nowhere near ready for production usage. Check back later. 😅

You can _technically_ install it from NPM, but you can't say we didn't warn you!

```bash
npm install @octopusthink/nautilus
```

## Development 🛠

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
* Ether
* Carbon
* Polaris
* Material Design
* Inclusive Components
