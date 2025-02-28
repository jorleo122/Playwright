//Fixtures
import {test as base} from "@playwright/test";

export const test = base.extend({
    autenticatedPage: async ({page}, use) => {
        await page.goto("https://sahitest.com/demo/training/login.htm");
        await page.locator("//input[@type='text']").fill("test");
        await page.locator("//input[@type='password']").fill("secret");
        await page.getByRole("button", {name:"Login"}).click();
        await use(page); //Permite que la página autenticada se use en los tests
    }
});

export {expect} from "@playwright/test";
