# Playwright UI Tests

Simple Playwright and TypeScript UI automation for the [Practice Test Automation](https://practicetestautomation.com/practice-test-login/) login page.

## Project structure

```text
src/pages/       Page objects and reusable UI actions
tests/           Test specifications
playwright.config.ts
tsconfig.json
```

## Setup

```bash
npm install
npx playwright install chromium
```

## Run tests

```bash
npm test
npm run test:headed
npm run report
```

Set `BASE_URL` to point the suite at another environment:

```bash
BASE_URL=https://practicetestautomation.com npm test
```