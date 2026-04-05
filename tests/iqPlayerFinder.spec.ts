import { test, expect } from '@playwright/test';
import { IQPlayerFinder } from '../pages/IQPlayerFinder';
import { players } from '../testData/players';

test.describe('IQ Player Finder', () => {
  test('Navigate to IQ > Player Finder > QB > validate profile page', async ({ page }) => {
    const iqPlayerFinder = new IQPlayerFinder(page);
    const playerName = players.iqPlayerFinder.quarterback;

    // Navigate to the app home (auth already handled via storageState)
    await page.goto('/nfl/reports');

    // Step 1: Click IQ in the nav
    await iqPlayerFinder.navigateToIQ();

    // Step 2: Click Player Finder
    await iqPlayerFinder.clickPlayerFinder();

    // Step 3: Select Quarterback as position (League is NFL by default)
    await iqPlayerFinder.selectPosition('Quarterback');

    // Step 4: Click on the player
    await iqPlayerFinder.clickPlayer(playerName);

    // Step 5: Validate the player profile page loaded
    await iqPlayerFinder.validatePlayerProfileLoaded(playerName);

    // Additional validations
    await expect(page).toHaveURL(/\/iq\/players\/.*\/overview/);
    await expect(page.locator('text=Cincinnati Bengals')).toBeVisible();
  });
});
