import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  readonly path = '/shop/products';

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/\/shop\/products/);
    await expect(this.page.getByRole('heading', { name: /products/i }).first()).toBeVisible();
  }
}
