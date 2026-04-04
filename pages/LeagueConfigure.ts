import { test, expect } from '@playwright/test';


test('Configure League', async ({ page }) => {
await page.getByText('NFL').click();
await page.getByRole('button', { name: 'Clear' }).click();

const regularSection = page.locator('div:has-text("Regular")');

await regularSection.getByRole('button', { name: '1' }).click();
await regularSection.getByRole('button', { name: '2' }).click();
});