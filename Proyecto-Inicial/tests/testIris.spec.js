import {test, expect} from "./fixtures.js";

test("Validar el inicio de sesión", async ({autenticatedPage}) => {
    await expect(autenticatedPage.getByRole("heading", {name: "All available books"})).toBeVisible();
});