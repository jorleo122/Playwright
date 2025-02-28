//Anotaciones - Annotations
import { test, expect } from '@playwright/test';

test.describe.skip("HU # 23", () => {
    test("Iniciar Sesión", async ({page}) => {
        //Navegar a una página web
        await page.goto("https://sahitest.com/demo/training/login.htm");
        //Localizar los elementos del formulario de inicio de sesión
        await page.locator("//input[@type='text']").fill("test");
        await page.locator("//input[@type='password']").fill("secret");
        await page.getByRole("button", {name:"Login"}).click();
        //Validar el inicio de sesión
        await expect(page.getByRole("heading", {name: "All available books"})).toBeVisible();
        //Captura una pantalla
        await page.screenshot({path: "./screenshots/iniciar_sesion.png", fullPage: true});
    });
    
    test("Comprar Libros", async ({page}) => {
        //Iniciar Sesión
        await page.goto("https://sahitest.com/demo/training/login.htm");
        await page.locator('input[name="user"]').fill("test");
        await page.locator('//input[@type="password"]').fill("secret");
        await page.getByRole("button", { name: "Login" }).click();
        await expect(page.getByRole("heading", {name: "All available books"})).toBeVisible();
        
        //Comprar Libros
        await page.locator("//*[@id='listing']/tbody/tr[2]/td[4]/input").fill("1");
        await page.locator("//*[@id='listing']/tbody/tr[3]/td[4]/input").fill("2");
        await page.locator("//*[@id='listing']/tbody/tr[4]/td[4]/input").fill("3");
        await page.getByRole("button", {name : "Add"}).click();
    
        //Validar Compra
        await expect(page.locator("//*[@id='total']")).toHaveValue("1750");
        await page.screenshot({ path: "./screenshots/comprar_libros_valida.png", fullPage: true });
    
        //Salir
        await page.getByRole("button", {name : "Clear"}).click();
        await page.getByRole("button", {name : "Logout"}).click();
    });
});

test.skip("Test Skip", async ({page}) => {
    //Navegar a una página web
    await page.goto("https://sahitest.com/demo/training/login.htm");
    //Localizar los elementos del formulario de inicio de sesión
    await page.locator("//input[@type='text']").fill("test");
    await page.locator("//input[@type='password']").fill("secret");
    await page.getByRole("button", {name:"Login"}).click();
});

test.fixme("Prueba Orientada al Exito", async ({page}) => {
    //Navegar a una página web
    await page.goto("https://sahitest.com/demo/training/login.htm");
    //Localizar los elementos del formulario de inicio de sesión
    await page.locator("//input[@type='text']").fill("test");
    await page.locator("//input[@type='password']").fill("secret");
    await page.getByRole("button", {name:"Login"}).click();
    //Validar el inicio de sesión
    await expect(page.getByRole("heading", {name: "All available books"})).toBeVisible();
});

test("Prueba Orientada al Fallo", async ({page, browserName}) => {
    test.slow(browserName === "firefox", "Esta funcionalidad es lenta en Firefox");
    //Navegar a una página web
    await page.goto("https://sahitest.com/demo/training/login.htm");
    //Localizar los elementos del formulario de inicio de sesión
    await page.locator("//input[@type='text']").fill("test");
    await page.locator("//input[@type='password']").fill("secret");
    await page.getByRole("button", {name:"Login"}).click();
    //Validar el inicio de sesión
    await expect(page.getByRole("heading", {name: "All available books"})).toBeVisible();
});