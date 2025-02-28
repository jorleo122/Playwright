export class LoginPage {

    constructor(page) {
        this.page = page;
        this.txtUsername = page.locator('[data-test="username"]');
        this.txtPassword = page.locator('[data-test="password"]');
        this.btnLogin = page.getByRole('button', { name: 'LOGIN' });
    }

    async login(username, password) {
        await this.txtUsername.fill(username);
        await this.txtPassword.fill(password);
        await this.btnLogin.click();
    }

}