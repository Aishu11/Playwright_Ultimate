import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.login('playwright.automation@pff.com', 'Pff@Automation');
  await page.context().storageState({ path: 'utils/storageState.json' });
});
