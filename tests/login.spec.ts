import { test } from '../src/fixtures/pages';
import { env } from '../src/config/env';

test.describe('Nova Shop - Login', () => {
  test('standard user lands on Products page after login @smoke', async ({ loginPage, productsPage }) => {
    const { username, password } = env.users.standard;

    await loginPage.open();
    await loginPage.login(username, password);

    await productsPage.expectLoaded();
  });

  test('wrong password shows error message @smoke', async ({ loginPage }) => {
    const { username } = env.users.standard;

    await loginPage.open();
    await loginPage.login(username, 'wrongpassword');

    await loginPage.expectErrorMessage('Username and password do not match any user in this service');
  });
});
