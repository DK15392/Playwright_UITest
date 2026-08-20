import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('#submit');
  }

  async open(): Promise<void> {
    await this.page.goto('/practice-test-login/');
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async expectSuccessfulLogin(): Promise<void> {
    await expect(this.page).toHaveURL(/logged-in-successfully/);
    await expect(this.page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
  }
}