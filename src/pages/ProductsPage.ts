import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  readonly path = '/shop/products';

  readonly searchBox = this.page.getByPlaceholder(/search products/i);
  readonly categoriesDropdown = this.page.getByRole('combobox', { name: /categories/i });
  readonly featuredDropdown = this.page.getByRole('combobox', { name: /featured/i });
  readonly inStockCheckbox = this.page.getByRole('checkbox', { name: /in stock only/i });

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/\/shop\/products/);
    await expect(this.page.getByRole('heading', { name: /products/i }).first()).toBeVisible();
  }

  async expectFilterBarVisible(): Promise<void> {
    await expect(this.searchBox).toBeVisible();
    await expect(this.categoriesDropdown).toBeVisible();
    await expect(this.featuredDropdown).toBeVisible();
    await expect(this.inStockCheckbox).toBeVisible();
  }
}
