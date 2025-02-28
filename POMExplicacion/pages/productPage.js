import {expect} from "@playwright/test";
import { LoginPage } from "./loginPage";

export class ProductPage {

    constructor(page){
        this.page = page;
        this.divTitleProducts = page.getByText('Products');
        this.btnOpenMenu = page.getByRole('button', { name: 'Open Menu' });
        this.linkLogOut = page.getByRole('link', { name: 'Logout' });
        this.categoriaProducto = page.getByRole();
    }

    async validateLogin(){
        await expect(this.divTitleProducts).toBeVisible();
    }

    async logOut(){
        await this.btnOpenMenu.click();
        await this.linkLogOut.click();
    }

}