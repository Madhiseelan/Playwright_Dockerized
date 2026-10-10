# Official Playwright image: browsers + OS deps preinstalled. Keep the tag in sync with @playwright/test.
FROM mcr.microsoft.com/playwright:v1.63.0-noble

# e2etestdir is the folder path inside the container where project files are copied to.
WORKDIR /e2etestdir
ENV CI=true

COPY package*.json ./
RUN npm install --no-audit --no-fund

COPY . .

CMD ["npx", "playwright", "test"]
