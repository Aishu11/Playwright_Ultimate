import { Page, expect } from '@playwright/test';

export class IQPlayerFinder {
  constructor(private page: Page) {}

  async navigateToIQ() {
    await this.page.getByRole('link', { name: 'IQ', exact: true }).click();
    await this.page.waitForURL('**/iq**');
  }

  async clickPlayerFinder() {
    await this.page.getByRole('link', { name: /Player Finder/ }).click();
    await this.page.waitForURL('**/player_finder_search**');
  }

  async selectPosition(position: string) {
    await this.page.getByRole('link', { name: position, exact: true }).click();
    await this.page.waitForURL(`**/player_finder/${position.substring(0, 2).toUpperCase()}**`);
  }

  async clickPlayer(playerName: string) {
    // Player name appears as a link inside the results table
    const playerLink = this.page.getByRole('link', { name: playerName }).first();
    await playerLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  async validatePlayerProfileLoaded(playerName: string) {
    await expect(this.page.getByRole('heading', { name: 'Quarterbacks', exact: false })).toBeVisible();
    await expect(this.page.locator('text=' + playerName).first()).toBeVisible();
  }
}
