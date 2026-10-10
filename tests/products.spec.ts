import { test } from '../src/fixtures/pages';
import { env } from '../src/config/env';

test.describe('Nova Shop - Products Page', () => {
  test('filter bar elements are visible on load @smoke', async ({ loginPage, productsPage }) => {
    const { username, password } = env.users.standard;

    await loginPage.open();
    await loginPage.login(username, password);
    await productsPage.expectLoaded();

    await productsPage.expectFilterBarVisible();
  });
});
