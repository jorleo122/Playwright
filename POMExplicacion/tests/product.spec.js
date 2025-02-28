import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';
import { ProductPage } from '../pages/productPage.js';
import { CartPage } from '../pages/cartPage.js';

test('Validar agregar producto al carrito de compras', async ({ page }) => {  
    //Instanciar Página/Objeto
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage();
    //Logica de Ejecución
    await loginPage.goToURL("https://www.saucedemo.com/v1/index.html");
    await loginPage.login("standard_user", "secret_sauce");
    await productPage.validateLogin();
    await cartPage.validateCart();
    await productPage.logOut();
});