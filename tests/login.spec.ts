import { test } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';

test.describe('Practice Test Automation login', () => {
  test.afterEach(async ({ page }, testInfo) => {
    if (page.isClosed()) {
      return;
    }

    const screenshotPath = testInfo.outputPath('screenshot.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });
    await testInfo.attach('screenshot', {
      path: screenshotPath,
      contentType: 'image/png'
    });
  });

  test('allows a valid user to sign in', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('student', 'Password123');
    await loginPage.expectSuccessfulLogin();
  });
});