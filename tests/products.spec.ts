import { test } from '../src/fixtures/pages';

test.describe('Nova Shop - Products Page', () => {
  test('filter bar elements are visible on load @smoke', async ({ productsPage }) => {
    await productsPage.open();

    await productsPage.expectFilterBarVisible();
  });
});
