// The fetch handler supports async/await:

import { sleep, serve } from "bun";

const server = serve({
    port: 3000,
    async fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === "/") {
            return new Response("Home Page!");
        }
        if (url.pathname === "/about") {
            return new Response("We are Tesseract Esports LLP!")
        }
        if (url.pathname === "/sleep") {
            const start = performance.now();  // Record the start time
            await sleep(10);                 // Sleep for 10 milliseconds
            const end = performance.now();    // Record the end time
            return new Response(`Slept for ${end - start}ms`);  // Respond with the elapsed time
        }
        return new Response("Error 404");
    }
})

console.log(`Listening on PORT ${server.port}`)