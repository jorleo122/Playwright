import { test, expect } from '@playwright/test';
import dotenv from "dotenv";

dotenv.config();

test('Probando Variables de Entorno', async ({ page }) => {
  await page.goto(".");
  await page.locator('[data-test="username"]').fill(process.env.USERBD);
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.getByText('Products')).toBeVisible();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
  console.log();
});