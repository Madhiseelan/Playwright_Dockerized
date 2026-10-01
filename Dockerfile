# Official Playwright image: browsers + OS deps preinstalled. Keep the tag in sync with @playwright/test.
FROM mcr.microsoft.com/playwright:v1.63.0-noble

# e2e is a folder path inside the container. It's where the project files get copied to.
WORKDIR /e2e
ENV CI=true

COPY package*.json ./
RUN npm install --no-audit --no-fund

COPY . .

CMD ["npx", "playwright", "test"]
