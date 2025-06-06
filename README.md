# portfolio-website

<div align="center">
  <img src="docs/images/2025-05-18_15-26.png" alt="Homepage Screenshot" width="300" />
  <img src="docs/images/2025-05-18_15-27.png" alt="About Section" width="300" />
  <img src="docs/images/2025-05-18_15-27_1.png" alt="Projects Section" width="300" />
</div>
<!-- ![Homepage Screenshot](docs/images/2025-05-18_15-26.png)
![About Section](docs/images/2025-05-18_15-27.png)
![Projects Section](docs/images/2025-05-18_15-27_1.png) -->

A personal portfolio built with **Vue 3**, **TypeScript**, and **TailwindCSS** to showcase projects, skills, and professional achievements.

---

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
