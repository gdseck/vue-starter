# vue-starter

An opinionated Vue boilerplate app. Setup with vue-cli, typescript, quasar, postcss, tailwind and prettier.

## Usage

Click "Use this template" to copy the setup and clone the repo. Click [here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) for more info on github templates.

This repo requires the latest version of [vue-cli](https://cli.vuejs.org/guide/installation.html) to be installed globally.

Run `yarn serve` to serve the app and `yarn build` to build it.

## Setup

The base setup was generated with vue-cli. Use this to keep underlying dependencies up to date.

The project was set up with the following dependencies:

**eslint**

**typescript**

- utility types: [@piotrwitek/utility-types](https://github.com/piotrwitek/utility-types)
- [optional chaining](https://babeljs.io/docs/en/next/babel-plugin-syntax-optional-chaining.html)
- [nullish coalescing](https://babeljs.io/docs/en/next/babel-plugin-syntax-nullish-coalescing-operator.html)

**lodash**

- With `lodash/fp` eslint support

**tailwindcss** ([site](https://tailwindcss.com/docs/installation/))

**postcss**

- Contains `import`, `nested`, `url` and `autoprefixer` plugins
- With [purgecss](https://purgecss.com/)

**Quasar framework** ([site](https://quasar.dev/start/how-to-use-vue))

- Installed as vue-cli plugin
