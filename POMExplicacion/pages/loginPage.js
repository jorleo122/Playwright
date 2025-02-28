import { ProductPage } from "./productPage";

export class LoginPage extends ProductPage {

    constructor(page){
        super(page);
        this.page = page;
        this.txtUsername = page.locator('[data-test="username"]');
        this.txtPassword = page.locator('[data-test="password"]');
        this.btnLogin = page.getByRole('button', { name: 'LOGIN' });
    }

    async goToURL(url){
        await this.page.goto(url);
    }

    async login(url, username, password){
        await this.goToURL(url);
        await this.txtUsername.fill(username);
        await this.txtPassword.fill(password);
        await this.btnLogin.click();
        await this.validateLogin();
        await this.logOut();
    }

}