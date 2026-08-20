import { test } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';

test.describe('Practice Test Automation login', () => {
  test('allows a valid user to sign in', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('student', 'Password123');
    await loginPage.expectSuccessfulLogin();
  });
});