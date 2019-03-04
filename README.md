# next.js-advanced-starter

A next.js starter setup with redux, typescript, fastify, styled-components, with built-in unit, end-to-end testing, and linting.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)

### Installing

```bash
$ git clone https://github.com/jdtzmn/nextjs-advanced-starter my-app
Cloning into my-app...
$ cd my-app
$ yarn # or npm install
yarn install v1.9.4
...
```

### Testing

Run the continuous integration tests locally:

```bash
$ yarn ci # this will start up the server and test both unit and end-to-end tests
```

## Built With

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/) — Already configured to be easily used with a custom server
  - [fastify](https://www.fastify.io/) — Web server
  - [next-routes](https://github.com/fridays/next-routes) — Dynamic routes
- [Jest](https://jestjs.io/) — Unit testing
  - [Enzyme](https://airbnb.io/enzyme/)
- [Redux](https://redux.js.org/) — State management
- [Styled Components](https://www.styled-components.com/) — For CSS
- [ESLint](https://eslint.org/) — TypeScript, JavaScript, and React linting
  - [Standard](https://standardjs.com/) — This can easily be changed if a different style is preferred
- [Cypress](https://www.cypress.io/) — End-to-end testing

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/jdtzmn/GannApp/tags).

## Authors

- **Jacob** - *Initial work* - [jdtzmn](https://github.com/jdtzmn)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Contributing

Contributions are welcome and greatly appreciated - see the [CONTRIBUTING.md](CONTRIBUTING.md) file for detials

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details