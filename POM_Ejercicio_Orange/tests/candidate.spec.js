import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { RecruitmentPage } from "../pages/recruitmentPage";

test("Crear Candidato", async ({ page }) => {
    //Instanciar Objetos
    const loginPage = new LoginPage(page);
    const recruitmentPage = new RecruitmentPage(page);
    //Lógica
    await loginPage.loginSuccesful("Admin", "admin123");
    await recruitmentPage.createCandidate("Jorge", "Rubio", "email@example.com", "123456789", "Account, Assistant", "2025-25-02", "Una nota")
    await recruitmentPage.validateCreateCandidate("Jorge", "Rubio");
});