import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductDetailsPage extends BasePage {
  readonly path = '/shop/product';

  readonly productImage = this.page.getByRole('img').first();
  readonly productPrice = this.page.getByTestId('product-price');
  readonly addToCartButton = this.page.getByRole('button', { name: /add to cart/i });

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/\/shop\/product\//);
  }

  async expectProductDetailsVisible(): Promise<void> {
    await expect(this.productImage).toBeVisible();
    await expect(this.productPrice).toBeVisible();
    await expect(this.addToCartButton).toBeVisible();
  }
}
