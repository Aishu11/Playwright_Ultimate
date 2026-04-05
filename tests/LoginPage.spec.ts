import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  const initialTitle = await loginPage.navigateToLoginPage();
  expect(initialTitle).toBe('PFF Login');

  await loginPage.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);

  // Verify login success by checking the page title or a specific element
  const postLoginTitle = await loginPage.getPageTitle();
  expect(postLoginTitle).toBe('Expected Post-Login Title'); // Replace with actual expected title
});
