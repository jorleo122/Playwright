import {test, expect} from "@playwright/test";

let timeout = 5000;

test("Paralel #2 - CP #1", async ({page}) => {
    console.log("Paralel #2 - CP #1");
    await page.waitForTimeout(timeout);
});

test("Paralel #2 - CP #2", async ({page}) => {
    console.log("Paralel #2 - CP #2");
    await page.waitForTimeout(timeout);
});

test("Paralel #2 - CP #3", async ({page}) => {
    console.log("Paralel #2 - CP #3");
    await page.waitForTimeout(timeout);
});

test("Paralel #2 - CP #4", async ({page}) => {
    console.log("Paralel #2 - CP #4");
    await page.waitForTimeout(timeout);
});