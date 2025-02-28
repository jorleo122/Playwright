import { test, expect } from '@playwright/test';

test('codegen', async ({ page }) => {
    //Navegar
    await page.goto('https://sahitest.com/demo/training/login.htm');
    //Inicio de sesión
    await page.locator('input[name="user"]').fill('test');
    await page.locator('input[name="password"]').fill('secret');
    await page.getByRole('button', { name: 'Login' }).click();
    //Compra de libros
    await page.getByRole('row', { name: 'Core Java 5 Rs. 300' }).getByRole('textbox').fill('1');
    await page.getByRole('row', { name: 'Ruby for Rails 12 Rs. 200' }).getByRole('textbox').fill('1');
    await page.getByRole('row', { name: 'Python Cookbook 7 Rs. 350' }).getByRole('textbox').fill('1');
    await page.getByRole('button', { name: 'Add' }).click();
    //Limpiar y salir
    await page.getByRole('button', { name: 'Clear' }).click();
    await page.getByRole('button', { name: 'Logout' }).click();

    
    
});