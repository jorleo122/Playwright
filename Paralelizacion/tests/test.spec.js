import { test, expect } from "@playwright/test";

//Definir configuraciones de cada prueba
const testCases = [
    { url: "https://www.saucedemo.com/v1/index.html", user: { username: "standard_user", password: "secret_sauce" } },
    { url: "https://www.saucedemo.com", user: { username: "problem_user", password: "secret_sauce" } }
];

test.describe.parallel("Grupo de Pruebas", () => {
    testCases.forEach(({ url, user }) => {
        test(`Login con el usuario ${user.username}`, async ({ page }) => {
            await page.goto(url);
            await page.locator('[data-test="username"]').fill(user.username);
            await page.locator('[data-test="password"]').fill(user.password);
            await page.getByRole('button', { name: 'LOGIN' }).click();
            await expect(page.getByText('Products')).toBeVisible();
            await page.getByRole('button', { name: 'Open Menu' }).click();
            await page.getByRole('link', { name: 'Logout' }).click();
        });
    });
});