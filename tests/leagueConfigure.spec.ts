import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LeagueConfigure } from '../pages/LeagueConfigure';

test.describe('League Configuration', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login('playwright.automation@pff.com', 'Pff@Automation');
  });

  test('Select regular weeks 1 and 2', async ({ page }) => {
    const leagueConfigure = new LeagueConfigure(page);

    await leagueConfigure.selectLeague('NFL');
    await leagueConfigure.clearSelection();
    await leagueConfigure.configureRegularWeeks(['1', '2']);

    // Add verification here if you have a visible success indicator
  });
});
