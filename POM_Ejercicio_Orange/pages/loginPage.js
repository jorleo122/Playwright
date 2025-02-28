import { expect } from "@playwright/test";

export class LoginPage {

    constructor(page) {
        this.page = page;
        this.txtUsername = page.getByRole('textbox', { name: 'Username' });
        this.txtPassword = page.getByRole('textbox', { name: 'Password' });
        this.btnLogin = page.getByRole('button', { name: 'Login' });
        this.titleDashboard = page.getByRole('heading', { name: 'Dashboard' });
    }

    async loginSuccesful(user, pass) {
        await this.page.goto("");
        await this.page.waitForLoadState("networkidle");
        await this.txtUsername.fill(user);
        await this.txtPassword.fill(pass);
        await this.btnLogin.click();
        await this.page.waitForLoadState("networkidle");
        try {
            await expect(this.titleDashboard).toBeVisible();
        } catch (error) {
            throw new Error("El elemento no se encuentra visible!");
        }
    }

}