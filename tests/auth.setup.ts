import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  await page.context().storageState({ path: 'utils/storageState.json' });
});
