import { test, expect } from "@playwright/test";

test("Get - Obtener lista de publicaciones", async ({ request }) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/posts/1");
    expect(response.status()).toBe(200);
    const post = await response.json();
    expect(post).toHaveProperty("id");
    expect(post).toHaveProperty("title");
    expect(post).toHaveProperty("body");
    console.log(post);
});

test('Post - Crear una nueva publicación', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: 'Mi Nuevo Post',
            body: 'Contenido del post',
            userId: 1
        }
    });
    expect(response.status()).toBe(201);
    const post = await response.json();
    console.log(post);
});


test('Put - Actualizar una publicación', async ({ request }) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            id: 1,
            title: 'Post Actualizado',
            body: 'Nuevo contenido',
            userId: 1
        }
    });
    expect(response.status()).toBe(200);
    const updatedPost = await response.json();
    console.log(updatedPost);
});

test('Delete - Eliminar una publicación', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);
});