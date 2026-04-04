import { Page } from '@playwright/test';

export class LeagueConfigure {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/nfl/reports');
  }

  async selectLeague(league: string) {
    await this.page.locator('.kyber-filter-dropdown__toggle-text', { hasText: league }).click();
  }

  async clearSelection() {
    await this.page.getByRole('button', { name: 'Clear' }).click();
  }

  async openSeasonWeeksDropdown() {
    await this.page.locator('.kyber-filter-dropdown__toggle-text', { hasText: 'Select..' }).click();
  }

  async configureRegularWeeks(weeks: string[]) {
    const regularSection = this.page.locator('.kyber-dropdown-weeks-segment').filter({
      has: this.page.locator('[aria-label="Check All Regular"]'),
    });
    for (const week of weeks) {
      await regularSection.locator('.kyber-filter-strip__option').filter({ hasText: new RegExp(`^${week}$`) }).click();
    }
  }
}
