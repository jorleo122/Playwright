export async function iniciarSesion(page, username, password) {
    await page.goto('https://www.saucedemo.com/v1/index.html');
    await page.locator('[data-test="username"]').fill(username);
    await page.locator('[data-test="password"]').fill(password);
    await page.getByRole('button', { name: 'LOGIN' }).click();
}

export async function validarSesion(page, expect) {
    await expect(page.getByText('Products')).toBeVisible();
}

export async function cerrarSesion(page) {
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
}