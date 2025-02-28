//Hooks en Playwright
//Funciones especiales para ejecutar código antes y despues de una prueba

import {test, expect} from "@playwright/test";

test.beforeEach(async ({page}) => {
    //Iniciar Sesión
    await page.goto("/demo/training/login.htm");
    await page.locator('input[name="user"]').fill("test");
    await page.locator('//input[@type="password"]').fill("secret");
    await page.getByRole("button", { name: "Login" }).click();    
});

test("Validar Inicio de Sesión", async ({page}) => {
    await expect(page.getByRole("heading", {name: "All available books"})).toBeVisible();
});

test("Compra Libros", async ({page}) => {
    //Comprar Libros
    await page.locator("//*[@id='listing']/tbody/tr[2]/td[4]/input").fill("1");
    await page.locator("//*[@id='listing']/tbody/tr[3]/td[4]/input").fill("2");
    await page.locator("//*[@id='listing']/tbody/tr[4]/td[4]/input").fill("3");
    await page.getByRole("button", {name : "Add"}).click();

    //Validar Compra
    await expect(page.locator("//*[@id='total']")).toHaveValue("1750");
    await page.screenshot({ path: "./screenshots/comprar_libros_valida.png", fullPage: true });
});

test.afterEach(async ({page}) => {
    //Salir
    await page.getByRole("button", {name : "Clear"}).click();
    await page.getByRole("button", {name : "Logout"}).click();
});