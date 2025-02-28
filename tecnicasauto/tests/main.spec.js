import { test, expect } from '@playwright/test';
import data from "../data/datos.json";

test.describe("Data Driven con JSON", () => {
  for (const usuario of data) {
    test(`Iniciar sesión con el usuario ${usuario.username}`, async ({ page }) => {
      await page.goto('https://www.saucedemo.com/v1/index.html');
      await page.locator('[data-test="username"]').fill(usuario.username);
      await page.locator('[data-test="password"]').fill(usuario.password);
      await page.getByRole('button', { name: 'LOGIN' }).click();
      await expect(page.getByText('Products')).toBeVisible();
      await page.getByRole('button', { name: 'Open Menu' }).click();
      await page.getByRole('link', { name: 'Logout' }).click();
    });
  }
});
