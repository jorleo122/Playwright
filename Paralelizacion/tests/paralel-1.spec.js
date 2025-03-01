import {test, expect} from "@playwright/test";

let timeout = 5000;

//test.describe.configure({mode: "serial"});

test("Paralel #1 - CP #1", async ({page}) => {
    console.log("Paralel #1 - CP #1");
    await page.waitForTimeout(timeout);
});

test("Paralel #1 - CP #2", async ({page}) => {
    console.log("Paralel #1 - CP #2");
    await page.waitForTimeout(timeout);
    await expect(page).toHaveTitle(/Capacitacion/);
});

test("Paralel #1 - CP #3", async ({page}) => {
    console.log("Paralel #1 - CP #3");
    await page.waitForTimeout(timeout);
});

test("Paralel #1 - CP #4", async ({page}) => {
    console.log("Paralel #1 - CP #4");
    await page.waitForTimeout(timeout);
});