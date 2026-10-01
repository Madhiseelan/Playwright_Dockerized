# Nova Shop E2E

Playwright + TypeScript, Page Object Model, containerized.

## Run locally
    npm install
    npx playwright install --with-deps chromium
    npm test                 # headless
    npm run test:headed      # watch it run
    npm run report           # open HTML report

## Run in Docker (any machine with Docker)
    docker compose run --rm e2e
    # or
    docker build -t nova-shop-e2e . && docker run --rm --ipc=host nova-shop-e2e

Reports land in ./playwright-report and ./test-results (mounted volumes).

## Config
Copy `.env.example` to `.env` to override. Every value can also be passed as an env var (`-e BASE_URL=...`).

## Layout
    src/config/env.ts      environment + test users
    src/pages/             page objects
    src/fixtures/pages.ts  page objects injected as fixtures
    tests/                 specs
