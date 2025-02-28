import { test, expect } from '@playwright/test';

test("Iniciar Sesión", async ({page}) => {
    //Navegar a una página web
    await page.goto("https://sahitest.com/demo/training/login.htm", {timeout: 10000});
    //Localizar los elementos del formulario de inicio de sesión
    await page.locator("//input[@type='text']", {timeout: 20000}).fill("test", {timeout: 10000});
    await page.locator("//input[@type='password']").fill("secret");
    await page.getByRole("button", {name:"Login"}).click({timeout: 10000});
    await page.waitForTimeout(5000);
    //Validar el inicio de sesión
    await expect(page.getByRole("heading", {name: "All available books"})).toBeVisible({timeout: 10000});
});