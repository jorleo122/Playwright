import { test, expect } from "@playwright/test";

test.describe.parallel("Grupo de Pruebas usando Use", () => {
    test.use({baseURL: "https://www.saucedemo.com/v1/index.html"});
    test(`Inicio sesión URL 1`, async ({ page }) => {
        await page.goto(".");
        await page.locator('[data-test="username"]').fill("standard_user");
        await page.locator('[data-test="password"]').fill("secret_sauce");
        await page.getByRole('button', { name: 'LOGIN' }).click();
        await expect(page.getByText('Products')).toBeVisible();
    });

    test.use({baseURL: "https://www.saucedemo.com"});
    test(`Inicio sesión URL 2`, async ({ page }) => {
        await page.goto(".");
        await page.locator('[data-test="username"]').fill("standard_user");
        await page.locator('[data-test="password"]').fill("secret_sauce");
        await page.getByRole('button', { name: 'LOGIN' }).click();
        await expect(page.getByText('Products')).toBeVisible();
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
    });
});