import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sahitest.com/demo/training/login.htm');
  await page.locator('input[name="user"]').click();
  await page.locator('input[name="user"]').fill('test');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('secret');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://sahitest.com/demo/training/login.htm');
  await page.locator('input[name="user"]').click();
  await page.locator('input[name="user"]').fill('test');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('secret');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('row', { name: 'Core Java 5 Rs. 300' }).getByRole('textbox').click();
  await page.getByRole('row', { name: 'Core Java 5 Rs. 300' }).getByRole('textbox').fill('1');
  await page.getByRole('button', { name: 'Add' }).click();
  
});