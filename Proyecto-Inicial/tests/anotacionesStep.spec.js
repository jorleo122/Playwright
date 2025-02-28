import { test, expect } from '@playwright/test';

test("Login Exitoso", async ({ page }) => {
    //Navegar a una página web
    await page.goto("https://sahitest.com/demo/training/login.htm");

    await test.step("Llenar los campos de inicio de sesión", async () => {
        await page.locator("//input[@type='text']").fill("test");
        await page.locator("//input[@type='password']").fill("secret");
        await page.getByRole("button", { name: "Login" }).click();
    });

    await test.step("Validar Inicio", async () => {
        await expect(page.getByRole("heading", { name: "All available books" })).toBeVisible();
        await page.screenshot({ path: "./screenshots/iniciar_sesion.png", fullPage: true });
    });
});