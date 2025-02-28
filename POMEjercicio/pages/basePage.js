import { expect } from "@playwright/test";

export class BasePage {

    constructor(page) {
        this.page = page;
        this.headerMain = page.getByText('Products');
        this.btnMenu = page.getByRole('button', { name: 'Open Menu' });
        this.btnLogout = page.getByRole('link', { name: 'Logout' });
    }

    async goToUrl(url) {
        await this.page.goto(url);
    }

    async validateLogin(){
        await expect(this.headerMain).toBeVisible();
    }

    async logout(){
        await this.btnMenu.click();
        await this.btnLogout.click();
    }

}