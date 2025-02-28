import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';
import { ProductPage } from '../pages/productPage.js';

test('Login User Ok', async ({ page }) => {  
    //Instanciar Página/Objeto
    const loginPage = new LoginPage(page);
    //Logica de Ejecución
    await loginPage.login("https://www.saucedemo.com/v1/index.html", "standard_user", "secret_sauce");
});