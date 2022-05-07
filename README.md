# npm-to-yarn

[![npm](https://img.shields.io/npm/v/@armano/npm-to-yarn)](https://www.npmjs.com/package/@armano/npm-to-yarn)
[![CI](https://github.com/armano2/npm-to-yarn/actions/workflows/ci.yml/badge.svg)](https://github.com/armano2/npm-to-yarn/actions/workflows/ci.yml)
![NPM](https://img.shields.io/npm/l/@armano/npm-to-yarn)

**Summary**

`npm-to-yarn` is designed to convert NPM CLI commands to their Yarn equivalents (and vice versa).

## Why `npm-to-yarn`?

`npm-to-yarn` is super helpful in documentation, for example in generating code tabs.

## 📜 Docs

```js
import convert from 'npm-to-yarn'

// or
// var convert = require('npm-to-yarn')

convert('npm install squirrelly', 'yarn')

// yarn add squirrelly
```

`npm-to-yarn` exposes a commonjs build

### API

```ts
/**
 * Converts yarn to npm command
 */
export function convertToNpm(str: string): string;

/**
 * Converts npm to yarn command
 */
export function convertToYarn(str: string): string;

/**
 * Converts between npm and yarn command
 */
export default function convert(str: string, to: 'npm' | 'yarn'): string;
```

## ✔️ Tests

Tests can be run with `npm test`. Multiple tests check that parsing, rendering, and compiling return expected results, formatting follows guidelines, and code coverage is at the expected level.

## Resources

To be added

## Projects using `npm-to-yarn`

- [Dynamoose](https://dynamoosejs.com)
- [Docusaurus](https://docusaurus.io)

## Contributors

Made with ❤ by [@nebrelbug](https://github.com/nebrelbug) and all these wonderful contributors ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->


<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind are welcome!
