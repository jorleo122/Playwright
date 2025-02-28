import {test, expect} from "./fixtures.js";

test("Compra de Libros", async ({autenticatedPage}) => {
    //Comprar Libros
    await autenticatedPage.locator("//*[@id='listing']/tbody/tr[2]/td[4]/input").fill("1");
    await autenticatedPage.locator("//*[@id='listing']/tbody/tr[3]/td[4]/input").fill("2");
    await autenticatedPage.locator("//*[@id='listing']/tbody/tr[4]/td[4]/input").fill("3");
    await autenticatedPage.getByRole("button", {name : "Add"}).click();
    //Validar Compra
    await expect(autenticatedPage.locator("//*[@id='total']")).toHaveValue("1750");
});