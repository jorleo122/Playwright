import { test, expect } from "@playwright/test";
import * as keyword from "../keyword/keywordfunctions.js";
import data from "../data/datos.json";

test.describe("Keyword Driven con JSON", () => {
    for (const usuario of data) {
        test(`Iniciar sesión con el usuario ${usuario.username}`, async ({ page }) => {
            await keyword.iniciarSesion(page, usuario.username, usuario.password);
            await keyword.validarSesion(page, expect);
            await keyword.cerrarSesion(page);
        });
    }
});