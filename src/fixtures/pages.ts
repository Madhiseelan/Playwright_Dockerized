import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

type Pages = { loginPage: LoginPage; productsPage: ProductsPage };

// Page objects injected as fixtures, so specs stay free of `new XPage(page)` boilerplate.
export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  productsPage: async ({ page }, use) => use(new ProductsPage(page)),
});

export { expect } from '@playwright/test';
