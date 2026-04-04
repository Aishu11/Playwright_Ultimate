import { Page, test } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {
    }

    async navigateToLoginPage() {
        await this.page.goto('/');
        const title = await this.page.title();
        console.log('Page title:', title);
        return title;
    }

    async login(email: string, password: string) {
        await this.page.locator('#email-address').fill(email);
        await this.page.locator('#password').fill(password);
        await this.page.getByRole('button', { name: 'Sign In' }).click();
        await this.page.waitForLoadState('networkidle');
    }

    async getPageTitle() {
        return await this.page.title();
    }
}