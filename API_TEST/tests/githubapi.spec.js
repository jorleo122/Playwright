import {test, expect} from "@playwright/test";

const GITHUB_TOKEN = "tu_token";

test("Obtener Información de Usuario en GitHub", async ({request}) => {
    const response = await request.get("https://api.github.com/user", {
        headers: {
            'Authorization': `token ${GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
        }
    });
    expect(response.status()).toBe(200);
    const userData = await response.json();
    console.log(userData);
});