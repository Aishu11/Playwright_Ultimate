import { test } from '@playwright/test';
import { LeagueConfigure } from '../pages/LeagueConfigure';

test.describe('League Configuration', () => {
  test('Select regular weeks 1 and 2', async ({ page }) => {
    const leagueConfigure = new LeagueConfigure(page);

    await leagueConfigure.goto();
    await leagueConfigure.selectLeague('NFL');
    await leagueConfigure.clearSelection();
    await leagueConfigure.openSeasonWeeksDropdown();
    await leagueConfigure.configureRegularWeeks(['1', '2']);
  });
});
