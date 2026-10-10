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

### What happens when you run `docker compose run --rm e2e`

1. Docker reads `docker-compose.yml` to find the `e2e` service config
2. Builds the image from `Dockerfile` (pulls the Playwright base image if not cached, installs npm deps, copies files)
3. Starts the container with `ipc: host` and mounts the two volumes (`playwright-report`, `test-results`)
4. Loads `.env` if it exists
5. Runs `npx playwright test`
6. `--rm` removes the container after tests finish
7. Test results/reports are written to your local `playwright-report/` and `test-results/` folders via the volume mounts

Reports land in ./playwright-report and ./test-results (mounted volumes).

## Config
Copy `.env.example` to `.env` to override. Every value can also be passed as an env var (`-e BASE_URL=...`).

## Layout
    src/config/env.ts      environment + test users
    src/pages/             page objects
    src/fixtures/pages.ts  page objects injected as fixtures
    tests/                 specs
