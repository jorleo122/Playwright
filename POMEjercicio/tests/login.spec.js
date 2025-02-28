import { test } from '@playwright/test';
import { BasePage } from "../pages/basePage.js"
import { LoginPage } from '../pages/loginPage.js';

test('Login user OK', async ({ page }) => {
  //Instanciar Paginas/Objetos
  const loginPage = new LoginPage(page);
  const basePage = new BasePage(page);
  //Lógica de Ejecución
  await basePage.goToUrl("https://www.saucedemo.com/v1/index.html");
  await loginPage.login("standard_user", "secret_sauce");
  await basePage.validateLogin();
});